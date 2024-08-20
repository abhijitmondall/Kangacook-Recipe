import Styles from "./Header.module.css";

import Icons from "./../../assets/icons.svg";
import { Link, NavLink } from "react-router-dom";
import Button from "../UI/Button/Button";

const Header = () => {
  return (
    <header className={Styles["header"]}>
      <div className={Styles["logo-wrap"]}>
        <Link to="/">
          <h3 className={Styles["recipe-logo"]}>Kangacook-Recipe</h3>
        </Link>
      </div>

      <form action="#" className={Styles["search"]}>
        <input
          type="text"
          className={Styles["search__input"]}
          placeholder="Search Recipe"
        />
        <button className={Styles["search__btn"]}>
          <svg className={Styles["search__icon"]}>
            <use xlinkHref={`${Icons}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className={`${Styles["recipe-nav"]} `}>
        <ul className={Styles["recipe-nav__items"]}>
          <li>
            <NavLink to="/" className={`${Styles["recipe-nav__link"]}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addRecipe"
              className={`${Styles["recipe-nav__link"]}`}
            >
              <Button> Add Recipe</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
