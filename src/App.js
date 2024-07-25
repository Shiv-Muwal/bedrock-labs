import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BedRockIcons from "./components/BedRockIcons";
import Future from "./components/Future";
// import Branding from "./components/Branding";
import BedRocks from "./components/BedRocks";
import SocialTensor from "./components/SocialTensor"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<BedRocks />} />
          <Route exact path="/future" element={<Future />} />
          {/* <Route exact path="/branding" element={<Branding />} /> */}
          <Route exact path="/bedrock_icon" element={<BedRockIcons />} />
          <Route exact path="/social_tensor" element={<SocialTensor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
