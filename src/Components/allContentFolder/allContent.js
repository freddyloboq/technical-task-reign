// imports
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import Card from "../cardFolder/card";
import "./allContent.css";

const AllContent = () => {
  const { store,actions } = useContext(Context);

  useEffect(() => {
    actions.getAllContent(
      `https://hn.algolia.com/api/v1/search_by_date?query=&page=49`
    );

  }, []);

  return (
    <header className="content-container">
      {store.allContent.hits?.map((item, index) => {
        return (
          item.story_title &&
          item.story_title &&
          item.story_title &&
          item.story_title && (
            <Card
              key={index}
              item={item}
            />
          )
        );
      })}
    </header>
  );
};

export default AllContent;
