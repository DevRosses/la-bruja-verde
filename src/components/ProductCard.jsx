import { useState } from "react";
import Button from "../components/ui/Button";
import styles from "../assets/styles/components/ProductCard.module.css";

export default function ProductCard({ product, agregarProducto }) {
  const [cantidad, setCantidad] = useState(1); 

  function sumar() {
    setCantidad((prev) => prev + 1);
  }

  function restar() {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  }

  function agregarAlCarrito() {
    if (cantidad <= 0) {
      alert("La cantidad debe ser mayor a 0");
      return;
    }
    agregarProducto(product, cantidad);
    setCantidad(1); 
  }

  return (
    <div key={product.id} className={styles.productCard}>
      <img
        src={product.imagen}
        alt={product.nombre}
        className={styles.productCard_image}
      />
      <h3 className={styles.productCard_title}>{product.nombre}</h3>
      <p className={styles.productCard_oldPrice}>${product.precioAnterior}</p>
      <p className={styles.productCard_newPrice}>${product.precio}</p>
      <p className={styles.productCard_discount}>{product.descuento}% OFF</p>
      <p className={styles.productCard_transferPrice}>
        ${product.precioTransferencia} con Transferencia o depósito
      </p>
      <p className={styles.productCard_stockWarning}>
        ¡Solo quedan {product.stock} en stock!
      </p>
      <div className="productCard_agregarAlCarrito">
        <div className="productCard_cantidad">
          <Button
            className={styles.productCard_buyButton}
            text="+"
            onClick={sumar}
          />
          <span className={styles.productCard_cantidadLabel}> {cantidad} </span>
          <Button
            className={styles.productCard_buyButton}
            text="-"
            onClick={restar}
          />
        </div>
        <Button
          className={styles.productCard_buyButton}
          text="Agregar al carrito"
          onClick={agregarAlCarrito}
        />
      </div>
    </div>
  );
}
