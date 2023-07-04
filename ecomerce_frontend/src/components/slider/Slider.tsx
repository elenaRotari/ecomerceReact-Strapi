import "./slider.scss";
import { api } from "../../lib/api";
import { useEffect, useState } from "react";

function Slider() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const props = {
      url: "http://localhost:1337",
      path: "api/slider?populate=items",
    };
    api(props).then((res) => {
      setItems(res);
    });
  }, []);
  console.log(
    items.data.attributes.items?.data?.map((el: any) =>
      console.log(el.attributes.formats.large.url)
    )
  );

  return (
    <div>
      {items.data.attributes.items.data?.map((el: any) => {
        return (
          <img
            src={"http://localhost:1337" + el.attributes.formats.large.url}
            alt=""
          />
        );
      })}
    </div>
  );
}

export default Slider;
