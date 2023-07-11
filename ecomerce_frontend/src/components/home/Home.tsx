import { useLoaderData } from "react-router-dom";

import CommingProducts from "../comming_products/CommingProducts.tsx";
import Slider from "../slider/Slider.tsx";
import { api } from "../../lib/api.ts";
import Category from "../catergory/Category.tsx";

type Items = {
  title: string;
  oldPrice: number;
  isNew: boolean;
  price: number;
  img: string;
};
type Data = {
  data: any;
};
type Categorys = {
  name: string;
  avatar: string;
};
type LoaderProps = {
  data: Data[];
  items: Items[];
  categoriesData: Categorys[];
};
function Home() {
  const data = useLoaderData() as LoaderProps;

  return (
    <div className="home">
      <Slider data={data.data} />
      <CommingProducts type="comming" data={data.items} />
      <Category categoriesData={data.categoriesData} />
      <CommingProducts type="trending" data={data.items} />
    </div>
  );
}

export default Home;

export const loader = async () => {
  //sliderData
  const props = {
    url: "http://localhost:1337",
    path: "api/slider?populate=items",
  };
  const data = await api(props);

  // itemsData
  const propsItems = {
    url: "http://localhost:1337",
    path: "api/items?populate=img",
  };
  const items = await api(propsItems);
  // categorysData
  const categorys = {
    url: "http://localhost:1337",
    path: "api/categories?populate=avatar",
  };
  const categoriesData = await api(categorys);

  return { data, items, categoriesData };
};
