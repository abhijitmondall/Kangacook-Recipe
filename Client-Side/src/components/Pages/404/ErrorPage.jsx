import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <section className={styles["error"]}>
        <div className={styles["error__wrap"]}>
          <h3 className={styles["error__title"]}>Not Found!</h3>
          <img src="/error.svg" alt="" className={styles["error__img"]} />

          <Link to="/">
            <button className={styles["error__btn"]}>Go To Home</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
