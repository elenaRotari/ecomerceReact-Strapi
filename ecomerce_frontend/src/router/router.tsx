import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home, { loader as sliderData } from "../components/home/Home.tsx";
import Category from "../components/catergory/Category.tsx";
import Product from "../components/product/Product.tsx";
import Store from "../components/store/Store.tsx";
import Categories from "../components/categories/Categories.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: sliderData,
      },
      {
        path: "/category/:id",
        element: <Categories />,
      },

      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);
export default router;
