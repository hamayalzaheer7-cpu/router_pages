import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServicesDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
