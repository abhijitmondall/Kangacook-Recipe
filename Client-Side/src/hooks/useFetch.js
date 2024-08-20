import { useEffect, useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [id, setId] = useState("");
  const [type, setType] = useState("GET");

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://kangacook-recipe.vercel.app/api/v1/recipes/${id}`,
          {
            method: type,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (res.status === 204) {
          setRefetch((rf) => !rf);
          setIsLoading(false);
          setId("");
          setType("GET");
          return;
        }

        if (!res.ok) throw new Error("Something went wrong. Please try again!");
        const data = await res.json();
        setData(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [refetch, id, type]);

  return {
    isLoading,
    setIsLoading,
    data,
    setRefetch,
    setId,
    setType,
  };
};

export default useFetch;
