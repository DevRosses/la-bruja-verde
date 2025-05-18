import Button from "../components/ui/Button";
import { useState } from "react";

import "../assets/styles/components/ProductCard.module.css";

export default function ProductCard({ product, agregarProducto }) {
  const [cantidad, setCantidad] = useState(1);

  /*function agregar() {
    console.log("agregarProducto PASO 1");
    agregarProducto(product);
  }

  function quitar() {
    console.log("quitarProducto PASO 1");
    quitarProducto(product);
  }*/

  function agregarAlCarrito() {
    if (cantidad < 1) return;
    agregarProducto(product, cantidad );
    console.log("agregarProducto PASO 2");
  }

  function sumarContador() {
    console.log("agregarProducto PASO 1");
    //agregarProducto(product);
    setCantidad(cantidad + 1);
  }
  function restarContador() {
    console.log("quitarProducto PASO 1");
    //quitarProducto(product);
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div key={product.id} className="product-card">
      <img
        src={product.imagen}
        alt={product.nombre}
        className="product-image"
      />
      <h3 className="product-title">{product.nombre}</h3>
      <p className="old-price">${product.precioAnterior}</p>
      <p className="new-price">${product.precio}</p>
      <p className="discount">{product.descuento}% OFF</p>
      <p className="transfer-price">
        ${product.precioTransferencia} con Transferencia o depósito
      </p>
      <p className="stock-warning">¡Solo quedan {product.stock} en stock!</p>
      <Button className="buy-button" text="+" onClick={sumarContador} />
      <span> {cantidad} </span>
      <Button className="buy-button" text="-" onClick={restarContador} />
      <Button
        className="buy-button"
        text="Agergar al carrito"
        onClick={agregarAlCarrito}
      />
    </div>
  );
}
