import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import "./search.css";

const Search = () => {
  const { store, actions } = useContext(Context);
  const [optionSelected, setOptionSelected] = useState(null);
  const [localSelect, setLocalSelect] = useState();

  useEffect(() => {
    localStorage.setItem("filterSelected", optionSelected);
  }, [optionSelected]);

  useEffect(() => {
    if (localStorage.getItem("filterSelected")) {
      setLocalSelect(localStorage.getItem("filterSelected"));
    }
  }, [optionSelected]);

  const handleChange = (e) => {
    setOptionSelected(e.target.value);
    actions.getAllContent(
      `https://hn.algolia.com/api/v1/search_by_date?query=${localSelect}&page=0`
    );
  };

  return (
    <header className="search-container">
      <select
        className="search-input"
        id="cars"
        name="carlist"
        form="carform"
        onChange={(e) => handleChange(e)}
      >
        <option value="">Select your news</option>
        <option value="angular">Angular</option>
        <option value="reactjs">React</option>
        <option value="vuejs">Vuejs</option>
      </select>
      {/* <input type="select"placeholder="Search..." /> */}
    </header>
  );
};

export default Search;
