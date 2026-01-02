import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="p-6">
      <header className="mb-6">
        <nav className="space-x-4">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "font-bold" : "")}>Головна</NavLink>
          <NavLink to="/city" className={({ isActive }) => (isActive ? "font-bold" : "")}>Місто</NavLink>
          <NavLink to="/main-landmark" className={({ isActive }) => (isActive ? "font-bold" : "")}>Головна пам'ятка</NavLink>
          <NavLink to="/landmarks" className={({ isActive }) => (isActive ? "font-bold" : "")}>Пам'ятки</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "font-bold" : "")}>Галерея</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
