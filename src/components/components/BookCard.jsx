import React from "react";
import assassinsCreedImage from "../../../image/secret-crusade.webp";

export default function BookCard() {
  const book = {
    image: assassinsCreedImage,
    title: "Assassin's Creed. Brotherhood",
    author: "Oliver Bowden",
    price: "$349.00",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="book-card">
        <div className="book-image-container">
          <img src={book.image} alt={book.title} className="book-image" />
        </div>

        <div className="book-content">
          <h2 className="book-title">{book.title}</h2>
          <p className="book-author">{book.author}</p>

          <p className="price-button">{book.price}</p>
        </div>
      </div>
    </div>
  );
}
