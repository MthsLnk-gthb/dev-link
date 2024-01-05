import { Link } from "react-router-dom"

const Voltar = ({rotaDestino}) => {
  return (
    <Link to={rotaDestino}>Voltar</Link>
  )
}

export default Voltar