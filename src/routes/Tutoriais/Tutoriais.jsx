import { Link } from "react-router-dom";
import { arrayTutoriais } from "./listaDeTutoriais";
import { useState } from "react";
import Voltar from "../../Components/Voltar";
import { useFavoritos } from "../../Context/FavoritosContext";
import Filtros from "../../Components/Filtros/Filtros";

const Tutoriais = () => {
  const { adicionarFavorito, favoritos } = useFavoritos();

  const [filtroTopico, setFiltroTopico] = useState("Todos");
  const [filtroNivel, setFiltroNivel] = useState("Todos");

  const handleFiltro = (e) => {
    const { name, value } = e.target;

    if (name === "topico") {
      setFiltroTopico(value);
    } else if (name === "nivel") {
      setFiltroNivel(value);
    }
  };

  const salvarFavoritosNoLocalStorage = () => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  };

  const tutoriaisFiltrados = arrayTutoriais.filter(
    (tutorial) =>
      (filtroTopico === "Todos" || tutorial.topico === filtroTopico) &&
      (filtroNivel === "Todos" || tutorial.nivel === filtroNivel)
  );

  const topicos = [
    "Todos",
    "JavaScript",
    "HTML",
    "CSS",
    "Python",
    "Outros da Web",
    "Git e GitHub",
  ];
  const niveis = ["Todos", "Basico", "Intermediario", "Avançado"];

  return (
    <>
      <Voltar rotaDestino="/" />
      <Link to={"/favoritos"} favoritos={favoritos} className="link-favoritos">
        Favoritos
      </Link>

      <main className="tutoriais-page">
        <h1 className="nome-pagina">Tutoriais DevLink</h1>
        <Filtros
          handleFiltro={handleFiltro}
          filtroTopico={filtroTopico}
          filtroNivel={filtroNivel}
          topicos={topicos}
          niveis={niveis}
        />

        <article className="lista-de-tutoriais">
          {tutoriaisFiltrados.length > 0 ? (
            tutoriaisFiltrados.map((tutorial) => (
              <section className="caixa-tutorial" key={tutorial.id}>
                <h3>{tutorial.title}</h3>
                <Link to={`/tutoriais/${tutorial.id}`} key={tutorial.id}>
                  <span>
                    Clique para mais informações
                  </span>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    adicionarFavorito(tutorial);
                    salvarFavoritosNoLocalStorage();
                  }}
                  className="botao-favoritar"
                >
                  Favoritar
                </button>
              </section>
            ))
          ) : (
            <span className="nenhum-tutorial-encontrado">
              <p>Nenhum tutorial encontrado com os filtros selecionados.</p>
            </span>
          )}
        </article>
      </main>
    </>
  );
};

export default Tutoriais;
