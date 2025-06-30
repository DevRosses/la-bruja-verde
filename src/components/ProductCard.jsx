import styles from "../assets/styles/components/ProductCard.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { useUserData } from "../contexts/UserDataContext";
import HeartIcon from "./ui/HeartIcon";

export default function ProductCard({ product, index }) {
  const { favorites, toggleFavorite } = useUserData();
  const isFavorite = favorites.some((p) => p.id === product.id);
  return (
    <motion.div
      className={styles.productCard}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.4, duration: 0.4 }}
    >
      <div className={styles.productCard_imageWrapper}>
        <img
          src={product.imagen}
          alt={product.nombre}
          className={styles.productCard_image}
        />
      </div>
      <button
        className={styles.favoriteBtn}
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleFavorite(product);
        }}
      >
        <HeartIcon filled={isFavorite} />
      </button>
      <h3>{product.nombre}</h3>
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
        <Button text="Ver mas detalles" onClick={() => {}} />
      </Link>
    </motion.div>
  );
}
