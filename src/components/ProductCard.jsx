import styles from "../assets/styles/components/ProductCard.module.css";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function ProductCard({ product }) {
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
      <Link to={"/la-bruja-verde/productos/" + product.id}>
        <Button
          className={styles.productCard_buyButton}
          text="Ver mas detalles"
          onClick={() => {}}
        />
      </Link>
    </div>
  );
}
