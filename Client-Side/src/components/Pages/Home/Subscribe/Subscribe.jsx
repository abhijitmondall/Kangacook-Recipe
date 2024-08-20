import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={styles["subscribe"]}>
      <div className={styles["subscribe__wrap"]}>
        <h2 className={styles["subscribe__title"]}>
          Be the first to know about the latest deals, receive new trending
          recipes & more!
        </h2>

        <form className={styles["subscribe__form"]}>
          <Input
            inputObj={{ type: "email", placeholder: "Enter Your Email" }}
            className={{ className: `${styles["subscribe__email"]}` }}
          />

          <Button
            btnObj={{ type: "submit" }}
            className={{ className: `${styles["subscribe__btn"]}` }}
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
