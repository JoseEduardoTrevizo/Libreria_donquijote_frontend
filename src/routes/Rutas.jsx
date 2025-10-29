import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header";
import Inicio from "../components/pages/Inicio";
import Libros from "../components/pages/Libros";
import Eventos from "../components/pages/Eventos";
import Blog from "../components/pages/Blog";
import Contacto from "../components/pages/Contacto";
import Admin from "../components/pages/Admin";
import Footer from "../components/layout/Footer";

export default function Rutas({
  isOpen,
  onAddRecomendation,
  onCloseRecomendation,
}) {
  return (
    <BrowserRouter>
      <Header />

      <section id="content" className="content">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Libros" element={<Libros />} />
          <Route path="/Eventos" element={<Eventos />} />
          <Route
            path="/Blog"
            element={
              <Blog
                isOpen={isOpen}
                onAddRecomendation={onAddRecomendation}
                onCloseRecomendation={onCloseRecomendation}
              />
            }
          />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </section>

      <Footer />
    </BrowserRouter>
  );
}
