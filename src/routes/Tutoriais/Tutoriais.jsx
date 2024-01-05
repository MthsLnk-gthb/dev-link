import { Link } from "react-router-dom";
import { arrayTutoriais } from "./listaDeTutoriais";
import { useState } from "react";

const Cursos = () => {
  const [filtroTopico, setFiltroTopico] = useState("JavaScript");
  const [filtroNivel, setFiltroNivel] = useState("Basico");

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

  const topicos = ["Todos", "JavaScript", "HTML", "CSS", "Outros da Web", "Git e GitHub"];
  const niveis = ["Todos", "Basico", "Intermediario", "Avançado"];

  return (
    <article className="tutoriais-page">
      <h1 className="nome-pagina">Tutoriais LinkDev</h1>

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

      <section className="lista-de-tutoriais">
        {tutoriaisFiltrados.length > 0 ? (
          tutoriaisFiltrados.map((tutorial) => (
            <Link
              to={`/tutoriais/${tutorial.id}`}
              key={tutorial.id}
              className="caixa-tutorial"
            >
              {tutorial.title}
              <span className="mais-informacoes">
                Clique para mais informações
              </span>
            </Link>
          ))
        ) : (
          <span className="nenhum-tutorial-encontrado">
            <p>Nenhum tutorial encontrado com os filtros selecionados.</p>
          </span>
        )}
      </section>
    </article>
  );
};

export default Cursos;
