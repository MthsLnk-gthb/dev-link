import { Link } from "react-router-dom"

const Voltar = ({rotaDestino}) => {
  return (
    <Link to={rotaDestino} className="link-de-retorno">
      ↩Voltar
    </Link>
  );
}

export default Voltar