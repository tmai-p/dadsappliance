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
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
