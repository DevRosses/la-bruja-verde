import React, { createContext, useState, useEffect } from "react";
import {
  dispararSweetBasico,
  dispararSweetConfirmacion,
} from "../utils/SweetAlert";

export const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [productos, setProductos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://681d76fff74de1d219afd7e6.mockapi.io/api/v1/productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  // Eliminar producto del carrito con confirmación
  async function eliminarDelCarrito(id) {
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
  }

  function agregarAlCarrito(producto, cantidad) {
    const yaExiste = productosCarrito.find((p) => p.id === producto.id);
    if (!yaExiste) {
      setProductosCarrito([...productosCarrito, { ...producto }]);
      setCantidades((prev) => ({
        ...prev,
        [producto.id]: cantidad,
      }));
      dispararSweetBasico("success", "¡Se agregó al carrito!", "", "ok");
      return true; // para saber si se agregó
    } else {
      dispararSweetBasico(
        "info",
        "El producto ya está en el carrito",
        "Si quieres agregar más, modifícalo desde el carrito.",
        "ok"
      );
      return false;
    }
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

  // Calcular el total del carrito
  const totalCarrito = productosCarrito.reduce((subTotal, producto) => {
    return subTotal + producto.precio * (cantidades[producto.id] || 1);
  }, 0);

  // Calcular la cantidad total de productos en el carrito
  const cantidadTotal = productosCarrito.reduce(
    (acc, producto) => acc + (cantidades[producto.id] || 1),
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        productos,
        productosCarrito,
        cantidades,
        loading,
        error,
        setLoading,
        agregarAlCarrito,
        sumarContador,
        restarContador,
        eliminarDelCarrito, // nueva función
        totalCarrito, // total calculado
        cantidadTotal, // cantidad total de productos
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
