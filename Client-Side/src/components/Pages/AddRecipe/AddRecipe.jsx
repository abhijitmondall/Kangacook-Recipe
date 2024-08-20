import { useReducer, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import styles from "./AddRecipe.module.css";

const initialState = {
  title: "",
  recipePhoto: "",
  cookingTimes: "",
  servings: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "photo":
      return { ...state, recipePhoto: action.payload };
    case "cookingTime":
      return { ...state, cookingTimes: action.payload };
    case "servings":
      return { ...state, servings: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function AddRecipe() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await fetch(
        `https://kangacook-recipe.vercel.app/api/v1/recipes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        }
      );

      if (!res.ok) throw new Error("Something went wrong! Please try again");

      toast("Recipe successfully Created!");
      dispatch({ type: "reset" });
    } catch (err) {
      toast(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles["section__wrap"]}>
      <h1 className={styles["section__title"]}>Add Recipe</h1>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <div className={styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Recipe Title",
              name: "recipeTitle",
              required: true,
              onChange: (e) =>
                dispatch({ type: "title", payload: e.target.value }),
              value: state.title,
            }}
          />
        </div>
        <div className={styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Recipe Photo URL",
              name: "photo",
              onChange: (e) =>
                dispatch({ type: "photo", payload: e.target.value }),
              value: state.recipePhoto,
            }}
          />
        </div>
        <div className={styles["form__input"]}>
          <Input
            inputObj={{
              type: "Number",
              placeholder: "Cooking Time",
              name: "cookingTime",
              onChange: (e) =>
                dispatch({ type: "cookingTime", payload: e.target.value }),
              value: state.cookingTimes,
            }}
          />
        </div>
        <div className={styles["form__input"]}>
          <Input
            inputObj={{
              type: "Number",
              placeholder: "Servings",
              name: "servings",
              onChange: (e) =>
                dispatch({ type: "servings", payload: e.target.value }),
              value: state.servings,
            }}
          />
        </div>

        <Button
          btnObj={{
            disabled: isLoading,
          }}
        >
          Add Recipe
        </Button>
      </form>

      <ToastContainer />
    </section>
  );
}

export default AddRecipe;
