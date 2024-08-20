import { useEffect, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://kangacook-recipe.vercel.app/api/v1/recipes`
        );

        if (!res.ok) throw new Error("Something went wrong. Please try again!");

        const data = await res.json();

        setData(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    data,
  };
};

export default useFetch;
