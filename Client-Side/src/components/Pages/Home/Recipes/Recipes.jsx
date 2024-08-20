import useFetch from "../../../../hooks/useFetch";
import Card from "../../../UI/Card/Card";
import styles from "./Recipes.module.css";

function Recipes() {
  const { data, isLoading } = useFetch();

  const { recipes } = data;

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
