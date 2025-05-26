import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "../assets/styles/components/NavMenu.module.css";
/*import {
  Home,
  Users,
  PackageSearch,
  Phone,
  LogIn,
  ShoppingCart,
} from "lucide-react";*/

function NavMenu() {
  return (
    <>
      <nav className={styles.NavMenu}>
        <ul className={styles.NavMenu_lista}>
          <li>
            <Link to="/la-bruja-verde/">
              <Icon icon="hugeicons:castle-01" width="24" />
            </Link>
          </li>
          <li>
            <Link to="/la-bruja-verde/conocenos">
              <Icon icon="fluent-emoji-high-contrast:crystal-ball" width="24" />
            </Link>
          </li>
          <li>
            <Link to="/la-bruja-verde/ritual">
              <Icon icon="fluent-emoji-high-contrast:crystal-ball" width="24" />
            </Link>
          </li>
          <li>
            <Link to="/la-bruja-verde/productos">
              <Icon icon="fluent:wand-24-regular" width="24" />
            </Link>
          </li>

          <li>
            <Link to="/la-bruja-verde/contacto">
              <Icon icon="ph:phone-call" width="24" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
