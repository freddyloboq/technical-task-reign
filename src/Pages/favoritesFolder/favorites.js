import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import "./favorites.css";
import SelectButtonViews from "../../Components/selectButtonFolder/selectButton";
import Card from "../../Components/cardFolder/card";

const Favorites = () => {
  const { store, actions } = useContext(Context);
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
    const findId = faves.some((itemA) => itemA === item);
    if (!findId) {
      setFaves([...faves, item]);
      localStorage.setItem("faves", JSON.stringify([...faves, item]));
    } else {
      const filter = faves.filter((itemA) => itemA.objectID !== item.objectID);
      setFaves(filter);
      localStorage.setItem("faves", JSON.stringify(filter));
    }
  };

  return (
    <div className="favorites-container">
      <SelectButtonViews />
      <header className="favorites-grid">
        {faves.map((item) => {
          const findIndex = faves.some(
            (item1) => item1.objectID === item.objectID
          );
          return (
            <Card
              key={item.objectID}
              item={item}
              addFaves={addFaves}
              objId={item.objectID}
              findIndex={findIndex}
            />
          );
        })}
      </header>
    </div>
  );
};

export default Favorites;
