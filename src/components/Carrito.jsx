import "../assets/styles/components/Carrito.module.css";
import Card from "./CarritoCard";

export default function Carrito({
  productos,
  agregarProducto,
  quitarProducto,
}) {
  return (
    <div className="carrito-container">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Card
            key={producto.id}
            producto={producto}
            agregarProducto={() => agregarProducto(producto)}
            quitarProducto={() => quitarProducto(producto)}
          />
        ))
      ) : (
        <p>Carrito vacío</p>
      )}
    </div>
  );
}
