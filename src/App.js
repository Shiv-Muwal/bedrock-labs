import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BedRockIcons from "./components/BedRockIcons";
import Future from "./components/Future";
import BedRocks from "./components/BedRocks";
import SocialTensor from "./components/SocialTensor";
import Swiper_js from "./components/S";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Swiper_js />} />
          <Route exact path="/future" element={<Future />} />
          <Route exact path="/social-tensor" element={<SocialTensor />} />
          <Route exact path="/bedrock-icon" element={<BedRockIcons />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
