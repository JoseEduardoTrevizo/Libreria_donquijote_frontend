import React from "react";
import donquijote from "../../../image/default_donquijote.png";

export default function CardBlog({
  nombre,
  titulo,
  autor,
  categoria,
  calificacion,
  descripcion,
  fecha,
}) {
  console.log("Calificación recibida en CardBlog:", nombre, calificacion);
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
      <div className="book-card-header">
        <div className="book-info">
          <h3 className="book-title">{titulo}</h3>
          <p className="book-author">por {autor}</p>
          <span className="book-category">{categoria}</span>
        </div>

        <div className="book-image">
          <img src={donquijote} alt={titulo} />
        </div>
      </div>

      <div className="book-rating">{renderStars()}</div>

      <p className="book-description">{descripcion}</p>

      <div className="book-card-footer">
        <div className="book-user-info">
          <div className="user-data">
            <span className="user-icon">👤</span>
            <span className="user-name">{nombre}</span>
          </div>
          <span className="book-date">{fecha}</span>
        </div>
      </div>
    </div>
  );
}
