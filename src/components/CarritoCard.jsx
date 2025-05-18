import Button from "../components/ui/Button";

import "../assets/styles/components/CarritoCard.module.css";

export default function CarritoCard({ producto, quitarProducto }) {
  function quitar() {
    console.log("quitarProducto PASO 1");
    quitarProducto(producto);
  }

  

  return (
    <div className="product-card">
      <h3 className="product-title">{producto.nombre}</h3>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-image"
      />
      <span>{producto.cantidad}</span>
      <p className="old-price">${producto.precioAnterior}</p>
      <p className="new-price">${producto.precio}</p>
      <p className="discount">{producto.descuento}% OFF</p>
      <p className="transfer-price">
        ${producto.precioTransferencia} con Transferencia o depósito
      </p>

      <Button
        className="buy-button"
        text="Eliminar del carrito"
        onClick={quitar}
      />
    </div>
  );
}
