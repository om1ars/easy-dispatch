import CreateUser from "../views/adminPanel/CreateUser/CreateUser";
import Dispatchers from "../views/adminPanel/Dispatchers/Dispatchers";
import Drivers from "../views/adminPanel/Drivers/Drivers";
import Charts from "../views/charts/Charts";
import Dashboard from "../views/dashboard/Dashboard";
import DataTable from "../views/dataTable/DataTable";
import CreateOrder from "../views/orders/CreateOrder/CreateOrder";
import FirstStep from "../views/orders/CreateOrder/FirstStep/FirstStep";
import DailyOrders from "../views/orders/DailyOrders/DailyOrders";
import OrdersTable from "../views/orders/OrdersTable/OrdersTable";

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/admin", name: "Admin", component: Drivers, exact: true },
  { path: "/admin/drivers", name: "Drivers", component: Drivers },
  { path: "/admin/dispatchers", name: "Dispatchers", component: Dispatchers },
  { path: "/admin/create-user", name: "CreateUser", component: CreateUser },
  { path: "/orders", name: "Orders", component: OrdersTable, exact: true },
  { path: "/orders/daily-orders", name: "DailyOrders", component: DailyOrders },
  { path: "/orders/orders-table", name: "OrdersTable", component: OrdersTable },
  { path: "/orders/create-order", name: "OrdersTable", component: CreateOrder },
  {
    path: "/orders/create-order?steps=FirstStep",
    name: "OrdersTable",
    component: FirstStep,
  },
  { path: "/data", name: "Data", component: DataTable, exact: true },
  { path: "/data/data-table", name: "Data", component: DataTable },
  { path: "/charts", name: "Charts", component: Charts },
];

export default routes;
