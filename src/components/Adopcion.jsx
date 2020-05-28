import React from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../firebase";

const Adopcion = (props) => {
  const [user, setUser] = React.useState(null); // Estado del usuario

  React.useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
    } else {
      console.log("No existe el usuario");

      props.history.push("/login");
    }
  }, [props.history, user]);

  return (
    <div className="text-center mt-2 text-info">
      <h2>Adopción</h2>
    </div>
  );
};

export default withRouter(Adopcion);
