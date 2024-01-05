import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <main>
    <header className="header-da-aplicacao">
        <nav className="barra-de-navegacao">
            <Link to="/home" className="link-da-navbar">Home</Link>
            <Link to="/tutoriais" className="link-da-navbar">Tutoriais</Link>
            <Link to="/blog" className="link-da-navbar">Blog</Link>
        </nav>
    </header>
    </main>
  )
}

export default Navbar
