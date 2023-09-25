import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import GamingPeripherals from "./pages/GamingPeripherals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import GameDetails from "./pages/GameDetails";
import GamesPlatform from "./pages/GamesPlatform";
import GamesGenre from "./pages/GamesGenre";
import ProductDetails from "./pages/ProductDetails";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/game",
          element: <GameDetails />,
        },
        {
          path: "/games",
          element: <GamesGenre />,
        },
        {
          path: "/pc-games",
          element: <GamesPlatform platformCategory="pc" />,
        },
        {
          path: "/ps4-games",
          element: <GamesPlatform platformCategory="ps4" />,
        },
        {
          path: "/ps5-games",
          element: <GamesPlatform platformCategory="ps5" />,
        },
        {
          path: "/xbox-games",
          element: <GamesPlatform platformCategory="xbox" />,
        },
        {
          path: "/gaming-peripherals",
          element: <GamingPeripherals />,
        },
        {
          path: "/product",
          element: <ProductDetails />,
        },
        {
          path: "/about-us",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
