import React, { useEffect, useState } from "react";
import Card from "../components/ProductCard";
import Carrito from "../components/Carrito";

export default function ProductsList() {
  const [productos, setProductos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
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
        setError(error), setLoading(false);
      });
  }, []);

  console.log("productos", productos);

  function agregarAlCarrito(producto, cantidad) {
    console.log("agregarProducto PASO 2");

    const existe = productosCarrito.find((p) => p.id === producto.id);

    if (existe) {
      // Si existe, actualizamos la cantidad
      const nuevoCarrito = productosCarrito.map((p) => {
        if (p.id === producto.id) {
          return { ...p, cantidad: p.cantidad + producto.cantidad };
        }
        return p;
      });
      setProductosCarrito(nuevoCarrito);
    } else {
      // Si no existe, lo agregamos al carrito
      setProductosCarrito([...productosCarrito, { ...producto, cantidad }]);
    }
    alert("¡Se agrego al carrito! ");
    console.log("cantidad desde funcion productList 47", producto.cantidad);
  }

  function quitarAlCarrito(producto) {
    console.log("agregarProducto PASO 2");
    console.log("quito: " + { productosCarrito });
    var nuevoCarrito = productosCarrito.filter((p) => p.id !== producto.id);
    setProductosCarrito(nuevoCarrito);
    alert("¡Se quito del carrito carrito! ");
  }

  if (loading) {
    return <p>Cargando productos...</p>;
  } else if (error) {
    return <p>Error al cargar los productos: {error.message}</p>;
  } else {
    return (
      <>
        <section className="products-container">
          {productos.map((producto) => (
            <Card
              key={producto.id}
              product={producto}
              agregarProducto={agregarAlCarrito}
              quitarProducto={quitarAlCarrito}
            />
          ))}
        </section>
        <section>
          <Carrito
            productos={productosCarrito}
            agregarProducto={agregarAlCarrito}
            quitarProducto={quitarAlCarrito}
          />
        </section>
      </>
    );
  }
}
