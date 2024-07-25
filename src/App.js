import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Future from "./components/Future";
import Branding from "./components/Branding"
import BedRockIcons from "./components/BedRockIcons"
import BedRocks from "./components/BedRocks"
import SocialTensor from "./components/SocialTensor"

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BedRocks />} />
          <Route exact path="/Future" element={<Future />} />
          <Route exact path="/Branding" element={<Branding />} />
          <Route exact path="/BedRockIcons" element={<BedRockIcons />} /> 
          <Route exact path="/SocialTensor" element={<SocialTensor />} /> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
