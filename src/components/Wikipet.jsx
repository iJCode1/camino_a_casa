import React from "react";
import { db } from "../firebase"; // Importamos el db:  database

const Wikipet = () => {
  // Estado: Datos del Perrito
  const [perritos, setPerritos] = React.useState([]);
  // Estado ultimo documento
  const [ultimo, setUltimo] = React.useState(null);
  // Estado para desactivar
  const [desactivar, setDesactivar] = React.useState(false);
  // Uso UseEffect para que se ejecute cuando se pinta el componente!
  React.useEffect(() => {
    // Funcion para obtener los datos de la DB
    const obtenerDatos = async () => {
      try {
        setDesactivar(true);
        const data = await db
          .collection("perritos")
          .limit(7)
          .orderBy("raza", "asc")
          .get(); // Se obtiene datos de la collecion perritos (tabla)

        // Se recorre para obtener todos los datos!
        const arrayPerritos = data.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setUltimo(data.docs[data.docs.length - 1]); // Obtener el ultimo documento mostrado
        // console.log(arrayPerritos);
        setPerritos(arrayPerritos);

        const query = await db
          .collection("perritos")
          .limit(7)
          .orderBy("raza", "asc")
          .startAfter(data.docs[data.docs.length - 1])
          .get(); // Se obtiene datos de la collecion perritos (tabla)

        if (query.empty) {
          console.log("No hay mas Perritos");
          setDesactivar(true);
        } else {
          setDesactivar(false);
        }
      } catch (error) {
        console.log(error); // Muestra si hay error
      }
    };
    obtenerDatos(); //Ejecutamos la Funcion
  }, []);
  //-------------------------------------- Opcion de Siguiente Limit(7) -----------------------------------------
  const siguiente = async () => {
    //console.log("siguiente");
    try {
      const data = await db
        .collection("perritos")
        .limit(7)
        .orderBy("raza", "asc")
        .startAfter(ultimo)
        .get(); // Se obtiene datos de la collecion perritos (tabla)
      const arrayPerritos = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      setPerritos([...perritos, ...arrayPerritos]);
      setUltimo(data.docs[data.docs.length - 1]); // Obtener el ultimo documento mostrado

      const query = await db
        .collection("perritos")
        .limit(7)
        .orderBy("raza", "asc")
        .startAfter(data.docs[data.docs.length - 1])
        .get(); // Se obtiene datos de la collecion perritos (tabla)

      if (query.empty) {
        console.log("No hay mas Perritos");
        setDesactivar(true);
      } else {
        setDesactivar(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //-------------------------------------- Elementos -----------------------------------------
  return (
    <div>
      <div className="container">
        <div className="text-center ">
          <h1 className="mt-4 mb-4 ">
            <mark className="d-block p-2">Wikipet</mark>
          </h1>
        </div>

        <ul>
          {perritos.map((item) => (
            <div className="row" key={item.id}>
              <div className="align-self-center p-2 bd-highlight col-11 col-sm-8 col-md-6 col-xl-4">
                <img
                  className="mx-auto d-block rounded-circle"
                  src={item.img}
                  alt="Perrito"
                />
              </div>
              <div className="col-11 col-sm-8 col-md-6 col-xl-4 mt-4 mb-4">
                <li className="list-group-item">
                  <h3 className="text-center mb-4">
                    <span className="text-success ">{item.raza}</span>
                  </h3>

                  {item.raza ? (
                    <p>
                      <strong>Raza:</strong> {item.raza}
                    </p>
                  ) : null}

                  {item.origen ? (
                    <p>
                      <strong>
                        <span>Origen:</span>
                      </strong>
                      {item.origen}
                    </p>
                  ) : null}

                  {item.temperamento ? (
                    <p>
                      <strong>Caracteristicas:</strong> {item.temperamento}
                    </p>
                  ) : null}

                  {item.altura ? (
                    <p>
                      <strong>Altura:</strong> {item.altura}
                    </p>
                  ) : null}

                  {item.peso ? (
                    <p>
                      <strong>Peso:</strong> {item.peso}
                    </p>
                  ) : null}

                  {item.color ? (
                    <p>
                      <strong>Color:</strong> {item.color}
                    </p>
                  ) : null}

                  {item.esperanzaV ? (
                    <p>
                      <strong>Esperanza Vida:</strong> {item.esperanzaV}
                    </p>
                  ) : null}
                </li>
              </div>
            </div>
          ))}
        </ul>
        <div className="mb-5">
          <button
            className="btn btn-info btn-block btn-sm "
            onClick={() => siguiente()}
            disabled={desactivar}
          >
            Mostrar Mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wikipet;
