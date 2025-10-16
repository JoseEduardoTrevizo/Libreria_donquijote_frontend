import React from "react";
import { useState } from "react";

export default function Popup({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get("nombre") || "Anonimo",
      titulo: formData.get("titulo"),
      autor: formData.get("autor"),
      categoria: formData.get("categoria"),
      calificacion: parseInt(formData.get("calificacion")),
      descripcion: formData.get("descripcion"),
    };
    try {
      const response = await fetch(
        "http://localhost:5173/blog/nueva_recomendacion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // Obtener el mensaje de error del backend
      const responseData = await response.json();
      console.log("Respuesta del servidor:", responseData);

      if (response.ok) {
        console.log("Recomendación enviada con éxito");
        e.target.reset();
        window.location.reload();
        onClose();
      } else {
        console.error("Error al enviar la recomendación", responseData.message);
        e.target.reset();
        window.location.reload();
        onClose();
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitted(false);
    }
  };
  return (
    <section
      className={`popup ${isOpen ? `popup_open` : ``}`}
      onClick={onClose}
    >
      <div className="popup_content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="form_recomendation">
          <div className="container_inputs_name">
            <label className="Name" htmlFor="Name">
              Tu Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="input_name"
              placeholder="Escribe tu nombre o se anonimo"
            />
          </div>

          <div className="container_two_inputs">
            <div className="container_inputs">
              <label className="Name" htmlFor="Libro">
                Titulo del Libro
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                required
                className="input_title"
                placeholder="Ej: Cien años de soledad"
              />
            </div>

            <div className="container_inputs">
              <label className="Name" htmlFor="autor">
                Autor
              </label>
              <input
                type="text"
                id="autor"
                name="autor"
                required
                className="input_autor"
                placeholder="Ej: Gabriel Garcia Marquez"
              />
            </div>
          </div>

          <div className="container_two_inputs">
            <div className="container_inputs">
              <label className="Name" htmlFor="categorias">
                Categoría
              </label>
              <select
                name="categoria"
                id="categoria"
                className="input_categoria"
                required
              >
                <option className="option_section" value="ficcion">
                  Ficción
                </option>
                <option className="option_section" value="no_ficcion">
                  Novela
                </option>
                <option className="option_section" value="fantasia">
                  Fantasía
                </option>
                <option className="option_section" value="ciencia_ficcion">
                  Historia
                </option>
              </select>
            </div>

            <div className="container_inputs">
              <label className="Name" htmlFor="calificacion">
                Calificación
              </label>

              <select
                name="calificacion"
                id="calificacion"
                className="input_calificacion"
                required
              >
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </select>
            </div>
          </div>

          <div className="container_textarea">
            <label className="Name" htmlFor="descripcion">
              Descripcion
            </label>

            <textarea
              className="textarea_descripcion"
              name="descripcion"
              placeholder="Deja tu recomendacion aqui..."
              id="descripcion"
              required
            ></textarea>
          </div>
          <button type="submit" className="send_button" disabled={isSubmitted}>
            {isSubmitted ? "Enviando..." : "Publicar Recomendación"}
          </button>
        </form>
      </div>
    </section>
  );
}
