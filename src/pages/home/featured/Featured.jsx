import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section>
      <div className="featured_item bg-fixed text-white pt-8 mt-20">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              molestiae voluptate nihil aspernatur veniam consectetur labore!
              Ratione, iusto? Ad mollitia tempora consectetur dolor corporis id.
              Accusantium quae incidunt, animi porro reiciendis necessitatibus
              optio dignissimos asperiores distinctio nemo laudantium minima
              dolore hic, amet dolorem! Eaque sit maiores quos asperiores hic
              corporis.
            </p>
            <button className="btn btn-outline mt-4 border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
