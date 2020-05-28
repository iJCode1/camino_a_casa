import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { auth } from "./firebase"; // importacion de Firebase
import Footer from "./components/Footer";
import Fundaciones from "./components/Fundaciones";
import Veterinarias from "./components/Veterinarias";
import Navbar from "./components/Navbar";
import Wikipet from "./components/Wikipet";
import Login from "./components/Login";
import Adoptar from "./components/Adoptar";
import Adopcion from "./components/Adopcion";

function App() {
  /* 
    onAuthStateChanged: va evaluando si existe el usuario, 
    por lo tanto si se cierra sesión se vuelve a ejecutar onAuthStateChanged()
*/
  const [firebaseUser, setFirebaseUser] = React.useState(false); // Estado: Hay usuario?

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setFirebaseUser(user);
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);
  return firebaseUser !== false ? (
    <Router>
      <div>
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/adoptar">
            <Adoptar />
          </Route>
          <Route path="/adopcion">
            <Adopcion />
          </Route>
          <Route path="/wikipet">
            <Wikipet />
          </Route>
          <Route path="/fundacion">
            <Fundaciones />
          </Route>
          <Route path="/veterinarias">
            <Veterinarias />
          </Route>
          <Route path="/">
            <Fundaciones />
          </Route>
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  ) : (
    <div>Cargando...</div>
  );
}

export default App;
