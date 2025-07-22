import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import OrderList from "../pages/OrderList";

const RouterSwitcher = () => {
  return (
    <Routes>
      {/* Redirect root (/) to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      {/* Other pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/order-list" element={<OrderList />} />
    </Routes>
  );
};

export default RouterSwitcher;
