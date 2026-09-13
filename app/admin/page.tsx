"use client";
import { useState } from "react";
import AdminLogin from "../components/admin/AdminLogin";
import AdminDashboard from "../components/admin/AdminDashboard";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn
    ? <AdminDashboard onLogout={() => setLoggedIn(false)} />
    : <AdminLogin onLogin={() => setLoggedIn(true)} />;
}
