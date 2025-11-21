// BooksTable.jsx
import React, { useState } from "react";

export default function BooksTable() {
  const [books, setBooks] = useState([
    {
      id: 1,
      image: null,
      title: "Don Quijote de La Mancha",
      author: "Miguel de Cervantes",
      category: "Clásicos",
      price: 25.99,
    },
    {
      id: 2,
      image: null,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      category: "Literatura Latinoamericana",
      price: 22.5,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (id) => {
    console.log("Editar libro:", id);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este libro?")) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  const handleAddBook = () => {
    console.log("Agregar nuevo libro");
  };

  return (
    <div className="books-container">
      {/* Search Bar and Add Button */}
      <div className="top-bar">
        <div className="search-container">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar libros por título, autor o categoría..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div>
          <p className="existencia"> Existencia {books.length}</p>
        </div>
        <button className="add-button" onClick={handleAddBook}>
          <svg
            className="plus-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Agregar Libro
        </button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="books-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Autor</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>
                  <div className="book-image"></div>
                </td>
                <td className="book-title">{book.title}</td>
                <td className="book-author">{book.author}</td>
                <td>
                  <span className="category-badge">{book.category}</span>
                </td>
                <td className="book-price">${book.price}</td>
                <td>
                  <div className="actions-container">
                    <button
                      className="action-button edit-button"
                      onClick={() => handleEdit(book.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button
                      className="action-button delete-button"
                      onClick={() => handleDelete(book.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
