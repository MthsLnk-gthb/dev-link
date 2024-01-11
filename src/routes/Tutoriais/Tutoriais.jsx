/*import { Link } from "react-router-dom";
import { arrayTutoriais } from "./listaDeTutoriais";
import { useState } from "react";
import Voltar from "../../Components/Voltar";

const Tutoriais = () => {
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

  const [favoritos, setFavoritos] = useState([]);

  const favoritarTutorial = (tutorialId) => {
    const tutorialFavorito = arrayTutoriais.find(
      (tutorial) => tutorial.id === tutorialId
    );

    if (tutorialFavorito && !favoritos.includes(tutorialFavorito)) {
      setFavoritos([...favoritos, tutorialFavorito]);
    }

    console.log("Favoritos:", favoritos)
  };

  return (
    <>
      <Voltar rotaDestino="/" />
      <Link to={"/favoritos"} favoritos={favoritos} className="link-favoritos">
        Favoritos
      </Link>
      <h1 className="nome-pagina">Tutoriais DevLink</h1>
      <main className="tutoriais-page">
        <section className="filtros-tutoriais">
          <h2>Filtre as opções</h2>
          <select
            name="topico"
            onChange={handleFiltro}
            value={filtroTopico}
            className="select-filtros"
          >
            {topicos.map((topico) => (
              <option key={topico} value={topico}>
                {topico}
              </option>
            ))}
          </select>

          <select
            name="nivel"
            onChange={handleFiltro}
            value={filtroNivel}
            className="select-filtros"
          >
            {niveis.map((nivel) => (
              <option key={nivel} value={nivel}>
                {nivel}
              </option>
            ))}
          </select>
        </section>

        <article className="lista-de-tutoriais">
          {tutoriaisFiltrados.length > 0 ? (
            tutoriaisFiltrados.map((tutorial) => (
              <div className="caixa-tutorial" key={tutorial.id}>
                {tutorial.title}

                <Link to={`/tutoriais/${tutorial.id}`} key={tutorial.id}>
                  <span className="mais-informacoes">
                    Clique para mais informações
                  </span>
                </Link>
                <button
                  onClick={(e) =>{ e.preventDefault(), favoritarTutorial(tutorial.id)}}
                  className="botao-favoritar"
                >
                  Favoritar
                </button>
              </div>
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
*/

// Tutoriais.jsx
import { Link } from "react-router-dom";
import { arrayTutoriais } from "./listaDeTutoriais";
import { useState } from "react";
import Voltar from "../../Components/Voltar";
import { useFavoritos } from "../../Context/FavoritosContext";

const Tutoriais = () => {
  const { adicionarFavorito, favoritos } = useFavoritos(); // Use o contexto de favoritos

  // Estado local para filtragem
  const [filtroTopico, setFiltroTopico] = useState("Todos");
  const [filtroNivel, setFiltroNivel] = useState("Todos");

  // Manipuladores de eventos para filtros
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

  // Filtrar tutoriais com base nos critérios
  const tutoriaisFiltrados = arrayTutoriais.filter(
    (tutorial) =>
      (filtroTopico === "Todos" || tutorial.topico === filtroTopico) &&
      (filtroNivel === "Todos" || tutorial.nivel === filtroNivel)
  );

  // Tópicos e níveis disponíveis
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
      <h1 className="nome-pagina">Tutoriais DevLink</h1>
      <main className="tutoriais-page">
        <section className="filtros-tutoriais">
          <h2>Filtre as opções</h2>
          <select
            name="topico"
            onChange={handleFiltro}
            value={filtroTopico}
            className="select-filtros"
          >
            {topicos.map((topico) => (
              <option key={topico} value={topico}>
                {topico}
              </option>
            ))}
          </select>

          <select
            name="nivel"
            onChange={handleFiltro}
            value={filtroNivel}
            className="select-filtros"
          >
            {niveis.map((nivel) => (
              <option key={nivel} value={nivel}>
                {nivel}
              </option>
            ))}
          </select>
        </section>

        <article className="lista-de-tutoriais">
          {tutoriaisFiltrados.length > 0 ? (
            tutoriaisFiltrados.map((tutorial) => (
              <div className="caixa-tutorial" key={tutorial.id}>
                {tutorial.title}
                <Link to={`/tutoriais/${tutorial.id}`} key={tutorial.id}>
                  <span className="mais-informacoes">
                    Clique para mais informações
                  </span>
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    adicionarFavorito(tutorial);
                    salvarFavoritosNoLocalStorage()
                  }}
                  className="botao-favoritar"
                >
                  Favoritar
                </button>
              </div>
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

