export interface CommonsImage {
  id: string;
  title: string;
  thumbnail: string;
}

export const fetchVinnytsiaImages = async (): Promise<CommonsImage[]> => {
  const url =
    "https://commons.wikimedia.org/w/api.php" +
    "?action=query" +
    "&generator=categorymembers" +
    "&gcmtitle=Category:Vinnytsia" +
    "&gcmtype=file" +
    "&gcmlimit=12" +
    "&prop=imageinfo" +
    "&iiprop=url" +
    "&iiurlwidth=600" +
    "&format=json" +
    "&origin=*";

  const resp = await fetch(url);
  if (!resp.ok) throw new Error("Failed to fetch images");

  const data = await resp.json();
  const pages = data?.query?.pages || {};

  return Object.values(pages).map((p: any) => ({
    id: String(p.pageid),
    title: p.title,
    thumbnail: p.imageinfo?.[0]?.thumburl,
  })).filter((i: any) => i.thumbnail);
};
