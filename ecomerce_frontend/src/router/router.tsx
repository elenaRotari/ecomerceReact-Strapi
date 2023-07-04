import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Home from "../components/home/Home.tsx";
import Category from "../components/catergory/Category.tsx";
import Product from "../components/product/Product.tsx";

  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Category />,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ]
  },
]);
export default router;