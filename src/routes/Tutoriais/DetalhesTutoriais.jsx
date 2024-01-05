import { useParams } from "react-router-dom";
import { arrayTutoriais } from "./listaDeTutoriais.js";
import Voltar from "../../Components/Voltar.jsx";

const DetalhesCursos = () => {
  const { id } = useParams();
  const tutorial = arrayTutoriais.find((tutorial) => tutorial.id === id);

  return (
    <>
    <Voltar rotaDestino="/tutoriais"/>
    
    <article className="box-do-tutorial">
      <h1>{tutorial.title}</h1>
      <h2>Tópicos abordados:</h2>
      <ul className="lista-de-topicos">
        {tutorial.topicosAbordados.map((topico, index) => (
          <li key={index} className="topico">
            {topico}
          </li>
        ))}
      </ul>
      <p className="instrutor-do-tutorial">
        Instrutor(a) do tutorial: <span>{tutorial.instrutor}</span>
      </p>

        <button className="botao-de-matricula">Matricular-Se</button>
    </article>
    </>
  );
};

export default DetalhesCursos;
