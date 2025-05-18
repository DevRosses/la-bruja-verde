// Importa las funciones que necesitas de los SDK que necesitas
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Agregar SDK para los productos de Firebase que desea utilizar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuración de Firebase de tu aplicación web
// Para Firebase JS SDK v7.20.0 y versiones posteriores, MeasurementId es opcional
const firebaseConfig = {
  apiKey: "AIzaSyBsXdxCD_2cye3WYIlTefuVrN55XobMNPY",
  authDomain: "la-bruja-verde.firebaseapp.com",
  databaseURL: "https://la-bruja-verde-default-rtdb.firebaseio.com",
  projectId: "la-bruja-verde",
  storageBucket: "la-bruja-verde.firebasestorage.app",
  messagingSenderId: "918325711152",
  appId: "1:918325711152:web:19843b39e18efa84c038f5",
  measurementId: "G-JKQ9GZRZLC",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);


export { app, analytics, db, auth, storage };
  
// Inicializar la autenticación de Firebase y obtener una referencia al servicio