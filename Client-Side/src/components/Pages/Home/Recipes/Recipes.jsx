import useFetch from "../../../../hooks/useFetch";
import Card from "../../../UI/Card/Card";
import { IoTrashBin } from "react-icons/io5";
import styles from "./Recipes.module.css";
import Swal from "sweetalert2";

function Recipes() {
  const { data, isLoading, setId, setType } = useFetch();

  const { recipes } = data;

  async function handleDeleteRecipe(e, id) {
    e.preventDefault();

    const confirm = await Swal.fire({
      title: "Do you want to DELETE this Recipe?",
      showDenyButton: true,
      confirmButtonText: "YES",
    });

    if (confirm.isConfirmed) {
      setId(id);
      setType("DELETE");
    }
  }

  if (isLoading)
    return <div className={styles["loading"]}>Loading Recipes...</div>;

  return (
    <section className={styles["section__wrap"]}>
      <h1 className={styles["section__title"]}>Our Recipes</h1>
      <div className={styles["recipes__wrap"]}>
        {recipes?.map((recipe) => (
          <Card
            key={recipe._id}
            className={{ className: styles["recipe__wrap"] }}
          >
            <span
              title="Click to the icon to delete this recipe!"
              className={styles["recipe_dlt"]}
              onClick={(e) => handleDeleteRecipe(e, recipe._id)}
            >
              <IoTrashBin />
            </span>
            <img src={recipe.recipePhoto} alt={recipe.title} />
            <p className={styles["recipe__title"]}> {recipe.title}</p>

            <div className={styles["recipe__info"]}>
              <div> Cooking Times: {recipe.cookingTimes}</div>
              <div> Servings: {recipe.servings}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Recipes;
