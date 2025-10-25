import React from "react";
import BookCard from "../components/BookCard";

export default function Libros() {
  return (
    <div className="catalogo">
      <h2 className="titel_books">Catálogo de Libros</h2>
      <p className="subtitle_books">Explora nuestra coleccion de libros.</p>

      <div className="container_search">
        <div className="container_avanzado">
          <h4 className="title_search">Busqueda Avanzada</h4>
          <input
            className="input_search"
            type="text"
            placeholder="Buscar por titulo o autor..."
          />
          <div className="container_title_filter">
            <div>
              <h4 className="title_filter">Categoría</h4>
              <select className="select_filter" name="categoria">
                <option value="">Todos</option>
                <option value="">Novela</option>
                <option value="">Historia</option>
                <option value="">Comics</option>
                <option value="">Finanzas</option>
                <option value="">Superacion personal</option>
              </select>
            </div>
            <div>
              <h4 className="title_filter">Editorial</h4>
              <select className="select_filter" name="editorial">
                <option value="">Todos</option>
                <option value="">Penguin</option>
                <option value="">Oceano</option>
                <option value="">Fractales</option>
                <option value="">Corda ediciones</option>
                <option value="">El ateneo</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container_books">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}
