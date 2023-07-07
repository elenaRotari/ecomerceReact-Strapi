import "./comming.scss";
import Cards from "../cards/Cards";

const CommingProducts = ({ type, data: products }) => {
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
        {products?.data.map((el: any, index: number) => {
          return <Cards el={el} />;
        })}
      </div>
    </div>
  );
};

export default CommingProducts;
