import React from "react";
import pin from "../../../image/pin.svg";
import phone from "../../../image/phone.svg";
import email from "../../../image/mail.svg";
import horario from "../../../image/clock.svg";
import map from "../../../image/map.png";

export default function Contacto() {
  return (
    <div className="contacto_container">
      <h1 className="title_contact">Contacto</h1>
      <p className="contact_text_subtitle">
        Estamos aquí para ayudarte. Visítanos, llámanos o escríbenos para
        cualquier consulta sobre nuestros libros y servicios.
      </p>

      <div className="container_section_data">
        <div className="container_data">
          <div className="contact_data">
            <img className="data_img" src={pin} />
            <p className="data_text">Calle 5 de Mayo #1460</p>
          </div>
          <div className="contact_data">
            <img className="data_img" src={phone} />
            <p className="data_text">(625) 583-0359</p>
          </div>
          <div className="contact_data">
            <img className="data_img" src={email} />
            <p className="data_text">librosdonquijote2@gmail.com</p>
          </div>
          <div className="contact_data">
            <img className="data_img" src={horario} />
            <div className="container_text_time">
              <p className="data_text">Lunes a Sabado: 10:00 am - 7:00 pm </p>
              <p className="data_text">Domingos: Cerrado</p>
            </div>
          </div>
        </div>

        <div className="container_map">
          <img className="map" src={map} />
        </div>
      </div>
    </div>
  );
}
