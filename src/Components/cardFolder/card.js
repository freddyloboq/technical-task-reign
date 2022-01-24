// imports
import { useState, useEffect } from "react";
import "./card.css";
import { IconHeart, IconHeartLine, IconClock } from "../../Assets/icons";

const Card = (props) => {
  const { objId, item, addFaves, findIndex } = props;
  const [selectFavorite, setSelectFavorite] = useState(false);
  const [faves, setFaves] = useState([]);

  useEffect(() => {
    const getFaves = localStorage.getItem("faves");
    if (getFaves === null) {
      localStorage.setItem("faves", JSON.stringify(faves));
    } else {
      setFaves(JSON.parse(getFaves));
    }
  }, []);

  return (
    <>
      <div className="card-container">
        <header className="card-header">
          <p className="card-text-time">
            <IconClock size={"16"} color={"#606060"} /> 3 horas ago by{" "}
            {item?.author}
          </p>
          <p className="card-text-content">{item?.story_title}</p>
        </header>
        <div className="heart-icon">
          <span
            onClick={() => {
              addFaves(item);
              setSelectFavorite(!selectFavorite);
              // actions.addFavorites(selectFavorite, item);
            }}
          >
            {findIndex ? <IconHeart /> : <IconHeartLine />}
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
