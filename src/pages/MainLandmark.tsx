import { useEffect, useState } from "react";
import { landmarks } from "../data/landmarks";
import { getWikiImage } from "../services/wikiApi";

const MainLandmark = () => {
  const main = landmarks[0];
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);
    getWikiImage(main.wikiTitle)
      .then((src) => {
        if (!mounted) return;
        setImage(src);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(String(err || "unknown error"));
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [main.wikiTitle]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{main.title}</h1>

      {loading ? (
        <p>Завантаження зображення...</p>
      ) : error ? (
        <p className="text-red-600">Помилка: {error}</p>
      ) : image ? (
        <img src={image} alt={main.title} className="max-w-xl rounded" />
      ) : (
        <div>
          <p>Зображення не знайдено.</p>
          <p className="text-sm text-gray-500">
            Запит: https://en.wikipedia.org/api/rest_v1/page/summary/
            {encodeURIComponent(main.wikiTitle)}
          </p>
        </div>
      )}
    </div>
  );
};

export default MainLandmark;
