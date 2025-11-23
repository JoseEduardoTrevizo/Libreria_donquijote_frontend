import React, { useState } from "react";

export default function BlogTable() {
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
    <div className="books-containerConfig">
      {/* Table */}
      <div className="table-wrapperConfig">
        <table className="books-tableConfig">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Descripcion</th>
              <th>Calificacion</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="book-titleConfig">{book.title}</td>
                <td className="book-titleConfig">{book.title}</td>
                <td className="book-authorConfig">{book.author}</td>
                <td>
                  <span className="category-badgeConfig">{book.category}</span>
                </td>
                <td className="book-priceConfig">${book.price}</td>
                <td>
                  <div className="actions-containerConfig">
                    <button
                      className="action-buttonConfig edit-buttonConfig"
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
                      className="action-buttonConfig delete-buttonConfig"
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
