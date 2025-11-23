import React from "react";
import BookCard from "../components/BookCard";
import CurrentContext from "../../Context/CurrentContext";
import { useState, useMemo } from "react";

export default function Libros() {
  const { books } = React.useContext(CurrentContext);
  const [visibleCount, setVisibleCount] = useState(16);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [editorialFilter, setEditorialFilter] = useState("");

  // Filtrar libros basándose en todos los filtros
  const filteredBooks = useMemo(() => {
    let result = books;

    // Filtro por búsqueda (título o autor)
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter((book) => {
        const title = book.titulo?.toLowerCase() || "";
        const author = book.autor?.toLowerCase() || "";
        return title.includes(searchLower) || author.includes(searchLower);
      });
    }

    // Filtro por categoría
    if (categoryFilter) {
      result = result.filter((book) => {
        const category = book.genero?.toLowerCase() || "";
        return category === categoryFilter.toLowerCase();
      });
    }

    // Filtro por editorial
    if (editorialFilter) {
      result = result.filter((book) => {
        const editorial = book.editorial?.toLowerCase() || "";
        return editorial === editorialFilter.toLowerCase();
      });
    }

    return result;
  }, [books, searchTerm, categoryFilter, editorialFilter]);

  const loadMoreBooks = () => {
    setVisibleCount((prevCount) => prevCount + 16);
  };

  // Manejar el cambio en el input de búsqueda
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCount(16);
  };

  // Manejar el cambio en el select de categoría
  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setVisibleCount(16);
  };

  // Manejar el cambio en el select de editorial
  const handleEditorialChange = (e) => {
    setEditorialFilter(e.target.value);
    setVisibleCount(16);
  };

  return (
    <div className="catalogo">
      <h2 className="titel_books">Catálogo de Libros</h2>

      <div className="container_search">
        <div className="container_avanzado">
          <h4 className="title_search">Busqueda Avanzada</h4>
          <input
            className="input_search"
            type="text"
            placeholder="Buscar por titulo o autor..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="container_title_filter">
            <div>
              <h4 className="title_filter">Categoría</h4>
              <select
                className="select_filter"
                name="categoria"
                value={categoryFilter}
                onChange={handleCategoryChange}
              >
                <option value="">Todos</option>
                <option value="Novela">Novela</option>
                <option value="Historia">Historia</option>
                <option value="Comics">Comics</option>
                <option value="Finanzas">Finanzas</option>
                <option value="Superacion personal">Superacion personal</option>
              </select>
            </div>
            <div>
              <h4 className="title_filter">Editorial</h4>
              <select
                className="select_filter"
                name="editorial"
                value={editorialFilter}
                onChange={handleEditorialChange}
              >
                <option value="">Todos</option>
                <option value="Penguin">Penguin</option>
                <option value="Oceano">Oceano</option>
                <option value="Fractales">Fractales</option>
                <option value="Corda ediciones">Corda ediciones</option>
                <option value="El ateneo">El ateneo</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="container_books">
        {filteredBooks.slice(0, visibleCount).map((book) => (
          <BookCard key={book._id} books={book} />
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {filteredBooks.length === 0 && (
        <div style={{ textAlign: "center", padding: "40px", color: "#666" }}>
          <p>No se encontraron libros que coincidan con tu búsqueda.</p>
        </div>
      )}

      {visibleCount < filteredBooks.length && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <button onClick={loadMoreBooks} className="btn-load-more">
            Ver más
          </button>
        </div>
      )}
    </div>
  );
}
