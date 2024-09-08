import { Helmet } from "react-helmet-async";
import Cover from "../../shared/cover/Cover";
import coverBgImg from "../../../assets/menu/banner3.jpg";
import dessersBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={coverBgImg} title={"Our Menu"}></Cover>
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title={"dessert"}
        img={dessersBg}
      ></MenuCategory>
      <MenuCategory items={pizza} title={"pizza"} img={pizzaBg}></MenuCategory>
      <MenuCategory items={salad} title={"salad"} img={saladBg}></MenuCategory>
      <MenuCategory items={soup} title={"soup"} img={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
