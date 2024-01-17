
import React, { useState } from "react";
import "./Design.css";


export default function Navbar() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const textStyle = {
      fontWeight: isHovered ? "bold" : "normal",
    };
  return (
    <div className="fixed-top">
      <div>
        <div className="onbar ">
          <p>WORLD'S NO.1 CYCLING BRAND </p>
          <p>FREE HOME DELIVERY </p>
          <p>ALL INDIA SERVICEABILITY</p>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body-tertiary rounded ">
        <div className="container-fluid">
          <img
            className="hero-tag"
            src="https://www.herocycles.com/on/demandware.static/Sites-HeroCycles-Site/-/default/dw96ae8487/assets/images/logo.svg"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  BICYCLES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ACCESSORIES
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      VIRTUAL ASSISTANCE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      WARRANTY REGISTRATION
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#"></a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  E-CYCLES
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
