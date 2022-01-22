// imports
import "./card.css";
import {IconHeart, IconClock} from "../../Assets/icons";

const Card = () => {
  return (
    <div className="card-container">
      <header className="card-header">
        <p className="card-text-time">
          <IconClock size={"16"} color={"#606060"} /> 3 horas ago by author
        </p>
        <p className="card-text-content">
          Yes, React is taking over front-end development. The question is why.
        </p>
      </header>
      <div className="heart-icon">
        <IconHeart />
      </div>
    </div>
  );
}

export default Card;