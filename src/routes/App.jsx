import "../assets/styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Inicio from "../pages/Home";
import Nosotros from "../pages/About";
import Productos from "../pages/ProductList";
import ProductosDetalle from "../pages/ProductsDetail";
import Contacto from "../pages/Contact";
import Carrito from "../pages/Carrito";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import {
  dispararSweetBasico,
  dispararSweetConfirmacion,
} from "../utils/SweetAlert";

function App() {
  const [products, setProducts] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [usuarioLogeado, setUsuarioLogeado] = useState(false);
  const [adminLogeado, setAdminLogeado] = useState(false);

  function agregarAlCarrito(producto, cantidad) {
    const yaExiste = productosCarrito.find((p) => p.id === producto.id);

    if (!yaExiste) {
      setProductosCarrito([...productosCarrito, { ...producto }]);
      setCantidades((prev) => ({
        ...prev,
        [producto.id]: cantidad,
      }));
    } else {
      setCantidades((prev) => ({
        ...prev,
        [producto.id]: (prev[producto.id] || 0) + cantidad,
      }));
    }
    dispararSweetBasico("success", "¡Se agregó al carrito!", "", "ok");
  }

  function sumarContador(id) {
    setCantidades((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  async function restarContador(id) {
    const cantidadActual = cantidades[id];

    if (cantidadActual === 1) {
      const resultado = await dispararSweetConfirmacion();

      if (resultado.isConfirmed) {
        setProductosCarrito((prevCarrito) =>
          prevCarrito.filter((producto) => producto.id !== id)
        );

        setCantidades((prev) => {
          const nuevo = { ...prev };
          delete nuevo[id];
          return nuevo;
        });

        dispararSweetBasico(
          "success",
          "¡Eliminado!",
          "El producto fue eliminado del carrito.",
          "ok"
        );
      } else {
        dispararSweetBasico(
          "info",
          "Cancelado",
          "El producto sigue en el carrito.",
          "ok"
        );
      }

      return;
    }

    setCantidades((prev) => ({
      ...prev,
      [id]: prev[id] - 1,
    }));
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/la-bruja-verde/" element={<Inicio />} />
            <Route path="/la-bruja-verde/login" element={<Login />} />
            <Route path="/la-bruja-verde/nosotros" element={<Nosotros />} />
            <Route
              path="/la-bruja-verde/productos"
              element={
                <Productos
                  productos={products}
                  setProductos={setProducts}
                  agregarAlCarrito={agregarAlCarrito}
                />
              }
            />
            <Route
              path="/la-bruja-verde/productos/:id"
              element={<ProductosDetalle agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route path="/la-bruja-verde/contacto" element={<Contacto />} />
            <Route
              path="/la-bruja-verde/carrito"
              element={
                <Carrito
                  productos={productosCarrito}
                  cantidades={cantidades}
                  restarContador={restarContador}
                  sumarContador={sumarContador}
                />
              }
            />
            <Route
              path="/la-bruja-verde/admin"
              element={
                adminLogeado ? (
                  <Admin />
                ) : (
                  <Navigate to={"/la-bruja-verde/login"} replace />
                )
              }
            />
          </Routes>
          <Footer />
        </main>
        <NavMenu productos={productosCarrito} />
      </div>
    </Router>
  );
}

export default App;
