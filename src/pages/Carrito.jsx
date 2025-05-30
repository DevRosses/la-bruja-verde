//import style from "../assets/styles/pages/Carrito.module.css";
import Card from "../components/CarritoCard";

export default function Carrito({
  productos,
  cantidades,
  restarContador,
  sumarContador,
}) {
  // Calcular el total del carrito
  const total = productos.reduce((subTotal, producto) => {
    return subTotal + producto.precio * (cantidades[producto.id] || 1);
  }, 0);

  console.log("total desde carrito", total.toFixed(2));

  return (
    <>
      <div >
        <h2>Estás a un paso de completar tu ritual.</h2>
        <p>Revisá tus brebajes antes de continuar.</p>
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
          <h2>Carrito vacío</h2>
        )}

        {total > 0 ? <p>Total: {total.toFixed(2)} $</p> : <></>}
      </div>
      <div>
        <button>
          Finalizar compra
          <button>Seguir explorando</button>
        </button>
      </div>
    </>
  );
}
