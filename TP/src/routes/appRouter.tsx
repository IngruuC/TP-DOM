import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import type { user } from "../types/user";

import { ProtectedRouter } from "./ProtectedRouter";
import { Login } from "../components/login";
import { DashboardPrincipal } from "../components/dashboardPrincipal";
import { DashboardAdmin } from "../components/dashboardAdmin";
import { Products } from "../components/products";
import { Home } from "../components/home";

export const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState<user | null>(null);

  const handleLogin = () => {
    const fakeUser: user = {
      id: 1,
      name: "Admin User",
      username: "admin",
      email: "admin@example.com",
      permissionLevel: ["admin"], 
    };
    setCurrentUser(fakeUser);
  };
  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          currentUser ? (
            <Navigate to="/dashboard-principal" />
          ) : (
            <Login onLogin={handleLogin} />
          )
        }
      />
      <Route
        path="/home"
        element={
          <ProtectedRouter isAllowed={!!currentUser} redirectTo="/login">
            <Home />
          </ProtectedRouter>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRouter isAllowed={!!currentUser && (currentUser.permissionLevel.includes("vendedor") || currentUser.permissionLevel.includes("admin"))} redirectTo="/login">
            <Products />
          </ProtectedRouter>
        }
      />
      <Route
        path="/dashboard-admin"
        element={
          <ProtectedRouter
            isAllowed={!!currentUser && currentUser.permissionLevel.includes("admin")}
            redirectTo="/dashboard-principal"
          >
            <DashboardAdmin />
          </ProtectedRouter>
        }
      />
      <Route
        path="/dashboard-principal"
        element={
          <ProtectedRouter isAllowed={!!currentUser} redirectTo="/login">
            <DashboardPrincipal user={currentUser} onLogout={handleLogout} />
          </ProtectedRouter>
        }
      />
    </Routes>
  );
};
