import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { BrowserRouter as Router } from "react-router-dom";
import { CarritoProvider } from "./contexts/CarritoContext";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <CarritoProvider>
      <Router>
        <App />
      </Router>
    </CarritoProvider>
  </AuthProvider>
);
