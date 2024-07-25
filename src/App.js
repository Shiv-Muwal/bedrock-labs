import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Future from "./components/Future";
import BedRockIcons from "./components/BedRockIcons";
import Branding from "./components/Branding"

function App() {
  return (
    <div className="App">
      {/* <Future /> */}
      {/* <Branding/> */}
      <BedRockIcons/>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
