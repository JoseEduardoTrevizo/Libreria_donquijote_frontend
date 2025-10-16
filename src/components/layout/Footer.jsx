import React from "react";
import facebok from "../../../image/facebook.svg";
import instagram from "../../../image/instagram.svg";
import pin from "../../../image/pin.svg";
import phone from "../../../image/phone.svg";
import email from "../../../image/mail.svg";
import horario from "../../../image/clock.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="container_quotes">
            <h2>Libreria Don Quijote</h2>
            <p className="quote">
              "El que lee mucho y anda mucho, ve mucho y sabe mucho" -Don
              Quijote
            </p>
            <div className="container_socialmedia">
              <img className="socialmedia_img" src={facebok} />
              <img className="socialmedia_img" src={instagram} />
            </div>
          </div>

          <div className="container_contact">
            <h2>Contacto</h2>
            <div className="contact_footer">
              <img className="contact_img" src={pin} />
              <p className="contact_text">Calle 5 de Mayo #1460</p>
            </div>
            <div className="contact_footer">
              <img className="contact_img" src={phone} />
              <p className="contact_text">(625) 583-0359</p>
            </div>
            <div className="contact_footer">
              <img className="contact_img" src={email} />
              <p className="contact_text">librosdonquijote2@gmail.com</p>
            </div>
          </div>

          <div className="container_time">
            <h2>Horarios</h2>
            <div className="time">
              <img className="time_img" src={horario} />
              <div className="container_text_time">
                <p className="time_text">Lunes a Sabado: 10:00 am - 7:00 pm </p>
                <p className="time_text">Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
        <p className="desarrollo">&copy; Jose Eduardo Trevizo Pizano</p>
      </footer>
    </>
  );
}
