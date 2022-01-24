// imports
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import Card from "../cardFolder/card";
import "./allContent.css";

const AllContent = () => {
  const { store,actions } = useContext(Context);
  const [faves, setFaves] = useState([]);

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
    actions.getAllContent(
      `https://hn.algolia.com/api/v1/search_by_date?query=&page=0`
    );
  }, []);

  return (
    <header className="content-container">
      {store.allContent.hits?.map((item, index) => {
        const findIndex = faves.some(
          (item1) => item1.objectID === item.objectID
        );
        console.log(item)
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
            />
          )
        );
      })}
    </header>
  );
};

export default AllContent;
