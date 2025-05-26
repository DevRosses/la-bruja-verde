import React, { useEffect, useState } from "react";
import Card from "../components/ProductCard";
import styles from "../assets/styles/pages/ProductList.module.css";
import { SpinnerCircularSplit } from "spinners-react";


export default function ProductsList({  setProductos, productos }) {
  
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

  if (loading) return (
    <>
      <SpinnerCircularSplit />
      <p>Cargando productos...</p>
    </>
  );
  if (error) return <p>Error al cargar productos: {error.message}</p>;


  

  return (
    <section className={styles.productList}>
      <div className="productInfo">
        <h2>
          Nuestros hechizos están en frascos. Cada producto tiene una intención:
          hidratar, proteger, sanar.
        </h2>
        <p>
          Cosmética botánica. Sin químicos, sin crueldad. Con ciencia y alma.
        </p>
      </div>
      <div className={styles.productCarousel}>
        {productos.map((producto, index) => (
          <Card
            key={producto.id}
            product={producto}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
