import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* HEADER */}
      <header className="p-6 bg-white shadow">
        <nav className="flex flex-wrap gap-4 font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:underline"
            }
          >
            Головна
          </NavLink>

          <NavLink
            to="/city"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:underline"
            }
          >
            Місто
          </NavLink>

          <NavLink
            to="/main-landmark"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:underline"
            }
          >
            Головна памʼятка
          </NavLink>

          <NavLink
            to="/landmarks"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:underline"
            }
          >
            Памʼятки
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:underline"
            }
          >
            Галерея
          </NavLink>
        </nav>
      </header>

      {/* ГОЛОВНИЙ КОНТЕНТ */}
      <main className="p-6">
        <section
          className="relative max-w-6xl mx-auto rounded-xl overflow-hidden"
          style={{
            backgroundImage: "url('/vinnytsia-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* ПРОЗОРИЙ ОВЕРЛЕЙ */}
          <div className="absolute inset-0 bg-black/30" />

          {/* ВНУТРІШНІЙ КОНТЕНТ */}
          <div className="relative z-10 p-8 text-white">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
