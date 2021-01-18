import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase";
import { Link, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const cerrarSesion = () => {
    auth.signOut().then(() => {
      props.history.push("/login");
    });
  };
  return (
    <div className="nav--container">
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand text-dark " to="/inicio">
          Camino a Casa
        </Link>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo03">
          <ul className=" navbar-nav ml-auto mt-2 mt-lg-0 ">
            <li className="nav-item active ">
              <NavLink
                className="btn btn-dark mr-1 mt-1 d-block p-2"
                to="/fundacion"
              >
                Perritos en Adopción
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn btn-dark mr-1 mt-1 d-block p-2"
                to="/adoptar"
              >
                ¿Como Adoptar?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn btn-dark mr-1 mt-1 d-block p-2"
                to="/veterinarias"
              >
                Veterinarias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="btn btn-dark mr-1 mt-1 d-block p-2"
                to="/wikipet"
              >
                WikiPet
              </NavLink>
            </li>

            {/* <li className="nav-item">
              {props.firebaseUser !== null ? (
                <NavLink
                  className="btn btn-dark mr-1 mt-1 d-block p-2"
                  to="/adopcion"
                >
                  Adopción
                </NavLink>
              ) : null}
            </li> */}

            <li className="nav-item">
              {props.firebaseUser !== null ? (
                <button
                  className="ml-auto btn bg-primary text-white mr-1 mt-1 d-block p-2"
                  onClick={() => cerrarSesion()}
                >
                  Cerrar Sesión
                </button>
              ) : (
                <NavLink
                  className="btn bg-primary text-white mr-1 mt-1 d-block p-2"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
