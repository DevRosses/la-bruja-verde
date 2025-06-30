import styles from "../assets/styles/components/Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import { useAuthContext } from "../contexts/AuthContext";

function Header() {
  const { productosCarrito } = useContext(CarritoContext);
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/la-bruja-verde/"); // Redirige al home
  };

  return (
    <header className={styles.Header}>
      <div className={styles.Header_wrapper}>
        <div className={styles.Header_contenido}>
          <h1 className={styles.Header_titulo}>La Bruja Verde</h1>
        </div>

        <div className={styles.headerMenu}>
          {user ? (
            <div className={styles.userInfo}>
              <Icon icon="mdi:account" width="24" className={styles.userIcon} />
              <span className={styles.nombreUsuario}>Hola, {user}</span>
              <button
                className={styles.logoutButton}
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <Icon icon="mdi:logout" width="20" />
              </button>
            </div>
          ) : (
            <button className={styles.Header_accion}>
              <Link to="/la-bruja-verde/login">
                <Icon icon="mdi:account-lock-outline" width="24" />
              </Link>
            </button>
          )}

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
