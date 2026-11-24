import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Hamayal Services{" "}
        </NavLink>

        <button className="navbar-toggler" onClick={() => setMenu(!menu)}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menu ? "show" : ""}`}>
          <div className="navbar-nav ms-auto">
            <NavLink to="/" end className="nav-link">
              Home
            </NavLink>

            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>

            <NavLink to="/about" className="nav-link">
              About
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
