import HeroBanner from "./HeroBanner/HeroBanner";
import Recipes from "./Recipes/Recipes";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div className="container">
      <>
        <HeroBanner />
        <Recipes />
        <Subscribe />
      </>
    </div>
  );
};

export default Home;
