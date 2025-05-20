import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

function NavMenu(productos) {
  return (
    <>
      <nav>
        <ul>
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
              Carrito{" "}
              <span> {productos.length > 0 ? productos.length : ""} </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
