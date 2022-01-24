// imports
import "./selectButton.css";
import { NavLink } from "react-router-dom";

const SelectButtonViews = () => {
  return (
    <header className="select-buttons-containers">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "button-all-active" : "button-all"
        }
      >
        All
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          isActive ? "button-faves-active" : "button-faves"
        }
      >
        My faves
      </NavLink>
    </header>
  );
}

export default SelectButtonViews;