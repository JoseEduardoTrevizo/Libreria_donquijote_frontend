import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h2 className="title_page">Libreria Don Quijote</h2>
      <nav className="navbar">
        <ul className="nav">
          <li>
            <NavLink to="/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/libros">Libros</NavLink>
          </li>
          <li>
            <NavLink to="/eventos">Eventos</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
