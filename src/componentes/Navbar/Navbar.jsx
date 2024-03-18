import { NavLink, Link } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className=" navbar-brand fw-bold fs-1  ubuntu">
          Rick <span className="text-danger">&</span> Morty {""}
          <span className="text-primary">Enciclopedia</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open fw-bold text-dark"></span>
          <span className="fas fa-times close fw-bold text-dark"></span>
        </button>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink activeClassName="active" to="/" className="nav-link">
              Personajes
            </NavLink>
            <NavLink to="/episodios" className="nav-link">
              Episodios
            </NavLink>
            <NavLink className="nav-link" to="/ubicaciones">
              Ubicaciones
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
