import SelectButtonViews from "../../Components/selectButtonFolder/selectButton";
import Search from "../../Components/searchFolder/search";
import AllContent from "../../Components/allContentFolder/allContent";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <SelectButtonViews />
      <Search />
      <AllContent />
    </div>
  )
};

export default HomePage;
