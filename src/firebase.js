import app from "firebase/app"; // Importamos Firebase
import "firebase/firestore"; // Importamos Firestore
import "firebase/auth"; // Importamos auth

// Colocamos la configuracion de nuestro proyecto de firebase
const firebaseConfig = {
  apiKey: "AIzaSyCER44R47zhEITVHoZVfTZPGT-sq6DJb4g",
  authDomain: "camino-a-casa-c2275.firebaseapp.com",
  databaseURL: "https://camino-a-casa-c2275.firebaseio.com",
  projectId: "camino-a-casa-c2275",
  storageBucket: "camino-a-casa-c2275.appspot.com",
  messagingSenderId: "82319763998",
  appId: "1:82319763998:web:beb213fd20ff6ae8ee9c0f",
};
// Initialize Firebase : Inicialoiazamos nuestra app
app.initializeApp(firebaseConfig);

const db = app.firestore(); // Conexion con la DB
const auth = app.auth(); // Autenticación

export { db, auth }; // Exportamos DB y Auth
