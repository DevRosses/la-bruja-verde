import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

import styles from "../assets/styles/components/CarritoCard.module.css";

export default function CarritoCard({
  producto,
  cantidades,
  restarContador,
  sumarContador,
}) {
  return (
    <div className="container">
      <Link to={"/productos/" + producto.id}>
        <div className="grid-1">
          <h3 className={styles.carritoCard_title}>{producto.nombre}</h3>
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className={styles.carritoCard_image}
          />
        </div>

        <div>
          <span className={styles.carritoCard_cantidad}>
            {cantidades[producto.id] || 1}
          </span>
          <p className={styles.carritoCard_etiqueta}>Precio Unitario</p>
          <span className={styles.carritoCard_valor}>
            ${Number(producto.precio).toFixed(2)}
          </span>
          <p className={styles.carritoCard_etiqueta}>Precio total</p>
          <span className={styles.carritoCard_valor}>
            ${(cantidades[producto.id] * Number(producto.precio)).toFixed(2)}
          </span>
        </div>
      </Link>

      <div className={styles.carritoCard_contenedorButton}>
        <Button
          className={styles.carritoCard_buyButton}
          text="+"
          onClick={sumarContador}
        />

        <Button
          className={styles.carritoCard_buyButton}
          text="-"
          onClick={restarContador}
        />
      </div>
    </div>
  );
}
