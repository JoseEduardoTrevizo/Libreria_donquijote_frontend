import React from "react";

const CurrentContext = React.createContext({
  recomendaciones: [],
  loading: false,
  error: null,
  getRecomendaciones: () => {},
});
export default CurrentContext;
