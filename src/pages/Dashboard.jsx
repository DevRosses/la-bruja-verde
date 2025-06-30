import styles from "../assets/styles/pages/Dashboard.module.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useUserData } from "../contexts/UserDataContext";
import { useState } from "react";

function Dashboard() {
  const { user } = useAuthContext();
  const {
    historial,
    favorites, // <-- nombre correcto
    notificaciones,
    removeFavorite,
    removeNotificacion,
  } = useUserData();

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_welcome}>
        ¡Bienvenido, <b>{user}</b>!
      </div>
      <div className={styles.dashboard_quicklinks}>
        <Link to="/la-bruja-verde/carrito" className={styles.dashboard_card}>
          🛒<br />Mi Carrito
        </Link>
        <Link to="/la-bruja-verde/productos" className={styles.dashboard_card}>
          🧴<br />Explorar Productos
        </Link>
        <Link to="/la-bruja-verde/ritual" className={styles.dashboard_card}>
          🔮<br />Rituales
        </Link>
        <Link to="/la-bruja-verde/contacto" className={styles.dashboard_card}>
          📞<br />Contacto
        </Link>
      </div>
      <div className={styles.dashboard_section}>
        <h3>Historial de compras</h3>
        {historial.length === 0 ? (
          <p>No tienes compras recientes.</p>
        ) : (
          <ul>
            {historial.map((item) => (
              <li key={item.id || item.producto + item.fecha}>
                {item.producto} <span style={{opacity:0.7, fontSize:'0.95em'}}>({item.fecha})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.dashboard_section}>
        <h3>Favoritos</h3>
        {favorites.length === 0 ? (
          <p>No tienes productos favoritos.</p>
        ) : (
          <ul>
            {favorites.map((item) => (
              <li key={item.id} style={{display:'flex',alignItems:'center',gap:'8px'}}>
                {item.producto || item.nombre}
                <button
                  style={{marginLeft:4,background:'none',border:'none',color:'var(--color-primary)',cursor:'pointer',fontSize:'1.1em'}}
                  title="Eliminar de favoritos"
                  onClick={() => removeFavorite(item.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.dashboard_section}>
        <h3>Notificaciones</h3>
        {notificaciones.length === 0 ? (
          <p>No tienes notificaciones nuevas.</p>
        ) : (
          <ul>
            {notificaciones.map((item) => (
              <li key={item.id} style={{display:'flex',alignItems:'center',gap:'8px'}}>
                {item.mensaje}
                <button
                  style={{marginLeft:4,background:'none',border:'none',color:'var(--color-primary)',cursor:'pointer',fontSize:'1.1em'}}
                  title="Eliminar notificación"
                  onClick={() => removeNotificacion(item.id)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;