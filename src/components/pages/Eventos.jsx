import React from "react";
import EventCard from "../components/EventCard";
import { useEffect, useState } from "react";
import Quijote_sin_eventos from "../../../image/quijote_eventos.png";
import CurrentContext from "../../Context/CurrentContext";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getEventos = async () => {
    try {
      setLoading(true);
      const [response] = await Promise.all([
        fetch("http://localhost:5173/events/obtener_eventos", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }),
        await new Promise((resolve) => setTimeout(resolve, 750)), // Simula retardo
      ]);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Datos obtenidos:", data.Eventos);
      setError(null);
      setEventos(data.Eventos || []);
    } catch (error) {
      console.error("Error fetching eventos:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventos();
  }, []);

  return (
    <CurrentContext.Provider value={{ eventos, loading, error, getEventos }}>
      <div className="eventos">
        <h2 className="title_evento">Todos nuestros eventos</h2>
        <p className="subtitle_evento">
          Descubre todas nuestras actividades literarias, talleres.
        </p>

        {/* Estado de carga */}
        {loading && (
          <div className="loading-container">
            <p>Cargando eventos...</p>
          </div>
        )}

        {loading ? (
          <p>Cargando eventos...</p>
        ) : (
          <div className="eventos_container">
            {eventos.length > 0 ? (
              eventos.map((evento) => (
                <EventCard
                  key={evento._id}
                  titulo={evento.titulo}
                  fecha={evento.fecha}
                  descripcion={evento.descripcion}
                  hora={evento.hora}
                  lugar={evento.lugar}
                />
              ))
            ) : (
              <div className="no-events">
                <img src={Quijote_sin_eventos} alt="No hay eventos" />
              </div>
            )}
          </div>
        )}
      </div>
    </CurrentContext.Provider>
  );
}
