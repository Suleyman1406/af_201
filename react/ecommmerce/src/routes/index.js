import { createBrowserRouter } from "react-router-dom";
import Home from "pages/home";
import Cart from "pages/cart";
import Favorites from "pages/favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/favorites",
    element: <Favorites/>,
  },
]);

