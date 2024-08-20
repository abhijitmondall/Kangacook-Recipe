import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={`${styles["footer"]} container`}>
        <section className={`${styles["footer__container"]}`}>
          <div className={`${styles["footer__wrap"]}`}>
            <div className={styles["footer__info"]}>
              <h3>Kangacook-Recipe</h3>
              <p>
                Discover a world of delicious recipes at Kangacook-Recipe. From
                appetizers to desserts, our platform offers something for every
                taste and dietary requirement.
              </p>
            </div>
            <div className={styles["footer__info"]}>
              <h5>Useful Links</h5>

              <span>
                <Link to="/">Home</Link>
              </span>
              <span>
                <Link to="/blog">Blog</Link>
              </span>
              <span>
                <Link to="/register">Register</Link>
              </span>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>

            <div className={styles["footer__info"]}>
              <h5>Support</h5>
              <span>Help Desk</span>
              <span>Communities</span>
              <span>Become a Partner</span>
              <span>Developers</span>
            </div>
            <div className={styles["footer__info"]}>
              <h5>Contact</h5>
              <span>524 Broadway , NYC</span>
              <span>+1 777 - 978 - 5570</span>
            </div>
          </div>
          <div className={styles["footer__text"]}>
            <p>@2023 RecipeRealm. All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
