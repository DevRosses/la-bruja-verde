import React, { useEffect, useState } from "react";
import Card from "../components/ProductCard";
import Carrito from "../components/Carrito";
import styles from "../assets/styles/components/ProductList.module.css";

export default function ProductsList({
  sumarContador,
  restarContador,
  cantidades,
  agregarAlCarrito,
}) {
  const [productos, setProductos] = useState([]);
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

  /**/

  if (loading) {
    return <p>Cargando productos...</p>;
  } else if (error) {
    return <p>Error al cargar los productos: {error.message}</p>;
  } else {
    return (
      <>
        <section className={styles.productList_container}>
          {productos.map((producto) => (
            <Card
              key={producto.id}
              product={producto}
              cantidad={cantidades[producto.id] || 1}
              sumarContador={() => sumarContador(producto.id)}
              restarContador={() => restarContador(producto.id)}
              agregarProducto={agregarAlCarrito}
            />
          ))}
        </section>
      </>
    );
  }
}
