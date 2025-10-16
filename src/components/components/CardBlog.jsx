import React from "react";
import donquijote from "../../../image/default_donquijote.png";

export default function CardBlog({
  titulo = "Cien años de soledad",
  autor = "Gabriel García Márquez",
  categoria = "Realismo Mágico",
  calificacion = 5,
  descripcion = "Una obra maestra que te transporta a Macondo. La narrativa de García Márquez es simplemente fascinante.",
  nombreUsuario = "María González",
  fecha = "14/1/2024",
  imagenUrl = null,
}) {
  const renderStars = () => {
    return (
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= calificacion ? "star-filled" : "star-empty"}
          >
            ★
          </span>
        ))}
        <span className="rating-text">({calificacion}/5)</span>
      </div>
    );
  };

  return (
    <div className="book-card">
      <div className="book-card-content">
        <div className="book-card-left">
          <h3 className="book-title">{titulo}</h3>
          <p className="book-author">por {autor}</p>

          <span className="book-category">{categoria}</span>

          {renderStars()}

          <p className="book-description">{descripcion}</p>

          <div className="book-user-info">
            <span className="user-icon">👤</span>
            <span className="user-name">{nombreUsuario}</span>
            <span className="book-date">{fecha}</span>
          </div>
        </div>

        <div className="book-card-right">
          <div className="book-image">
            <img src={donquijote} alt="Usuario" />
          </div>
        </div>
      </div>
    </div>
  );
}
