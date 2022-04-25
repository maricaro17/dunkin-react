import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <img
            className="bi me-2"
            width="150"
            height="70"
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1650859854/mc_donas/Logo-Dunkin-Donuts_ecnk3v.png"
            alt="logo"
          />
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Productos
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/registro" className="nav-link">
              Registrar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
