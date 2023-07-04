import {createBrowserRouter} from "react-router-dom"
import App from "../App";
import Home from "../components/Home.tsx";
import Category from "../components/Category.tsx";
import Product from "../components/Product.tsx";

  const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/home",
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