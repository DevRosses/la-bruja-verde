import styles from "../assets/styles/components/Header.module.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import Button from "./ui/Button";

function Header() {
  const { productosCarrito } = useContext(CarritoContext);

  return (
    <header className={styles.Header}>
      <div className={styles.Header_wrapper}>
        <div className={styles.Header_contenido}>
          <h1 className={styles.Header_titulo}>La Bruja Verde</h1>
        </div>

        <div className={styles.headerMenu}>
          <button className={styles.Header_accion}>
            <Link to="/la-bruja-verde/login">
              <Icon icon="mdi:account-lock-outline" width="24" />
            </Link>
          </button>
          <Link to="/la-bruja-verde/carrito">
            <Icon icon="icon-park-outline:shopping-bag" width="24" />
            <span className={styles.cantidadCarrito}>
              {productosCarrito.length > 0 ? productosCarrito.length : "0"}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
