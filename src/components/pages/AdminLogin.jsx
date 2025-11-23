import React, { useState } from "react";
import Book from "../../../image/bookstack.svg";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="admin-login-containerConfig">
      <div className="admin-login-cardConfig">
        <div className="admin-login-headerConfig">
          <img
            src={Book}
            alt="Admin Login"
            className="admin-login-iconConfig"
          />
          <h1>Panel de Administración</h1>
        </div>

        <div className="form-groupConfig">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@bookstore.com"
          />
        </div>

        <div className="form-groupConfig">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="admin123"
          />
        </div>

        <button onClick={handleSubmit} className="login-buttonConfig">
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
}
