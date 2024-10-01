import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BedRockIcons from "./components/BedRockIcons";
import Future from "./components/Future";
import BedRocks from "./components/BedRocks";
import SocialTensor from "./components/SocialTensor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BedRocks />} />
          <Route exact path="/about" element={<Future />} />
          <Route exact path="/cases" element={<SocialTensor />} />
          <Route exact path="/media" element={<BedRockIcons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
