import { upperCaseFirstLetter } from "../../lib/utilitis";
import "./cards.scss";
import { Link } from "react-router-dom";

const Cards = ({ el }: any) => {
  return (
    <Link to={`/product/${el?.id}`}>
      <div className="cart_item">
        {el?.attributes.isNew && <p className="new">New Season</p>}

        <div className="imgs">
          <img
            className="first"
            src={
              "http://localhost:1337" + el.attributes.img.data[0].attributes.url
            }
            alt=""
          />
          <img
            className="second"
            src={
              "http://localhost:1337" + el.attributes.img.data[1].attributes.url
            }
            alt=""
          />
        </div>
        <div className="details">
          <h3 className="title">
            {upperCaseFirstLetter(el?.attributes?.title)}
          </h3>
          {el?.attributes.oldPrice && (
            <p className="old_price">
              old Price: {el?.attributes.oldPrice} <span>€</span>
            </p>
          )}
          <p className="price">
            Price: {el?.attributes.price} <span>€</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Cards;
