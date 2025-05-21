import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import styles from "../assets/styles/components/NavMenu.module.css";

function NavMenu({ productos }) {
  return (
    <>
      <nav className={styles.NavMenu}>
        <ul className={styles.NavMenu_lista}>
          <li>
            <Link to="/">
              <FaBeer />
            </Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/carrito">
              Carrito
              {
                <span className={styles.NavMenu_cantidadCarrito}>
                  {" "}
                  {productos.length > 0 ? productos.length : "0"}{" "}
                </span>
              }
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
