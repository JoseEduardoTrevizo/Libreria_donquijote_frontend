// AdminPanel.jsx
import React, { useState } from "react";
import BooksTable from "./BooksTable";

export default function AdminConfig() {
  const [activeTab, setActiveTab] = useState("libros");

  const handleLogout = () => {
    alert("Cerrando sesión...");
  };

  return (
    <div className="admin-panel">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <svg
              className="header-icon"
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
            <h1 className="header-title">Panel de Administración</h1>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <svg
              className="logout-icon"
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
      <main className="main-content">
        <h2 className="welcome-title">Bienvenido</h2>

        {/* Tabs */}
        <div className="tabs-container">
          <button
            className={`tab-button ${
              activeTab === "libros" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("libros")}
          >
            Libros
          </button>
          <button
            className={`tab-button ${
              activeTab === "eventos" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("eventos")}
          >
            Eventos
          </button>
          <button
            className={`tab-button ${
              activeTab === "blog" ? "active" : "inactive"
            }`}
            onClick={() => setActiveTab("blog")}
          >
            Blog
          </button>
        </div>
      </main>
      <BooksTable />
    </div>
  );
}
