import React, { use } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import don_quijote from "../../../image/don_quijote.jpeg";
import clock from "../../../image/clock.svg";
import pin from "../../../image/pin.svg";
import quote from "../../../image/comma.svg";
import BookCard from "../components/BookCard";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CurrentContext from "../../Context/CurrentContext";
import CardBlog from "../components/CardBlog";

export default function Inicio() {
  const navigate = useNavigate();
  const { books, recomendaciones = [], loading } = useContext(CurrentContext);

  return (
    <div>
      <section className="hero">
        <div className="hero_content">
          <h1 className="eslogan">
            Descubre tu proxima <strong>gran historia</strong>
          </h1>

          <button
            className="btn_explorar_evento"
            onClick={() => {
              navigate("/Libros");
            }}
          >
            Explorar Catálogo
          </button>
          <div className="contact">
            <img className="hero_img" src={pin} />
            <p>Calle 5 de Mayo #1460</p>
          </div>
          <div className="time_hero">
            <img className="hero_img" src={clock} />
            <p>Lunes a Sabado: 10:00 am - 7:00 pm </p>
          </div>
          <img className="heroimg" src={don_quijote} alt="Don Quijote" />
        </div>
      </section>

      <section className="recien_llegados">
        <div className="container_titles">
          <h2 className="recien_llegados title">Libros recien llegados</h2>
          <p className="recien_llegados subtitle">
            Descubre las últimas novedades, bestsellers y recomendaciones
          </p>
        </div>

        <div className="container_card">
          <div className="cardContainer_books">
            {books.slice(0, 4).map((book) => (
              <BookCard key={book._id} books={book} />
            ))}
          </div>
          <button
            className="btn_recien_llegados"
            onClick={() => {
              navigate("/Libros");
            }}
          >
            Ver Todo el Catalogo
          </button>
        </div>
      </section>

      <section className="blog_inicio">
        <div className="container_titles">
          <h2 className="blog_inicio title">Nuestra Comunidad</h2>
          <p className="blog_inicio subtitle">
            Únete a nuestra comunidad lectora y dejanos tus recomendaciones
          </p>
        </div>

        <div className="container_card">
          <div className="cardContainer_events">
            {recomendaciones.slice(0, 4).map((rec) => (
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
            ))}
          </div>
          <button
            className="btn_blog_inicio"
            onClick={() => {
              navigate("/Blog");
            }}
          >
            Visita nuestra Comunidad
          </button>
        </div>
      </section>

      <section className="testimonios">
        <div className="container_titles">
          <h2 className="testimonios_inicio title">
            Lo que Dicen Nuestros Lectores
          </h2>
          <p className="testimonios_inicio subtitle">
            Testimonios reales de nuestra comunidad de amantes de los libros
          </p>
        </div>
        <div className="container_testimonios">
          <div className="testimonial-card">
            <div className="quote-icon">
              <img src={quote} alt="quote" />
              <img src={quote} alt="quote" />
            </div>
            <div className="stars_quote">
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
            </div>
            <p className="testimonial-text">
              "El equipo conoce cada libro de memoria. Su pasión por la
              literatura es contagiosa y siempre me ayudan a encontrar material
              perfecto para mis clases."
            </p>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">
              <img src={quote} alt="quote" />
              <img src={quote} alt="quote" />
            </div>
            <div className="stars_quote">
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
            </div>
            <p className="testimonial-text">
              "Esta librería es un tesoro escondido. Siempre encuentro
              recomendaciones perfectas y el ambiente es increíblemente
              acogedor. Los eventos literarios son excepcionales."
            </p>
          </div>

          <div className="testimonial-card">
            <div className="quote-icon">
              <img src={quote} alt="quote" />
              <img src={quote} alt="quote" />
            </div>
            <div className="stars_quote">
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
              <span className="star_quote">★</span>
            </div>
            <p className="testimonial-text">
              "Un lugar mágico donde los libros cobran vida. Los talleres de
              escritura me han ayudado enormemente en mi carrera. Recomiendo
              totalmente sus actividades."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
