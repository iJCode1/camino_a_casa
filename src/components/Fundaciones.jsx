import React from "react";
import { db } from "../firebase"; // Importamos el db:  database

import "../estilos/fundaciones.css";

const Fundaciones = () => {
  // Estado: Datos del Perrito de Adopcion
  const [perritos, setPerritos] = React.useState([]);
  // Uso UseEffect para que se ejecute cuando se pinta el componente!
  React.useEffect(() => {
    // Funcion para obtener los datos de la DB
    const obtenerDatos = async () => {
      try {
        const data = await db
          .collection("amigos_peludos_toluca")
          .orderBy("nombre", "asc")
          .get(); // Se obtiene datos de la collecion perritos (tabla)

        // Se recorre para obtener todos los datos!
        const arrayPerritos = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));

        setPerritos(arrayPerritos);
      } catch (error) {
        console.log(error); // Muestra si hay error
      }
    };
    obtenerDatos(); //Ejecutamos la Funcion
  }, []);
  //-------------------------------------- Elementos -----------------------------------------
  return (
    <div className="container">
      <div className="text-center ">
        <h1 className="mt-4 mb-4 ">
          <mark className="d-block p-2">Perritos Para Adoptar</mark>
        </h1>
      </div>
      <div className="row">
        {perritos.map((item) => (
          <div
            className="col-sm-4 col-12 col-sm-8 col-md-6 col-xl-4 mt-4 mb-4"
            key={item.id}
          >
            <div className="card tamaño mx-auto">
              <div className="card-body">
                <div className="align-self-center p-4 bd-highlight col-12 col-sm-8 col-md-6 col-xl-4">
                  <img
                    className="mx-auto d-block rounded"
                    src={item.img}
                    alt="Perrito"
                  />
                </div>
                <div className="text-center">
                  {item.nombre ? (
                    <p>
                      <strong>Nombre:</strong> {item.nombre}
                    </p>
                  ) : null}
                  {item.raza ? (
                    <p>
                      <strong>Raza:</strong> {item.raza}
                    </p>
                  ) : null}
                  {item.sexo ? (
                    <p>
                      <strong>
                        <span>Sexo del Perrit@: </span>
                      </strong>
                      {item.sexo}
                    </p>
                  ) : null}
                  {item.edad ? (
                    <p>
                      <strong>Edad:</strong> {item.edad}
                    </p>
                  ) : null}
                  {item.talla ? (
                    <p>
                      <strong>Talla:</strong> {item.talla}
                    </p>
                  ) : null}
                  {item.descripcion ? (
                    <p>
                      <strong>Descripción:</strong> {item.descripcion}
                    </p>
                  ) : null}
                  {item.estadoA ? (
                    <p>
                      <strong>Estado Actual:</strong> {item.estadoA}
                    </p>
                  ) : null}
                  {item.necesidad ? (
                    <p>
                      <strong>Necesidad:</strong> {item.necesidad}
                    </p>
                  ) : null}

                  <a
                    className="fa fa-facebook-official"
                    href="https://www.facebook.com/amigospeludosdetolucaAC/"
                    target="__blank"
                  >
                    <strong> Amigos Peludos Toluca, A.C.</strong>
                  </a>

                  <a
                    className="fa fa-whatsapp text-success mb-2"
                    href={
                      "https://wa.me/527223812630?text=Me%20gustaria%20mas%20información%20de%20" +
                      item.nombre
                    }
                    target="__blank"
                  >
                    <strong> Quiero adoptar a {item.nombre}</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fundaciones;
