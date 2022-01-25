//imports
import { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import "./search.css";

const Search = () => {
  const { store, actions } = useContext(Context);
  const [optionSelected, setOptionSelected] = useState("");

  //this useEffect save the filter selected in localStorage
  useEffect(() => {
    if (localStorage.getItem("getSelectFilter") !== null) {
      setOptionSelected(localStorage.getItem("getSelectFilter"));
    } else {
      localStorage.setItem("getSelectFilter", optionSelected);
    }
    actions.setFilterSelected(optionSelected);
  }, [optionSelected]);

  useEffect(() => {
    actions.setFilterSelected(optionSelected);
  }, [optionSelected]);

//This function capture the value of the filter
  const handleChange = (e) => {
    e.preventDefault(optionSelected);
    actions.setFilterSelected(e.target.value);
    localStorage.setItem("getSelectFilter", e.target.value);
  };

  //this object is to save the filter data as the where dynamic in case more are added in the future
  const filterOptions = [
    {
      value: "",
      Name: "Select your news"},
    { value: "angular", Name: "Angular"},
    { value: "reactjs", Name: "React"},
    { value: "vuejs", Name: "Vuejs"}
  ];

  return (
    <header className="search-container">
      <select
        className="search-input"
        id="cars"
        name="carlist"
        onChange={(e) => handleChange(e)}
      >
        {
          filterOptions.map((item, index) => {
          return (
            <option key={index} value={item.value}>
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
