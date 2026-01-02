export const getWikiImage = async (title: string): Promise<string | null> => {
  const enc = encodeURIComponent(title);
  try {
    const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${enc}`;
    console.debug("wiki: fetching summary:", summaryUrl);
    let resp = await fetch(summaryUrl);
    // если точной страницы нет (404) — попробуем найти схожую через search и запросить её summary
    if (!resp.ok) {
      if (resp.status === 404) {
        console.debug("wiki: summary 404, attempting search for:", title);
        const searchUrl = `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${enc}&limit=1`;
        console.debug("wiki: searching title:", searchUrl);
        const searchResp = await fetch(searchUrl);
        if (searchResp.ok) {
          const sdata = await searchResp.json();
          const first = sdata?.pages?.[0];
          const candidate = first?.key || first?.title;
          if (candidate) {
            const cEnc = encodeURIComponent(candidate);
            const altSummary = `https://en.wikipedia.org/api/rest_v1/page/summary/${cEnc}`;
            console.debug("wiki: fetching summary for candidate:", altSummary);
            resp = await fetch(altSummary);
            if (!resp.ok) {
              const text = await resp.text().catch(() => "<no body>");
              console.warn(`wiki summary candidate failed ${resp.status}:`, text);
              return null;
            }
          } else {
            const text = await resp.text().catch(() => "<no body>");
            console.warn("wiki search returned no candidate:", text);
            return null;
          }
        } else {
          const text = await searchResp.text().catch(() => "<no body>");
          console.warn(`wiki search failed ${searchResp.status}:`, text);
          return null;
        }
      } else {
        const text = await resp.text().catch(() => "<no body>");
        console.warn(`wiki summary failed ${resp.status}:`, text);
        return null;
      }
    }
    const data = await resp.json();
    // try summary thumbnail
    if (data.thumbnail?.source) return data.thumbnail.source as string;
    // try originalimage from summary
    if (data.originalimage?.source) return data.originalimage.source as string;

    // fallback: fetch media list and pick first image
    const mediaUrl = `https://en.wikipedia.org/api/rest_v1/page/media/${enc}`;
    console.debug("wiki: fetching media list:", mediaUrl);
    const mediaResp = await fetch(mediaUrl);
    if (!mediaResp.ok) {
      const text = await mediaResp.text().catch(() => "<no body>");
      console.warn(`wiki media failed ${mediaResp.status}:`, text);
      return null;
    }
    const media = await mediaResp.json();
    const items = media?.items || [];
    for (const it of items) {
      // items may include type 'image' with srcset or src
      if (it.type === 'image') {
        if (it.srcset && it.srcset.length) return it.srcset[0].src;
        if (it.src) return it.src;
      }
    }
    return null;
  } catch {
    return null;
  }
};