import style from "../assets/styles/components/Carrito.module.css";
import Card from "./CarritoCard";

export default function Carrito({
  productos,cantidades,
  restarContador,
  sumarContador,
}) {
  // Si no hay productos en el carrito, no se renderiza nada
  if (!productos || productos.length === 0) {
    return null;
  }
 
  // Calcular el total del carrito
  const total = productos.reduce((subTotal, producto) => {
    return subTotal + producto.precio * (cantidades[producto.id] || 1);

  }, 0);
  console.log("total desde carrito", total);

  return (
    <div className={style.carritoContainer}>
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Card
            key={producto.id}
            producto={producto}
            cantidades={cantidades}
            restarContador={() => restarContador(producto.id)}
            sumarContador={() => sumarContador(producto.id)}
          />
        ))
      ) : (
        <p>Carrito vacío</p>
      )}

      {total > 0 ? <p>Total: {total.toFixed(2)} $</p> : <></>}
    </div>
  );
}
