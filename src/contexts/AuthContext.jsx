import React, { createContext, useState, useContext, useEffect } from "react";
// Crear el contexto de autenticación
export const AuthContext = createContext(); 
// Proveedor de contexto de autenticación
// Este componente envolverá a toda la aplicación para proporcionar el contexto de autenticación
export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const username = token.replace("fake-token-", ""); // Simula decodificar token
      setUser(username);
    }
  }, []);

  const login = (username) => {
    // Simulando la creación de un token (en una app real, esto sería generado por un servidor)
    const token = `fake-token-${username}`;
    localStorage.setItem("authToken", token);
    setUser(username);
  };
  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);
