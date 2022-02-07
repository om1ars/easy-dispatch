import { useSelector } from "react-redux";
import Test from "../components/Test";
import CreateUser from "../views/adminPanel/CreateUser/CreateUser";
import Dispatchers from "../views/adminPanel/Dispatchers/Dispatchers";
import Drivers from "../views/adminPanel/Drivers/Drivers";
import Charts from "../views/charts/Charts";
import Dashboard from "../views/dashboard/Dashboard";
import DataTable from "../views/dataTable/DataTable";
import Messages from "../views/messages/Messages";
import CreateOrder from "../views/orders/CreateOrder/CreateOrder";
import FirstStep from "../views/orders/CreateOrder/FirstStep/FirstStep";
import SecondStep from "../views/orders/CreateOrder/SecondStep/SecondStep";
import ThirdStep from "../views/orders/CreateOrder/ThirdStep/ThirdStep";
import DailyOrders from "../views/orders/DailyOrders/DailyOrders";
import OrdersTable from "../views/orders/OrdersTable/OrdersTable";
import ProfilePage from "../views/profile/ProfilePage";
import { useAppSelector } from "./hooks";


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
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  { path: "/messages", name: "Messages", component: Messages },
  {
    path: "/orders/create-order?steps=FirstStep",
    name: "First step",
    component: FirstStep,
  },
  {
    path: "/orders/create-order?steps=SecondStep",
    name: "Second step",
    component: SecondStep,
  },
  {
    path: "/orders/create-order?steps=ThirdStep",
    name: "Third step",
    component: ThirdStep,
  },
  { path: "/data", name: "Data", component: DataTable, exact: true },
  { path: "/data/data-table", name: "Data", component: DataTable, exact: true },
  { path: "/charts", name: "Charts", component: Charts },
];

export default routes;
