import React from "react";
import "./cards.scss";

const Cards = ({ el }: any) => {
  console.log(el?.attributes?.title);

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const clickHandle = () => {
    if (currentSlide === 0) {
      setCurrentSlide(1);
    }
    if (currentSlide === 1) {
      setCurrentSlide(0);
    }
  };
  return (
    <div className="cart_item">
      {el?.attributes.isNew && <p className="new">New Season</p>}

      <div className="imgs">
        {el?.attributes?.img.data?.map((el: any, id: number) => (
          <img
            className={id === currentSlide ? "active" : "second"}
            key={id}
            src={"http://localhost:1337" + el.attributes.url}
            alt=""
            onClick={clickHandle}
          />
        ))}
      </div>
      <div className="details">
        <h3 className="title">{el?.attributes?.title}</h3>
        <p className="price">
          Price: {el?.attributes.price} <span>€</span>
        </p>
      </div>
    </div>
  );
};
export default Cards;
