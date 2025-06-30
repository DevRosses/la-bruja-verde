import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAuthContext } from "../contexts/AuthContext";
import styles from "../assets/styles/components/NavMenu.module.css";

function NavMenu2() {
  const { user } = useAuthContext();
  const location = useLocation();
  const navBar = [
    { to: "/la-bruja-verde/", icon: "hugeicons:castle-01" },
    { to: "/la-bruja-verde/conocenos", icon: "fluent:planet-32-regular" },
    {
      to: "/la-bruja-verde/ritual",
      icon: "fluent-emoji-high-contrast:crystal-ball",
    },
    { to: "/la-bruja-verde/productos", icon: "fluent:wand-24-regular" },
    { to: "/la-bruja-verde/contacto", icon: "ph:phone-call" },
  ];
  // Agrega Dashboard solo si el usuario está logueado
  if (user) {
    navBar.unshift({
      to: "/la-bruja-verde/dashboard",
      icon: "material-symbols:dashboard-outline",
      animate: true,
    });
  }

  return (
    <nav className={styles.NavMenu}>
      <ul className={styles.NavMenu_lista}>
        {navBar.map((item, index) => {
          const isActive = location.pathname === item.to;
          return (
            <li key={index} className={isActive ? styles.NavMenu_activo : ""}>
              <Link to={item.to}>
                <span className={styles.NavMenu_iconWrapper}>
                  <Icon
                    icon={item.icon}
                    width="28"
                    className={
                      (isActive ? styles.iconActive : styles.iconInactive) +
                      (item.animate ? " " + styles.dashboardIcon : "")
                    }
                  />
                  {isActive && <span className={styles.NavMenu_blur}></span>}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu2;
