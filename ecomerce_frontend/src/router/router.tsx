import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/home/Home.tsx";
import Category from "../components/catergory/Category.tsx";
import Product from "../components/product/Product.tsx";
import Store from "../components/store/Store.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Category />,
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
