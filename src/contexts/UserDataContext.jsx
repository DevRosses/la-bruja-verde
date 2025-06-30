import React, { createContext, useContext, useState, useEffect } from "react";

const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  // Persistir en localStorage para demo, en real sería backend
  const [favorites, setFavorites] = useState(() => {
    const fav = localStorage.getItem("favorites");
    return fav ? JSON.parse(fav) : [];
  });
  const [historial, setHistorial] = useState(() => {
    const hist = localStorage.getItem("historial");
    return hist ? JSON.parse(hist) : [];
  });
  const [notificaciones, setNotificaciones] = useState(() => {
    const notif = localStorage.getItem("notificaciones");
    return notif ? JSON.parse(notif) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("historial", JSON.stringify(historial));
  }, [historial]);
  useEffect(() => {
    localStorage.setItem("notificaciones", JSON.stringify(notificaciones));
  }, [notificaciones]);

  // Favoritos
  const toggleFavorite = (producto) => {
    setFavorites((prev) =>
      prev.some((p) => p.id === producto.id)
        ? prev.filter((p) => p.id !== producto.id)
        : [...prev, producto]
    );
  };
  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  // Historial
  const addToHistorial = (producto) => {
    setHistorial((prev) => [{ ...producto, fecha: new Date().toISOString().slice(0, 10) }, ...prev]);
  };

  // Notificaciones
  const addNotificacion = (mensaje) => {
    setNotificaciones((prev) => [{ id: Date.now(), mensaje }, ...prev]);
  };
  const removeNotificacion = (id) => {
    setNotificaciones((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <UserDataContext.Provider
      value={{ favorites, toggleFavorite, removeFavorite, historial, addToHistorial, notificaciones, addNotificacion, removeNotificacion }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

export const useUserData = () => useContext(UserDataContext);
