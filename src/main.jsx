import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { BrowserRouter as Router } from "react-router-dom";
import { CarritoProvider } from "./contexts/CarritoContext";
import { AuthProvider } from "./contexts/AuthContext";
import { UserDataProvider } from "./contexts/UserDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <UserDataProvider>
      <CarritoProvider>
        <Router>
          <App />
        </Router>
      </CarritoProvider>
    </UserDataProvider>
  </AuthProvider>
);
