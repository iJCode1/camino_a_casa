import React from "react";
import { db } from "../firebase"; // Importamos el db:  database
import Map from "./Map";

const Veterinarias = () => {
  // Estado: Datos de las veterinarias
  const [veterinaria, setVeterinaria] = React.useState([]);
  // Uso UseEffect para que se ejecute cuando se pinta el componente!
  React.useEffect(() => {
    // Funcion para obtener los datos de la DB
    const obtenerDatos = async () => {
      try {
        const data = await db
          .collection("veterinarias")
          .orderBy("veterinaria", "asc")
          .get(); // Se obtiene datos de la collecion veterinarias (tabla)

        // Se recorre para obtener todos los datos!
        const arrayVeterinaria = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        //console.log(arrayVeterinaria);
        setVeterinaria(arrayVeterinaria);
      } catch (error) {
        console.log(error); // Muestra si hay error
      }
    };
    obtenerDatos(); //Ejecutamos la Funcion
  }, []);
  //-------------------------------------- Elementos -----------------------------------------
  return (
    <div>
      <div className="container">
        <div className="text-center ">
          <h1 className="mt-3 mb-4 ">
            <mark className="d-block p-2">Veterinarias</mark>
          </h1>
        </div>
        <ul>
          {veterinaria.map((item) => (
            <div className="row" key={item.id}>
              <div className="align-self-center p-2 bd-highlight col-11 col-sm-8 col-md-6 col-xl-4">
                <img
                  className="rounded mx-auto d-block "
                  src={item.img}
                  alt="Veterinaria"
                />
              </div>
              <div className="col-11 col-sm-8 col-md-6 col-xl-4 mt-4 mb-4">
                <li className="list-group-item">
                  <h3 className="text-center mb-4">
                    <span className="text-success">{item.veterinaria}</span>
                  </h3>

                  {item.veterinaria ? (
                    <p>
                      <strong>Veterinaria:</strong> {item.veterinaria}
                    </p>
                  ) : null}

                  {item.servicios ? (
                    <p>
                      <strong>
                        <span>Servicios: </span>
                      </strong>
                      {item.servicios}
                    </p>
                  ) : null}

                  {item.direccion ? (
                    <p>
                      <strong>Dirección:</strong> {item.direccion}
                    </p>
                  ) : null}

                  {item.horario ? (
                    <p>
                      <strong>Horario:</strong> {item.horario}
                    </p>
                  ) : null}

                  {item.what ? (
                    <p className="fa fa-whatsapp text-success mb-2">
                      <strong> Telefono:</strong> {item.what}
                    </p>
                  ) : (
                    <p>
                      <strong> Telefono:</strong> {item.tel}
                    </p>
                  )}

                  {item.facebook ? (
                    <a
                      className="fa fa-facebook-official"
                      href={item.facebook}
                      target="__blank"
                    >
                      <strong> {item.veterinaria} </strong>
                    </a>
                  ) : null}

                  {item.map ? (
                    <Map map={item.map} titulo={item.veterinaria} />
                  ) : null}
                </li>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Veterinarias;
