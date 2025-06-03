import { useContext } from "react";
import Card from "../components/CarritoCard";
import { CarritoContext } from "../contexts/CarritoContext";

export default function Carrito() {
  const { productosCarrito, cantidades, restarContador, sumarContador } =
    useContext(CarritoContext);

  // Calcular el total del carrito
  const total = productosCarrito.reduce((subTotal, producto) => {
    return subTotal + producto.precio * (cantidades[producto.id] || 1);
  }, 0);

  console.log("total desde carrito", total.toFixed(2));

  return (
    <>
      <div>
        <h2>Estás a un paso de completar tu ritual.</h2>
        <p>Revisá tus brebajes antes de continuar.</p>
        {productosCarrito.length > 0 ? (
          productosCarrito.map((producto) => (
            <Card
              key={producto.id}
              producto={producto}
              cantidades={cantidades}
              restarContador={() => restarContador(producto.id)}
              sumarContador={() => sumarContador(producto.id)}
            />
          ))
        ) : (
          <h2>Carrito vacío</h2>
        )}

        {total > 0 ? <p>Total: {total.toFixed(2)} $</p> : <></>}
      </div>
      <div>
        <button>Finalizar compra</button>
        <button>Seguir explorando</button>
      </div>
    </>
  );
}
