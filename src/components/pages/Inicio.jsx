import React from "react";
import don_quijote from "../../../image/don_quijote.jpeg";
import clock from "../../../image/clock.svg";
import pin from "../../../image/pin.svg";
import Card from "../layout/Card";
export default function Inicio() {
  return (
    <div>
      <section className="hero">
        <div className="hero_content">
          <h1 className="eslogan">
            Descubre tu proxima <strong>gran historia</strong>
          </h1>

          <button className="btn_explorar_evento"> Explorar Catalogo</button>
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
          <Card />
          <button className="btn_recien_llegados">Ver Todo el Catalogo</button>
        </div>
      </section>
    </div>
  );
}
