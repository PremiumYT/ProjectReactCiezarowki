import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Firma</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Strona główna</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/formularz">Formularz zgłoszeniowy</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Osoby w firmie
                            </a>
                            <ul className="dropdown-menu bg-dark">
                                <li><Link className="dropdown-item text-light" to="/kierownictwo">Kierownictwo</Link></li>
                                <li><Link className="dropdown-item text-light" to="/kandydaci">Kandydaci</Link></li>
                                <li><Link className="dropdown-item text-light" to="/pracownicy">Pracownicy</Link></li>
                                <li><Link className="dropdown-item text-light" to="/ciezarowki">Ciężarówki</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Zaloguj się</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/rejestracja">Załóż konto</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default NavBar;
