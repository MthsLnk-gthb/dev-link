import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (tutorial) => {
    setFavoritos((prevFavoritos) => {
      const novosFavoritos = [...prevFavoritos, tutorial];
      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
      return novosFavoritos;
    });
  };

  const removerFavorito = (tutorialId) => {
    setFavoritos((prevFavoritos) => {
      const novosFavoritos = prevFavoritos.filter(
        (tutorial) => tutorial.id !== tutorialId
      );
      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));
      return novosFavoritos;
    });
  };

  useEffect(() => {
    const favoritosSalvos = localStorage.getItem("favoritos");
    if (favoritosSalvos) {
      setFavoritos(JSON.parse(favoritosSalvos));
    }
  }, []);

  return (
    <FavoritosContext.Provider
      value={{ favoritos, adicionarFavorito, removerFavorito }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

FavoritosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};