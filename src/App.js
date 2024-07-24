import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Labs from "./components/Labs";
// import Future from "./components/Future";

function App() {
  return (
    <div className="App">
      {/* <Future /> */}
      <Labs/>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/about" element={<VideoBackground />} />
          <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
