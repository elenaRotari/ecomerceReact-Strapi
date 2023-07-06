import Cards from "../cards/Cards.tsx";
import CommingProducts from "../comming_products/CommingProducts.tsx";
import Slider from "../slider/Slider.tsx";

function Home() {
  return (
    <div className="home">
      <Slider />
      <CommingProducts />
      <Cards />
    </div>
  );
}

export default Home;
