import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FoodPage from "./pages/FoodPage";
import HotelsPage from "./pages/HotelsPage";
import EntertainmentPage from "./pages/EntertainmentPage";
import TransportationPage from "./pages/TransportationPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/entertainment" element={<EntertainmentPage />}></Route>
          <Route
            path="/transportation"
            element={<TransportationPage />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
