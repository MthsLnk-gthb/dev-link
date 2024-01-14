import PropTypes from 'prop-types'
import './style.scss'

const Filtros = ({handleFiltro, filtroTopico, topicos, filtroNivel, niveis}) => {
  return (
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
  );
}

Filtros.propTypes = {
  handleFiltro: PropTypes.func.isRequired,
  filtroTopico: PropTypes.string.isRequired,
  topicos: PropTypes.arrayOf(PropTypes.string).isRequired,
  filtroNivel: PropTypes.string.isRequired,
  niveis: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Filtros