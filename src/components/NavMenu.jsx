import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import styles from "../assets/styles/components/NavMenu.module.css";

function NavMenu({ productos }) {
  return (
    <>
      <nav className={styles.NavMenu}>
        <ul className={styles.NavMenu_lista}>
          <li>
            <Link to="/la-bruja-verde/">
              <FaBeer />
            </Link>
          </li>
          <li>
            <Link to="/la-bruja-verde/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/la-bruja-verde/productos">Productos</Link>
          </li>

          <li>
            <Link to="/la-bruja-verde/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/la-bruja-verde/login">Login</Link>
          </li>
          <li>
            <Link to="/la-bruja-verde/carrito">
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
