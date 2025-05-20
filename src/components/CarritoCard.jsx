import Button from "../components/ui/Button";

import style from "../assets/styles/components/CarritoCard.module.css";

export default function CarritoCard({
  producto,
  cantidades,
  restarContador,
  sumarContador,
}) {
  return (
    <div className={style.carritoCard}>
      <h3 className={style.carritoCard_title}>{producto.nombre}</h3>
      <div className="carritoCard_contenedorDescripcion">
        <p className={style.carritoCard_descripcion}> {producto.descripcion}</p>
      </div>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className={style.carritoCard_image}
      />
      <div>
        <span className={style.carritoCard_cantidad}>
          {cantidades[producto.id] || 1}
        </span>
      </div>
      <div>
        <p className={style.carritoCard_etiqueta}>Precio Unitario</p>
        <span className={style.carritoCard_valor}>
          ${Number(producto.precio).toFixed(2)}
        </span>
      </div>

      <div>
        <p className={style.carritoCard_etiqueta}>Precio total</p>
        <span className={style.carritoCard_valor}>
  ${(cantidades[producto.id] * Number(producto.precio)).toFixed(2)}
</span>

      </div>

      <div className="carritoCard_contenedorButton">
        <Button
          className={style.carritoCard_buyButton}
          text="+"
          onClick={sumarContador}
        />

        <Button
          className={style.carritoCard_buyButton}
          text="-"
          onClick={restarContador}
        />
      </div>
    </div>
  );
}
