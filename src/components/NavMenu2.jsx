import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import styles from "../assets/styles/components/NavMenu.module.css";
import { useState } from "react";

function NavMenu2() {
  const navBar = [
    { to: "/la-bruja-verde/", icon: "hugeicons:castle-01" },
    {
      to: "/la-bruja-verde/conocenos",
      icon: "fluent:planet-32-regular",
    },
    {
      to: "/la-bruja-verde/ritual",
      icon: "fluent-emoji-high-contrast:crystal-ball",
    },
    { to: "/la-bruja-verde/productos", icon: "fluent:wand-24-regular" },
    { to: "/la-bruja-verde/contacto", icon: "ph:phone-call" },
  ];

  const [activo, setActivo] = useState(null);

  const handleClick = (index) => {
    setActivo(index);
  };

  return (
    <>
      <nav className={styles.NavMenu}>
        <ul className={styles.NavMenu_lista}>
          {navBar.map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              <Link to={item.to}>
                <Icon
                  icon={item.icon}
                  width="24"
                  style={{
                    color:
                      activo === index
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default NavMenu2;
