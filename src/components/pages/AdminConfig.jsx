// AdminPanel.jsx
import React, { useState } from "react";
import BooksTable from "./BooksTable";
import EventsTable from "./EventsTable";
import BlogTable from "./BlogTable";

export default function AdminConfig() {
  const [activeTab, setActiveTab] = useState("libros");

  const handleLogout = () => {
    alert("Cerrando sesión...");
  };

  return (
    <div className="admin-panel">
      {/* Header */}
      <header className="headerConfig">
        <div className="header-contentConfig">
          <div className="header-leftConfig">
            <svg
              className="header-iconConfig"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <h1 className="header-titleConfig">Panel de Administración</h1>
          </div>
          <button className="logout-buttonConfig" onClick={handleLogout}>
            <svg
              className="logout-iconConfig"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-contentConfig">
        <h2 className="welcome-titleConfig">Bienvenido</h2>

        {/* Tabs */}
        <div className="tabs-containerConfig">
          <button
            className={`tab-buttonConfig ${
              activeTab === "libros" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("libros")}
          >
            Libros
          </button>
          <button
            className={`tab-buttonConfig ${
              activeTab === "eventos" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("eventos")}
          >
            Eventos
          </button>
          <button
            className={`tab-buttonConfig ${
              activeTab === "blog" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("blog")}
          >
            Blog
          </button>
        </div>
      </main>
      {/* Renderizado condicional de tablas */}
      {activeTab === "libros" && <BooksTable />}
      {activeTab === "eventos" && <EventsTable />}
      {activeTab === "blog" && <BlogTable />}
    </div>
  );
}
