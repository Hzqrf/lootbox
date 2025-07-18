import { AppShell, NavLink, Text, Image, ScrollArea } from "@mantine/core";
import { useNavigate, useLocation } from "react-router-dom";
import {
  TbLayoutDashboard,
  TbLayoutDashboardFilled,
  TbPackage,
  TbShoppingCart,
  TbShoppingCartFilled,
  TbGift,
  TbDeviceGamepad2,
  TbShieldCheck,
  TbCash,
  TbArrowsLeftRight,
  TbBriefcase,
  TbUser,
  TbHistory,
  TbCloud,
  TbRefresh,
} from "react-icons/tb";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppShell.Navbar
      p={"md"}
      style={{ gap: "10px" }}
      classNames={{ navbar: "" }}
    >
      <AppShell.Section>
        <img src="../assets/logo.png" />
      </AppShell.Section>

      {/* {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))} */}
      <ScrollArea type="never" scrollbars="y">
        <Text
          size="xs"
          c="dimmed"
          ta={"left"}
          pl={10}
          fw={500}
          // style={{
          //   textAlign: "center",
          //   width: "100%",
          // }}
        >
          ADMIN
        </Text>
        <NavLink
          label="Dashboard"
          onClick={() => navigate("/dashboard")}
          style={{ margin: "2px" }}
          active={location.pathname === "/dashboard"}
          leftSection={
            location.pathname === "/dashboard" ? (
              <TbLayoutDashboardFilled size={16} />
            ) : (
              <TbLayoutDashboard size={16} />
            )
          }
        />
        <NavLink
          label="Products"
          style={{ margin: "5px" }}
          childrenOffset={16}
          leftSection={<TbPackage />}
        >
          <NavLink
            label="Product List"
            onClick={() => navigate("/products/product-list")}
            style={{ margin: "2px" }}
            active={location.pathname === "/products/product-list"}
          />
          <NavLink
            label="Product Items"
            onClick={() => navigate("/products/product-items")}
            style={{ margin: "2px" }}
            active={location.pathname === "/products/product-items"}
          />
        </NavLink>
        <NavLink
          label="Order List"
          onClick={() => navigate("/order-list")}
          style={{ margin: "5px" }}
          active={location.pathname === "/order-list"}
          leftSection={
            location.pathname === "/order-list" ? (
              <TbShoppingCartFilled size={16} />
            ) : (
              <TbShoppingCart size={16} />
            )
          }
        />
        <Text
          size="xs"
          c="dimmed"
          ta={"left"}
          pl={10}
          fw={500}
          // style={{
          //   textAlign: "center",
          //   width: "100%",
          // }}
        >
          CAMPAIGN
        </Text>
        <NavLink
          label="Campaign"
          style={{ margin: "5px" }}
          childrenOffset={16}
          leftSection={<TbGift />}
        >
          <NavLink
            label="Referrals"
            onClick={() => navigate("/campaign/referrals")}
            style={{ margin: "2px" }}
            active={location.pathname === "/campaign/referrals"}
          />
          <NavLink
            label="Giveaways"
            onClick={() => navigate("/campaign/giveaways")}
            style={{ margin: "2px" }}
            active={location.pathname === "/campaign/giveaways"}
          />
        </NavLink>
        <Text
          size="xs"
          c="dimmed"
          ta={"left"}
          pl={10}
          fw={500}
          // style={{
          //   textAlign: "center",
          //   width: "100%",
          // }}
        >
          COMPLIANCE
        </Text>
        <NavLink
          label="Application"
          onClick={() => navigate("/application")}
          style={{ margin: "2px" }}
          active={location.pathname === "/application"}
          leftSection={<TbDeviceGamepad2 />}
        />
        <NavLink
          label="KYC"
          onClick={() => navigate("/kyc")}
          style={{ margin: "2px" }}
          active={location.pathname === "/kyc"}
          leftSection={<TbShieldCheck />}
        />
        <NavLink
          label="Payment Details"
          onClick={() => navigate("/payment-details")}
          style={{ margin: "2px" }}
          active={location.pathname === "/payment-details"}
          leftSection={<TbCash />}
        />
        <NavLink
          label="Withdrawal List"
          onClick={() => navigate("/withdrawal-list")}
          style={{ margin: "2px" }}
          active={location.pathname === "/withdrawal-list"}
          leftSection={<TbArrowsLeftRight />}
        />
        <NavLink
          label="Affiliates"
          onClick={() => navigate("/affiliates")}
          style={{ margin: "2px" }}
          active={location.pathname === "/affiliates"}
          leftSection={<TbBriefcase />}
        />
        <NavLink
          label="User List"
          onClick={() => navigate("/user-list")}
          style={{ margin: "2px" }}
          active={location.pathname === "/user-list"}
          leftSection={<TbUser />}
        />
        <Text
          size="xs"
          c="dimmed"
          ta={"left"}
          pl={10}
          fw={500}
          // style={{
          //   textAlign: "center",
          //   width: "100%",
          // }}
        >
          SERVICES
        </Text>
        <NavLink
          label="Price History"
          onClick={() => navigate("/price-history")}
          style={{ margin: "2px" }}
          active={location.pathname === "/price-history"}
          leftSection={<TbHistory />}
        />
        <NavLink
          label="Redis Queue"
          onClick={() => navigate("/redis-queue")}
          style={{ margin: "2px" }}
          active={location.pathname === "/redis-queue"}
          leftSection={<TbCloud />}
        />
        <NavLink
          label="Product Sync"
          style={{ margin: "5px" }}
          childrenOffset={16}
          leftSection={<TbRefresh />}
        >
          <NavLink
            label="Check Product Sync"
            onClick={() => navigate("/product-sync/check-product-sync")}
            style={{ margin: "2px" }}
            active={location.pathname === "/product-sync/check-product-sync"}
          />
          <NavLink
            label="Check Price Discrepancy"
            onClick={() => navigate("/product-sync/check-price")}
            style={{ margin: "2px" }}
            active={location.pathname === "/product-sync/check-price"}
          />
        </NavLink>
        <NavLink
          label="Audit Log"
          onClick={() => navigate("/audit-log")}
          style={{ margin: "2px" }}
          active={location.pathname === "/audit-log"}
          leftSection={<TbHistory />}
        />
      </ScrollArea>
    </AppShell.Navbar>
  );
};

export default LeftSidebar;
