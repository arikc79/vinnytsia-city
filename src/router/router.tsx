import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import CityInfo from "../pages/CityInfo";
import MainLandmark from "../pages/MainLandmark";
import Landmarks from "../pages/Landmarks";
import Gallery from "../pages/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "city", element: <CityInfo /> },
      { path: "main-landmark", element: <MainLandmark /> },
      { path: "landmarks", element: <Landmarks /> },
      { path: "gallery", element: <Gallery /> },
    ],
  },
]);
