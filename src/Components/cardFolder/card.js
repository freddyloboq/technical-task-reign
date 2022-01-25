// imports
import { useState, useEffect } from "react";
import "./card.css";
import { IconHeart, IconHeartLine, IconClock } from "../../Assets/icons";

const Card = (props) => {
  const { objId, item, addFaves, findIndex, lastItemRef } = props;
  const [selectFavorite, setSelectFavorite] = useState(false);
  const [faves, setFaves] = useState([]);

  //this useEffect save the favorites in localStorage
  useEffect(() => {
    const getFaves = localStorage.getItem("faves");
    if (getFaves === null) {
      localStorage.setItem("faves", JSON.stringify(faves));
    } else {
      setFaves(JSON.parse(getFaves));
    }
  }, []);

  //this function is to calculate the date
const calcuclateTime = (time) => {
  const date = new Date(time);
  const now = new Date(); // current date
  const diff = Math.abs(now - date);
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diffDays;
};

  return (
    <>
      <div className="card-container" ref={lastItemRef}>
        <header className="card-header">
          <p className="card-text-time">
            <IconClock size={"16"} color={"#606060"} />{" "}
            {calcuclateTime(item.created_at)} horas ago by {item?.author}
          </p>
          <a
            href={item.story_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-text-content"
          >
            {item?.story_title}
          </a>
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
