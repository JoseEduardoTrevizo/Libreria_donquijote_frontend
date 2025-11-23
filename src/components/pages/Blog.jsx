import React from "react";
import heroBlog from "../../../image/blog_hero.png";
import Popup from "./popup";
import CardBlog from "../components/CardBlog";
import CurrentContext from "../../Context/CurrentContext";

export default function Blog({
  onAddRecomendation,
  isOpen,
  onCloseRecomendation,
}) {
  const { recomendaciones, loading, error, getRecomendaciones } =
    React.useContext(CurrentContext);

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

      <div className="cardContainerBlog">
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
