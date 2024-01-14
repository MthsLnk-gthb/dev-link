import { Link } from "react-router-dom";
import Voltar from "../../Components/Voltar";
import { useFavoritos } from "../../Context/FavoritosContext";
import "./style.scss";

const Favoritos = () => {
  const { favoritos, removerFavorito } = useFavoritos();

  const handleRemoverFavorito = (tutorialId) => {
    removerFavorito(tutorialId);
  };

  return (
    <>
      <Voltar rotaDestino="/tutoriais" />
      <h1 className="nome-pagina">Favoritos</h1>
      <article className="lista-de-tutoriais">
        {favoritos.map((favorito) => (
          <section className="caixa-tutorial" key={favorito.id}>
            <h3>{favorito.title}</h3>
            <Link to={`/tutoriais/${favorito.id}`}>
              <span>Mais informações</span>
            </Link>
            <button
              onClick={() => handleRemoverFavorito(favorito.id)}
              className="botao-favoritar"
            >
              Remover dos Favoritos
            </button>
          </section>
        ))}
      </article>
    </>
  );
};

export default Favoritos;
