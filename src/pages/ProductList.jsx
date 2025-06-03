import React, { useContext } from "react";
import Card from "../components/ProductCard";
import styles from "../assets/styles/pages/ProductList.module.css";
import { SpinnerCircularSplit } from "spinners-react";
import { CarritoContext } from "../contexts/CarritoContext";


export default function ProductsList() {

  const { loading, error, productos } = useContext(CarritoContext);


 
  if (loading)
    return (
      <>
        <SpinnerCircularSplit />
        <p>Cargando productos...</p>
      </>
    );
  if (error) return <p>Error al cargar productos: {error.message}</p>;

  return (
    <section className={styles.productList}>
      <div className={styles.productInfo}>
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
          <Card key={producto.id} product={producto} index={index} />
        ))}
      </div>
    </section>
  );
}
