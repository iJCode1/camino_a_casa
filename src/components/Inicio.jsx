import React from "react";

const Inicio = () => {
  return (
    <div className="">
      <h1 className="text-success mt-4 mb-2 text-center">
        ¿Que es Camino a Casa?
      </h1>

      <div className="mr-5 ml-5 text-center">
        Camino a Casa es un proyecto que busca la concientización de la adopción
        de Caninos.
        <br />
        <div className="mt-2 text-center">
          El proposito es brindar un facil acercamiento a las
          <span className="text-info"> Fundaciones</span> o
          <span className="text-info"> Veterinarias</span>
          &nbsp;para optar por los servicios que estas ofrecen.
        </div>
        <div className="mt-2 text-center">
          Con esto se espera lograr que las personas puedan optar por la
          adopción de los perritos en Estado de Calle.
        </div>
        <div className="mt-5 text-center">
          <h1 className="text-secondary mb-2 text-center">¿Quienes Somos?</h1>
          Somos Estudiantes de la Carrera de
          <strong>
            <span className="text-primary">
              &nbsp;Ingenieria en Sistemas Computacionales
            </span>
          </strong>
          .
          <br />
          Estamos conformados por
          <div className="text-center mx-auto">
            <ul className="list-group-flush mr-4">
              <li className="list-group-item"></li>
              <li className="list-group-item">Dominguez Merino Joel</li>
              <li className="list-group-item">Gil Alcantara Enrique</li>
              <li className="list-group-item ">
                Espinoza Martinez Michael Brandon
              </li>
              <li className="list-group-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
