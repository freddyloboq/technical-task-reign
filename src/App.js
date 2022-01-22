// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext";
import './App.css';
// imports components
import Navbar from './Components/navbarFolder/navbar';
// imports pages
import HomePage from "./Pages/homeFolder/homePage";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
