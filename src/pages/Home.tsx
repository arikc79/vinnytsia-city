import { NavLink } from "react-router-dom";
import vinnytsiaBg from "../assets/vinnytsia-bg.jpg";

const Home = () => {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center px-6 relative"
      style={{
        backgroundImage: `url(${vinnytsiaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ПРОЗОРИЙ ФОН */}
      <div className="absolute inset-0 bg-black/20" />

      {/* КОНТЕНТ (ОДИН БЛОК) */}
      <div className="relative z-10 max-w-4xl w-full bg-white/85 rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          Вінниця — сучасне місто України
        </h1>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Навчальний React-проєкт, присвячений місту Вінниця.
          Реалізована система маршрутизації, окремі сторінки
          та локальні зображення для стабільної роботи.
        </p>

        <div className="flex flex-wrap gap-4">
          <NavLink
            to="/city"
            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Про місто
          </NavLink>

          <NavLink
            to="/main-landmark"
            className="px-6 py-3 rounded bg-gray-800 text-white hover:bg-gray-900 transition"
          >
            Головна памʼятка
          </NavLink>

          <NavLink
          to="/gallery"
          className="px-6 py-3 rounded bg-green-600 text-white hover:bg-green-700 transition"
        >
            Галерея
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Home;
