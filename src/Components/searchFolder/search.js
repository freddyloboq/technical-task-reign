import "./search.css";

const Search = () => {
  return (
    <header className="search-container">
      <select className="search-input" id="cars" name="carlist" form="carform">
        <option value="volvo">Select your news</option>
        <option value="saab">Angular</option>
        <option value="opel">React</option>
        <option value="audi">Vuejs</option>
      </select>
      {/* <input type="select"placeholder="Search..." /> */}
    </header>
  );
};

export default Search;
