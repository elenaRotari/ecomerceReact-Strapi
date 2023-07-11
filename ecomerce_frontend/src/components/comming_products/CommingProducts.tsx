import "./comming.scss";
import Cards from "../cards/Cards";
import { firstFive } from "../../lib/utilitis";

const CommingProducts = ({ data: products }) => {
  const firstFiveProducts = firstFive(
    products?.data.filter((el: any) => el.attributes.isNew)
  );

  return (
    <div className="feature">
      <div className="top">
        <h3>Comming soon ...</h3>
        <p className="describe">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          debitis quidem. Quibusdam laudantium, corrupti voluptatum autem fugit
          aut, aspernatur veritatis sequi ipsa optio repudiandae, repellendus
          sed? Quos numquam praesentium laudantium nihil impedit harum sint
          labore molestiae ratione accusantium totam doloremque, quod non
          veritatis alias sunt expedita nostrum. Fuga, exercitationem qui!
        </p>
      </div>
      <div className="bottom">
        {firstFiveProducts?.map((el: any) => (
          <Cards el={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default CommingProducts;
