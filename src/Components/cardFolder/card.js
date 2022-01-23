// imports
import { useContext, useState, useEffect } from "react";
import "./card.css";
import { Context } from "../../store/appContext";
import { IconHeart, IconHeartLine, IconClock } from "../../Assets/icons";

const Card = (props) => {
  const { item, heart } = props;
  const { store, actions } = useContext(Context);
  const [selectFavorite, setSelectFavorite] = useState(false);
  console.log(props);

  const onClick = (item) => {
    setSelectFavorite(!selectFavorite);
  };

  useEffect(() => {
    if (selectFavorite === true) {
      actions.addFavorites(selectFavorite, item);
    }
  }, [selectFavorite]);

  console.log(store.favorites);

  return (
    <>
      {heart ? (
        <div className="card-container">
          <header className="card-header">
            <p className="card-text-time">
              <IconClock size={"16"} color={"#606060"} /> 3 horas ago by{" "}
              {item.author}
            </p>
            <p className="card-text-content">{item.story_title}</p>
          </header>
          <div className="heart-icon">
            <span
              onClick={() => {
                onClick(item);
              }}
            >
              {heart ? <IconHeart /> : <IconHeartLine />}
            </span>
          </div>
        </div>
      ) : (
        <div className="card-container">
          <header className="card-header">
            <p className="card-text-time">
              <IconClock size={"16"} color={"#606060"} /> 3 horas ago by{" "}
              {item.author}
            </p>
            <p className="card-text-content">{item.story_title}</p>
          </header>
          <div className="heart-icon">
            <span
              onClick={() => {
                onClick(item);
              }}
            >
              {selectFavorite ? <IconHeart /> : <IconHeartLine />}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
