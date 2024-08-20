import Styles from "./HeroBanner.module.css";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero__wrap">
        <figure className={Styles["hero__fig"]}>
          <img
            src="./img/Hero-BG.jpeg"
            alt=""
            className={Styles["hero__img"]}
          />
        </figure>

        <div className={Styles["hero__content"]}>
          <h1 className={Styles["hero__title"]}>
            <span> Kangacook-Recipe: Where Cooking Dreams Come True! </span>
          </h1>
          <p className={Styles["hero__subtitle"]}>
            Explore Our World of Delicious Recipes and Unleash <br /> Your Inner
            Chef Today!
          </p>

          <div className={Styles["hero__register"]}>
            <Link to="/addRecipe">
              <span>
                Add Recipe <BsArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
