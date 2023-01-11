import { createBrowserRouter } from "react-router-dom";
import Home from "pages/home";
import Fav from "pages/Favorites/Fav";
import Root from "components/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "favorites",
        element: <Fav/>
      }
    ]
  },
]);