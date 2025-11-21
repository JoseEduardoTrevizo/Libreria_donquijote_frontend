import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Inicio from "../components/pages/Inicio";
import Libros from "../components/pages/Libros";
import Eventos from "../components/pages/Eventos";
import Blog from "../components/pages/Blog";
import Contacto from "../components/pages/Contacto";
import AdminLogin from "../components/pages/AdminLogin";
import Footer from "../components/layout/Footer";
import ScrolltoTop from "../ScrolltoTop";
// Layout público
function PublicLayout() {
  return (
    <>
      <Header />
      <section id="content" className="content">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

// Layout admin
function AdminLayout() {
  return (
    <section id="admin-content" className="admin-content">
      <Outlet />
    </section>
  );
}

export default function Rutas({
  isOpen,
  onAddRecomendation,
  onCloseRecomendation,
}) {
  return (
    <BrowserRouter>
      <ScrolltoTop />

      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicLayout />}>
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
        </Route>

        {/* Rutas de admin */}
        <Route element={<AdminLayout />}>
          <Route path="/Admin-login" element={<AdminLogin />} />
          {/* Subrutas de admin */}
          {/* 
          <Route path="/Admin/usuarios" element={<AdminUsuarios />} />
          <Route path="/Admin/configuracion" element={<AdminConfiguracion />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
