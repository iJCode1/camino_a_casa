import React from "react"; // Importamos React
import { auth, db } from "../firebase"; // Importamos el auth: autenticación
import { withRouter } from "react-router-dom"; // Importamos el withRouter para usar el history.props

const Login = (props) => {
  // Estado de email
  const [email, setEmail] = React.useState("");
  // Estado de Contraseña
  const [contra, setContra] = React.useState("");
  // Estado de Errores
  const [error, setError] = React.useState(null);
  // Estado de ¿Es Registro?
  const [esRegistro, setEsRegistro] = React.useState(false);
  // ---------------------------------------- Validar Campos ----------------------------------------
  const Validar = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      // Validar que el email no este vacio
      setError("Ingrese un Email!");
      return;
    }

    if (!contra.trim()) {
      // Validar que la contraseña no este vacia
      setError("Ingrese una Contraseña");
      return;
    }

    if (contra.length < 6) {
      // Validar que el tamaño de la contraseña sea 6 o mayor
      setError("La contraseña debe tener 6 o mas Caracteres");
      return;
    }
    // Limpiamos Estados una ves que todo resulto bien
    setError(null);
    setContra("");
    setEmail("");

    if (esRegistro) {
      // Si estamos en la opcion de Registro....
      registro();
    } else {
      //Si no estamos en registro... 'Es Login'
      login();
    }
  };
  // ----------------------------------- Registro de Usuarios ----------------------------------

  const registro = React.useCallback(async () => {
    try {
      // Creacion de nuevos Usuarios por el email y contraseña
      const res = await auth.createUserWithEmailAndPassword(email, contra);
      console.log(res.user);

      // Creamos el registro de los usuarios en nuestra colleción.
      await db.collection("usuarios").doc(res.user.uid).set({
        uid: res.user.uid,
        email: res.user.email,
      });

      setEmail("");
      setContra("");
      setError(null);
      props.history.push("/admin"); // Mandamos a la Ruta A dmin una ves que se hizo el resgitro
    } catch (error) {
      // Validacion : Email invalido
      if (error.code === "auth/invalid-email") {
        setError("Email Invalido");
      }
      // Validacion : Email ya registrado
      if (error.code === "auth/email-already-in-use") {
        setError("Email ya registrado");
      }
      console.log(error);
    }
  }, [email, contra, props.history]); // Se colocal en [] los estados que usaremos.

  // ----------------------------------- Login de Usuarios ----------------------------------

  const login = React.useCallback(async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, contra); // Hacemos el signIn
      console.log(res.user);
      setEmail("");
      setContra("");
      setError(null);
      props.history.push("/"); // Mandamos a la Ruta Admin una ves que se hizo el Login
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Email no encontrado");
      }
      if (error.code === "auth/invalid-email") {
        setError("Email no Valido");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      console.log(error);
    }
  }, [email, contra, props.history]);

  // ---------------------------------------- Contenido ----------------------------------------
  return (
    <div className="container mt-5">
      <h3 className="text-center">
        {esRegistro ? "Registro de Usuario" : "Login de Acceso"}
      </h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={Validar}>
            {error ? <div className="alert alert-danger">{error}</div> : null}
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Ingrese Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              className="form-control mb-2"
              placeholder="Ingrese Contraseña"
              onChange={(e) => setContra(e.target.value)}
              value={contra}
            />
            <button className="btn btn-lg btn-dark btn-block" type="submit">
              {esRegistro ? "Registrarse" : "Acceder"}
            </button>
            <button
              className="btn btn-sm btn-info btn-block"
              type="button"
              onClick={() => setEsRegistro(!esRegistro)}
            >
              {esRegistro ? "¿Ya tienes Cuenta?" : "¿Aún no tienes Cuenta?"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login); // Exportamos con withRoter
