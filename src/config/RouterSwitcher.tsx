import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/Dashboard";
import OrderList from "../pages/OrderList";
import Layout from "../components/Layout";
import ProductList from "../pages/ProductList";
import ProductItems from "../pages/ProductItem";
import CampaignReferral from "../pages/CampaignRef";

const RouterSwitcher = () => {
  return (
    <Routes>
      {/* Redirect root (/) to /login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      {/* Other pages */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path="/products/product-list" element={<ProductList />} />
        <Route path="/products/product-items" element={<ProductItems />} />
        <Route path="/campaign/referrals" element={<CampaignReferral />} />
      </Route>
    </Routes>
  );
};

export default RouterSwitcher;
