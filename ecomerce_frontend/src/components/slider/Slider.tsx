import "./slider.scss";
import { api } from "../../lib/api";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slider() {
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  // console.log(items.data?.attributes.items.data.length - 1);

  // console.log(currentSlide);

  useEffect(() => {
    const props = {
      url: "http://localhost:1337",
      path: "api/slider?populate=items",
    };
    api(props).then((res) => {
      setItems(res);
    });
  }, []);

  const leftHandle = () => {
    if (currentSlide === 0) {
      setCurrentSlide(items.data?.attributes.items.data.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const rightHandle = () => {
    if (currentSlide === items.data?.attributes.items.data.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="slider">
      <div className="imgs__slider">
        {items.data?.attributes.items.data?.map((el: any, index: number) => {
          return (
            <img
              key={index}
              className={index === currentSlide ? "active" : ""}
              src={"http://localhost:1337" + el.attributes.url}
              alt=""
            />
          );
        })}
      </div>
      <div className="icons">
        <div className="icon" onClick={leftHandle}>
          <IoIosArrowBack />
        </div>
        <div className="icon" onClick={rightHandle}>
          <IoIosArrowForward />
        </div>
      </div>
      <div className="text">
        <h1>Sale</h1>
        <h2>Up to 50% off</h2>
        <button>Shop Now </button>
      </div>
    </div>
  );
}

export default Slider;
