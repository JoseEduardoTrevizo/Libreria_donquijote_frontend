import React from "react";
import donquijote from "../../../image/Lucid.jpg";

export default function EventCard({
  imageUrl = donquijote,

  tipo = "Taller",
  titulo,
  descripcion,
  fecha,
  hora,
  lugar,
}) {
  return (
    <div className="event-card">
      <div className="event-card-image">
        <img src={imageUrl} alt={titulo} />
        <div className="event-card-badges">
          <span className="badge badge-secondary">{tipo}</span>
        </div>
      </div>

      <div className="event-card-content">
        <h3 className="event-card-title">{titulo}</h3>
        <p className="event-card-description">{descripcion}</p>

        <div className="event-card-details">
          <div className="event-detail">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{fecha}</span>
          </div>

          <div className="event-detail">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{hora}</span>
          </div>

          <div className="event-detail">
            <svg
              className="icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{lugar}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
