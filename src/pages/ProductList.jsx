import React, { useEffect, useState } from "react";
import Card from "../components/ProductCard";
import Carrito from "../components/Carrito";
import styles from "../assets/styles/components/ProductList.module.css";

export default function ProductsList() {
  const [productos, setProductos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cantidades, setCantidades] = useState({});




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
        <section>
          <Carrito
            productos={productosCarrito}
            cantidades={cantidades}
            restarContador={restarContador}
            sumarContador={sumarContador}
          />
        </section>
      </>
    );
  }
}
