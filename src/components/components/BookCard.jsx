import React from "react";
export default function BookCard({ books }) {
  const book = {
    title: books.titulo || "Título Desconocido",
    author: books.autor || "Autor Desconocido",
    price: books.precio || "Precio no disponible",
    image: books.imagen,
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="book-card">
        <div className="book-image-container">
          <img
            src={`http://localhost:5173/books/imagen/${book.image}`}
            alt={book.title}
            className="book-image"
          />
        </div>

        <div className="book-content">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>

          <p className="price-button">{"$" + " " + book.price}</p>
        </div>
      </div>
    </div>
  );
}
