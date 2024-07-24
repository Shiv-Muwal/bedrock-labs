import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BedRock from './components/BedRock';

function App() {
  return (
    <div className="App">
      <BedRock/>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
