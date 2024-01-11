/*import Voltar from "../../Components/Voltar";

const Favoritos = () => {
  return (
    <main>
      <Voltar rotaDestino="/tutoriais" />
      <h1>Favoritos</h1>
    </main>
  );
};

export default Favoritos;
*/

// Favoritos.jsx
// Favoritos.jsx

import { Link } from "react-router-dom";
import Voltar from "../../Components/Voltar";
import { useFavoritos } from "../../Context/FavoritosContext";

const Favoritos = () => {
  const { favoritos, removerFavorito } = useFavoritos();

  const handleRemoverFavorito = (tutorialId) => {
    removerFavorito(tutorialId);
  };

  return (
    <main>
      <Voltar rotaDestino="/tutoriais" />
      <h1>Favoritos</h1>
      {favoritos.map((favorito) => (
        <div key={favorito.id}>
          <Link to={`/tutoriais/${favorito.id}`}>
            {favorito.title}
          </Link>
          <button onClick={() => handleRemoverFavorito(favorito.id)}>
            Remover dos Favoritos
          </button>
        </div>
      ))}
    </main>
  );
};

export default Favoritos;

