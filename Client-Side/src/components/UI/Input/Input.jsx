import Styles from "./Input.module.css";

const Input = ({ inputObj }) => {
  return (
    <>
      <input {...(inputObj || "")} className={Styles["input"]} />
    </>
  );
};

export default Input;
