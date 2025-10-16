import React from "react";
import heroBlog from "../../../image/blog_hero.png";
import Popup from "./popup";
import CardBlog from "../components/CardBlog";

export default function Blog({
  onAddRecomendation,
  isOpen,
  onCloseRecomendation,
}) {
  return (
    <div className="blog">
      <Popup isOpen={isOpen} onClose={onCloseRecomendation} />
      <img className="heroBlog" src={heroBlog} />
      <h2 className="title_blog">Comunidad Lectora</h2>
      <h3 className="subtitle_blog">
        Descubre nuevos libros a través de las recomendaciones de nuestra
        comunidad.
        <br />
        Comparte tus lecturas favoritas y conecta con otros amantes de los
        libros.
      </h3>
      <button className="btn_blog" onClick={onAddRecomendation}>
        + Compartir Recomendacion
      </button>

      <div>
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </div>
    </div>
  );
}
