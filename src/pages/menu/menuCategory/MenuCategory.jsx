import { Link } from "react-router-dom";
import Cover from "../../shared/cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      <div className="my-8">
        {title && <Cover img={img} title={title}></Cover>}
      </div>
      <div className="grid md:grid-cols-2 gap-10 my-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mb-8">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline mt-4 border-0 border-b-4">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
