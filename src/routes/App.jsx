import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import PublicRoute from "../routes/PublicRoute";
import NavMenu from "../components/NavMenu2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Inicio from "../pages/Home";
import Nosotros from "../pages/About";
import Productos from "../pages/ProductList";
import ProductosDetalle from "../pages/ProductsDetail";
import Contacto from "../pages/Contact";
import Carrito from "../pages/Carrito";
import Login from "../pages/Login";
import Ritual from "../pages/Ritual";
import Dashboard from "../pages/Dashboard";

function App() {
 

  return (
    <div className="app">
      
      <Header />
      <main className="main">
        <Routes>
          <Route path="/la-bruja-verde/" element={<Inicio />} />
          <Route path="/la-bruja-verde/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route
            path="/la-bruja-verde/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/la-bruja-verde/conocenos" element={<Nosotros />} />
          <Route path="/la-bruja-verde/productos" element={<Productos />} />
          <Route
            path="/la-bruja-verde/productos/:id"
            element={<ProductosDetalle />}
          />

          <Route path="/la-bruja-verde/ritual" element={<Ritual />} />

          <Route path="/la-bruja-verde/contacto" element={<Contacto />} />

          <Route path="/la-bruja-verde/carrito" element={<Carrito />} />
  
        </Routes>
      </main>
      <Footer />
      <NavMenu />
    </div>
  );
}

export default App;
