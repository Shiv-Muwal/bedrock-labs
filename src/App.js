import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Future from "./components/Future"
import SocialTensor from './components/SocialTensor';
import BedRockIcons from './components/BedRockIcons';




function App() {
  return (
    <div className="App">
      <Future />


      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
