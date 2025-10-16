import Rutas from "../routes/Rutas";
import { useState } from "react";

function App() {
  const [isPopupOpenRecommendation, setIsPopupOpenRecommendation] =
    useState(false);

  const handleAddRecomendation = () => {
    setIsPopupOpenRecommendation(true);
  };
  const handleCloseRecomendation = () => {
    setIsPopupOpenRecommendation(false);
  };
  return (
    <>
      <div className="layout">
        <Rutas
          isOpen={isPopupOpenRecommendation}
          onAddRecomendation={handleAddRecomendation}
          onCloseRecomendation={handleCloseRecomendation}
        />
      </div>
    </>
  );
}

export default App;
