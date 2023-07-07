import "./slider.scss";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Slider({ data }: { data: any }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const leftHandle = () => {
    if (currentSlide === 0) {
      setCurrentSlide(data.data?.attributes.items.data.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const rightHandle = () => {
    if (currentSlide === data.data?.attributes.items.data.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="slider">
      <div className="imgs__slider">
        {data.data?.attributes.items.data?.map((el: any, index: number) => {
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
        <button>
          <Link to="/store">Shop now</Link>
        </button>
      </div>
    </div>
  );
}

export default Slider;
