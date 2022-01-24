import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import "./search.css";

const Search = () => {
  const { store, actions } = useContext(Context);
  const [changeFilter, setChangeFilter] = useState("");
  const [optionSelected, setOptionSelected] = useState("");

  useEffect(() => {
    const getSelectFilter = localStorage.getItem("getSelectFilter");
    if (getSelectFilter === null) {
      localStorage.setItem("getSelectFilter", optionSelected);
    } else {
      setOptionSelected(getSelectFilter);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setChangeFilter(e.target.value);
    localStorage.setItem("getSelectFilter", e.target.value);

    actions.getAllContent(
      `https://hn.algolia.com/api/v1/search_by_date?query=${optionSelected}&page=0`
    );
  };

  const filterOptions = [
    { value: "", Name: "Select your news" },
    { value: "angular", Name: "Angular" },
    { value: "reactjs", Name: "React" },
    { value: "vuejs", Name: "Vuejs" },
  ];

  return (
    <header className="search-container">
      <select
        className="search-input"
        id="cars"
        name="carlist"
        form="carform"
        onChange={(e) => handleChange(e)}
      >
        {
          filterOptions.map((item, index) => {
          return (
            <option key={index} value={item.value} selected="selected">
              {item.Name}
            </option>
          );
        })
        }
      </select>
    </header>
  );
};

export default Search;
