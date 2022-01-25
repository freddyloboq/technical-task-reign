//this Componente is a custom hook to used for a infinite scroll
import { useEffect, useState, useContext } from "react";
import { Context } from "../../store/appContext";

export const UseInfinityScroll = (query, pageNumber) => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [favesInfinity, setFavesInfinity] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setFavesInfinity([]);
  }, [query]);

  useEffect(() => {
    console.log("store.filterSelected :>> ", store.filterSelected);
    console.log("query :>> ", query);
    setLoading(true);
    setError(false);
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}=&page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFavesInfinity((prevVacants) => {
          return [...new Set([...prevVacants, ...data.hits.map((b) => b)])];
        });
        setHasMore(data.hits.length > 0);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
    setLoading(false);
  }, [query, pageNumber, store.filterSelected]);

  return { loading, error, favesInfinity, hasMore };
};