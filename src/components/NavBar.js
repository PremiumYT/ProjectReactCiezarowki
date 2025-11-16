import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">Firma</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Pracownicy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kierownictwo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kandydaci</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ciężarówki</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;