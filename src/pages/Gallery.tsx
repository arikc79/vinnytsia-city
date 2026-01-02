import { useEffect, useState } from "react";
import { fetchVinnytsiaImages } from "../services/commonsApi";
import type { CommonsImage } from "../services/commonsApi";


const Gallery = () => {
  const [items, setItems] = useState<CommonsImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchVinnytsiaImages()
      .then((res) => mounted && setItems(res))
      .catch((e) => mounted && setError(String(e)))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  if (loading) return <p>Завантаження галереї...</p>;
  if (error) return <p className="text-red-600">Помилка: {error}</p>;
  if (!items.length) return <p>Немає зображень</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Галерея Вінниці</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((img) => (
          <div
            key={img.id}
            className="overflow-hidden rounded shadow hover:shadow-lg transition"
          >
            <img
              src={img.thumbnail}
              alt={img.title}
              className="w-full h-40 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
