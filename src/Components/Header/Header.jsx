import { Link } from "react-router-dom"
import './style.scss'

const Navbar = () => {
  return (
    <main>
      <header className="header-da-aplicacao">
        <nav className="barra-de-navegacao">
          <Link to="/dev-link/" className="link-da-navbar">
            Home
          </Link>
          <Link to="/dev-link/tutoriais" className="link-da-navbar">
            Tutoriais
          </Link>
          <Link to="/dev-link/sobremim" className="link-da-navbar">
            Sobre
          </Link>
        </nav>
      </header>
    </main>
  );
}

export default Navbar
