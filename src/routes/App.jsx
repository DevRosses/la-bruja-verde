import "../assets/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavMenu from "../components/NavMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Inicio from "../pages/Home";
import Nosotros from "../pages/About";
import Productos from "../pages/ProductList";
import Contacto from "../pages/Contact";
import Carrito from "../pages/Carrito";
import {
  dispararSweetBasico,
  dispararSweetConfirmacion,
} from "../utils/SweetAlert";

function App() {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [cantidades, setCantidades] = useState({});

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
        // Eliminás del carrito
        setProductosCarrito((prevCarrito) =>
          prevCarrito.filter((producto) => producto.id !== id)
        );

        // Eliminás la cantidad del producto
        setCantidades((prev) => {
          const nuevo = { ...prev };
          delete nuevo[id];
          return nuevo;
        });

        dispararSweetBasico(
          "success",
          "¡Eliminado!",
          "El producto fue eliminado del carrito.","ok"
        );
      } else {
        dispararSweetBasico(
          "info",
          "Cancelado",
          "El producto sigue en el carrito.","ok"
        );
      }

      return; // finaliza acá
    }

    // Si hay más de 1, simplemente restás 1
    setCantidades((prev) => ({
      ...prev,
      [id]: prev[id] - 1,
    }));
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <NavMenu productos={productosCarrito} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route
              path="/productos"
              element={<Productos agregarAlCarrito={agregarAlCarrito} />}
            />
            <Route path="/contacto" element={<Contacto />} />
            <Route
              path="/carrito"
              element={
                <Carrito
                  productos={productosCarrito}
                  cantidades={cantidades}
                  restarContador={restarContador}
                  sumarContador={sumarContador}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
