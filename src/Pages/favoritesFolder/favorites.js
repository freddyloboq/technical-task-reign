import React, { useContext } from "react";
import { Context } from "../../store/appContext";
import "./favorites.css";
import SelectButtonViews from "../../Components/selectButtonFolder/selectButton";
import Card from "../../Components/cardFolder/card";

const Favorites = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="favorites-container">
      <SelectButtonViews />
      <header className="favorites-grid">
        {store.favorites.map((item, index) => {
          return <Card key={index} item={item.item} heart={item.heart} />;
        })}
      </header>
    </div>
  );
};

export default Favorites;
