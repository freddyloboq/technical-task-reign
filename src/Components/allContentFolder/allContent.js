// imports
import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { Context } from "../../store/appContext";
import Card from "../cardFolder/card";
import { UseInfinityScroll } from "../useInfinityScroll/useInfinityScroll";
import "./allContent.css";

const AllContent = () => {
  const { store, actions } = useContext(Context);
  const [faves, setFaves] = useState([]);
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setQuery(store.filterSelected);
    console.log("store.filterSelected :>> ", store.filterSelected);
    console.log("query :>> ", query);
  }, [store.filterSelected, query]);

  const { favesInfinity, hasMore, loading } = UseInfinityScroll(
    query,
    pageNumber
  );

  useEffect(() => {
    const getFaves = localStorage.getItem("faves");
    if (getFaves === null) {
      localStorage.setItem("faves", JSON.stringify(faves));
    } else {
      setFaves(JSON.parse(getFaves));
    }
  }, []);

  const addFaves = (item) => {
    const findId = faves.some((itemA) => itemA.objectID === item.objectID);
    if (!findId) {
      setFaves([...faves, item]);
      localStorage.setItem("faves", JSON.stringify([...faves, item]));
    }
    if (findId) {
      const filter = faves.filter((itemA) => itemA.objectID !== item.objectID);
      setFaves(filter);
      localStorage.setItem("faves", JSON.stringify(filter));
    }
  };

  useEffect(() => {
    setPageNumber(0);
  }, []);

  const observer = useRef();
  const lastItemRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <header className="content-container">
      {favesInfinity?.map((item, index) => {
        const findIndex = faves.some(
          (item1) => item1.objectID === item.objectID
        );
        return (
          item.story_title &&
          item.author &&
          item.story_url &&
          item.created_at && (
            <Card
              key={index}
              item={item}
              addFaves={addFaves}
              objId={item.objectID}
              findIndex={findIndex}
              lastItemRef={lastItemRef}
            />
          )
        );
      })}
    </header>
  );
};

export default AllContent;
