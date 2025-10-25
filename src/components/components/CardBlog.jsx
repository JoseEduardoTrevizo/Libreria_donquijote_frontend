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
    <div className="blog-card">
      <div className="blog-card-header">
        <div className="blog-info">
          <h3 className="blog-title">{titulo}</h3>
          <p className="blog-author">por {autor}</p>
          <span className="blog-category">{categoria}</span>
        </div>

        <div className="blog-image">
          <img src={donquijote} alt={titulo} />
        </div>
      </div>

      <div className="blog-rating">{renderStars()}</div>

      <p className="blog-description">{descripcion}</p>

      <div className="blog-card-footer">
        <div className="blog-user-info">
          <div className="user-data">
            <span className="user-icon">👤</span>
            <span className="user-name">{nombre}</span>
          </div>
          <span className="blog-date">{fecha}</span>
        </div>
      </div>
    </div>
  );
}
