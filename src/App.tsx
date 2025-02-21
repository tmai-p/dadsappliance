import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <TopNavbar />
      <Routes>
        <Route path="/dadsappliance" element={<Homepage />} />
        <Route path="/dadsappliance/about" element={<About />} />
        <Route path="/dadsappliance/service" element={<Service />} />
        <Route path="/dadsappliance/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
