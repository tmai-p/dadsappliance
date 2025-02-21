import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import TopNavbar from "./components/TopNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
