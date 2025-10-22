import React from "react";
import heroBlog from "../../../image/blog_hero.png";
import Popup from "./popup";
import CardBlog from "../components/CardBlog";
import { useEffect, useState } from "react";

export default function Blog({
  onAddRecomendation,
  isOpen,
  onCloseRecomendation,
}) {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener recomendaciones
  const getRecomendaciones = async () => {
    try {
      setLoading(true);
      // IMPORTANTE: Cambia esto a tu URL de backend real
      const [response] = await Promise.all([
        fetch("http://localhost:5173/blog/recomendaciones", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }),
        await new Promise((resolve) => setTimeout(resolve, 1000)), // Simula retardo
      ]);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Datos obtenidos:", data);

      setRecomendaciones(data.entradas || []);
      setError(null);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    getRecomendaciones();
  }, []);

  return (
    <div className="blog">
      <Popup isOpen={isOpen} onClose={onCloseRecomendation} />
      <img className="heroBlog" src={heroBlog} />
      <button className="btn_blog" onClick={onAddRecomendation}>
        + Compartir Recomendacion
      </button>
      <h2 className="title_blog">Comunidad Lectora</h2>
      <h3 className="subtitle_blog">
        Descubre nuevos libros a través de las recomendaciones de nuestra
        comunidad.
        <br />
        Comparte tus lecturas favoritas y conecta con otros amantes de los
        libros.
      </h3>

      <div className="cardContainer">
        {/* Estado de carga */}
        {loading && (
          <div className="loading-container">
            <p>Cargando recomendaciones...</p>
          </div>
        )}

        {/* Mostrar error */}
        {error && (
          <div className="error-container">
            <p>⚠️ Error: {error}</p>
            <button onClick={getRecomendaciones}>Reintentar</button>
          </div>
        )}

        {/* Mostrar las cards */}
        {!loading && !error && (
          <div className="cards-container">
            {recomendaciones.length > 0 ? (
              recomendaciones.map((rec) => (
                <CardBlog
                  key={rec._id}
                  titulo={rec.titulo}
                  autor={rec.autor}
                  categoria={rec.categoria}
                  calificacion={rec.calificacion}
                  descripcion={rec.descripcion}
                  nombre={rec.nombre}
                  fecha={new Date().toLocaleDateString("es-MX")}
                />
              ))
            ) : (
              <div className="no-data">
                <p>
                  📚 No hay recomendaciones aún. ¡Sé el primero en compartir!
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
