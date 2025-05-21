import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../assets/styles/pages/ProductsDetail.module.css";
import Button from "../components/ui/Button";
import { SpinnerCircularSplit } from "spinners-react";

function ProductsDetail({ agregarAlCarrito }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    fetch(`https://681d76fff74de1d219afd7e6.mockapi.io/api/v1/productos/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error cargando producto:", error));
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

  function sumar() {
    setCantidad((prev) => prev + 1);
  }

  function restar() {
    if (cantidad > 1) {
      setCantidad((prev) => prev - 1);
    }
  }

  function agregar() {
    if (cantidad <= 0) {
      alert("La cantidad debe ser mayor a 0");
      return;
    }
    agregarAlCarrito(product, cantidad);
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
      <p className={styles.productCard_descripcion}>${product.descripcion}</p>
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
          <span className={styles.productCard_cantidadLabel}>{cantidad}</span>
          <Button
            className={styles.productCard_buyButton}
            text="-"
            onClick={restar}
          />
        </div>
        <Button
          className={styles.productCard_buyButton}
          text="Agregar al carrito"
          onClick={agregar}
        />
      </div>
    </div>
  );
}

export default ProductsDetail;
