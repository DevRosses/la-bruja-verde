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
          <Link to="/la-bruja-verde/" className={styles.Header_tituloLink}>
            <h1 className={styles.Header_titulo}>La Bruja Verde</h1>
          </Link>
        </div>
        <div className={styles.headerMenu}>
          {user ? (
            <div className={styles.userInfo}>
              <Icon icon="mdi:account" className={styles.userIcon} />
              <span className={styles.nombreUsuario}>
                Hola, <span className={styles.userName}>{user}</span>
              </span>
              <button
                className={styles.logoutButton}
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <Icon icon="mdi:logout" />
              </button>
            </div>
          ) : (
            <Link to="/la-bruja-verde/login" className={styles.Header_accion}>
              <Icon icon="mdi:account-lock-outline" />
            </Link>
          )}
          <Link to="/la-bruja-verde/carrito" className={styles.carritoLink}>
            <span className={styles.carritoIconWrapper}>
              <Icon icon="icon-park-outline:shopping-bag" />
              {productosCarrito.length > 0 && (
                <span className={styles.cantidadCarrito}>
                  {productosCarrito.length}
                </span>
              )}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
