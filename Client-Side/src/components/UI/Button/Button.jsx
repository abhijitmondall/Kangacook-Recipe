import Styles from "./Button.module.css";

const Button = ({ btnObj, className, children }) => {
  return (
    <>
      <button
        {...(btnObj || "")}
        className={`${Styles["btn"]} ${className?.className || ""}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
