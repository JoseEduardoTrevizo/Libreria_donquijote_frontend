import Rutas from "../routes/Rutas";
import { use, useEffect, useState } from "react";

import CurrentContext from "../Context/CurrentContext";

function App() {
  const [isPopupOpenRecommendation, setIsPopupOpenRecommendation] =
    useState(false);

  const [recomendaciones, setRecomendaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getRecomendaciones();
    getBooks();
  }, []);
  // Función para obtener recomendaciones
  const getRecomendaciones = async () => {
    try {
      setLoading(true);
      // IMPORTANTE: Cambia esto a tu URL de backend real
      const [response] = await Promise.all([
        fetch("http://localhost:5173/blog/recomendaciones", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }),
        await new Promise((resolve) => setTimeout(resolve, 750)), // Simula retardo
      ]);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      setRecomendaciones(data.entradas || []);
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getBooks = async () => {
    try {
      setLoading(true);
      // IMPORTANTE: Cambia esto a tu URL de backend real
      const [response] = await Promise.all([
        fetch("http://localhost:5173/books/libros", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }),
        await new Promise((resolve) => setTimeout(resolve, 750)), // Simula retardo
      ]);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const dataBooks = await response.json();
      setBooks(dataBooks.libros || []);
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRecomendation = () => {
    setIsPopupOpenRecommendation(true);
  };
  const handleCloseRecomendation = () => {
    setIsPopupOpenRecommendation(false);
  };

  const contextValue = {
    recomendaciones,
    loading,
    error,
    getRecomendaciones,
    books,
    getBooks,
  };
  return (
    <>
      <CurrentContext.Provider value={contextValue}>
        <div className="layout">
          <Rutas
            isOpen={isPopupOpenRecommendation}
            onAddRecomendation={handleAddRecomendation}
            onCloseRecomendation={handleCloseRecomendation}
          />
        </div>
      </CurrentContext.Provider>
    </>
  );
}

export default App;
