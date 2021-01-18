import React from "react";
import '../estilos/main2.css'

const Inicio = () => {
  return (
    <section id="hero">
        <div className="container--home">
          <div className="info">
            <h1 tabindex="0">Camino a Casa</h1>
            <p tabindex="0">Te ayudamos a encontrar el perrito que cambiara tu vida.</p>
            <a className="info--button" tabindex="0" href="./fundacion">Ver Catálogo de Adoptables</a>
          </div>
        </div>
      </section>
  );
};

export default Inicio;
