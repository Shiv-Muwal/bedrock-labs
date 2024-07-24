import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Future from "./components/Future"
import SocialTensor from './components/SocialTensor';

function App() {
  return (
    <div className="App">
      <Future/>
      <SocialTensor />
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
