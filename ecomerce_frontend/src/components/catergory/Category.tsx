import { Link } from "react-router-dom";
import "./category.scss";

const Category = ({ categoriesData }) => {
  return (
    <div className="categories">
      {categoriesData.data.map((el: any, index: number) => (
        <Link
          to={`/category/${el.id}`}
          key={el.id}
          className={index % 3 === 0 ? "span" : "avatar"}
        >
          <div className="category">
            <img
              className="category_img"
              src={`http://localhost:1337${el.attributes.avatar.data.attributes.formats.large.url}`}
              alt=""
            />
            <p className="category_name">{el.attributes.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
