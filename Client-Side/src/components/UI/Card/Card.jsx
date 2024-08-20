import Styles from "./Card.module.css";

const Card = ({ className, children }) => {
  return (
    <div className={`${Styles["card"]} ${className?.className || ""}`}>
      {children}
    </div>
  );
};

export default Card;
