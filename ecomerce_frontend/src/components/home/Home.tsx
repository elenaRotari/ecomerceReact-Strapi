import { useLoaderData } from "react-router-dom";
import Cards from "../cards/Cards.tsx";
import CommingProducts from "../comming_products/CommingProducts.tsx";
import Slider from "../slider/Slider.tsx";
import { api } from "../../lib/api.ts";

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
type LoaderProps = {
  data: Data[];
  items: Items[];
};
function Home() {
  const data = useLoaderData() as LoaderProps;

  return (
    <div className="home">
      <Slider data={data.data} />
      <CommingProducts type="comming" data={data.items} />
      <CommingProducts type="trending" />
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
  return { data, items };
};
