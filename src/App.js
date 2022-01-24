// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext";
import './App.css';
// imports components
import Navbar from './Components/navbarFolder/navbar';
// imports pages
import HomePage from "./Pages/homeFolder/homePage";
import Favorites from "./Pages/favoritesFolder/favorites";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
