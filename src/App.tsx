import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/ContactForm";
import Confirm from "./Confirm";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";
import Cooktops from "./pages/Cooktops";
import Fridges from "./pages/Fridges";
import Hood from "./pages/Hood";
import Laundry from "./pages/Laundry";
import Accessories from "./pages/Accessories";
import Cooktop_details from "./pages/Cooktop_details";
import Fridge_details from "./pages/Fridge_details";

function App() {
  return (
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/cooktops" element={<Cooktops />} />
        <Route path="/fridges" element={<Fridges />} />
        <Route path="/hood" element={<Hood />} />
        <Route path="/laundry" element={<Laundry />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/cooktop_details/:model" element={<Cooktop_details />} />
        <Route path="/fridge_details/:model" element={<Fridge_details />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
