import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import NavMenu from "./components/NavMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Home";
import Nosotros from "./pages/About";
import Productos from "./pages/ProductList";
import Contacto from "./pages/Contact";
import Carrito from "./components/Carrito";

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
      // Solo actualizar la cantidad si ya estaba
      setCantidades((prev) => ({
        ...prev,
        [producto.id]: (prev[producto.id] || 0) + cantidad,
      }));
    }

    alert("¡Se agregó al carrito!");
  }

  function sumarContador(id) {
    setCantidades((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  }

  function restarContador(id) {
    setCantidades((prev) => {
      const cantidadActual = prev[id];

      if (cantidadActual === 1) {
        const confirmacion = window.confirm(
          "¿Deseás eliminar este producto del carrito?"
        );

        if (confirmacion) {
          // Primero eliminás del carrito
          setProductosCarrito((prevCarrito) =>
            prevCarrito.filter((producto) => producto.id !== id)
          );

          // Luego devolvés el objeto sin ese id (lo eliminás de cantidades)
          const { [id]: _, ...resto } = prev; // _ es el valor descartado
          return resto;
        }

        return prev; // si no confirma, no cambia nada
      }

      // Si la cantidad es mayor a 1, solo restás uno
      return {
        ...prev,
        [id]: cantidadActual - 1,
      };
    });
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <NavMenu />
        <main className="main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route
              path="/productos"
              element={
                <Productos
                  cantidades={cantidades}
                  restarContador={restarContador}
                  sumarContador={sumarContador}
                  agregarAlCarrito={agregarAlCarrito}
                />
              }
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
