import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilChartPie,
  cilNotes,
  cilPencil,
  cilSpeedometer,
  cilStar,
  cilTruck,
  cilHeadphones,
  cilDataTransferDown,
  cilAirplay,
  cilLockLocked,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";
// import {BsTruck} from 'reaic'
const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Admin Panel",
  },
  {
    component: CNavItem,
    name: "List of drivers",
    to: "/admin/drivers",
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "List of dispatchers",
    to: "/admin/dispatchers",
    icon: <CIcon icon={cilHeadphones} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Create User",
    to: "/admin/create-user",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Components",
  },
  {
    component: CNavGroup,
    name: "Forms",
    icon: <CIcon icon={cilAirplay} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Alerts",
        to: "/notifications/alerts",
      },
      {
        component: CNavItem,
        name: "Badges",
        to: "/notifications/badges",
      },
      {
        component: CNavItem,
        name: "Modal",
        to: "/notifications/modals",
      },
      {
        component: CNavItem,
        name: "Toasts",
        to: "/notifications/toasts",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Orders",
    to: "/orders",
    icon: <CIcon icon={cilDataTransferDown} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Daily orders",
        to: "/orders/daily-orders",
      },
      {
        component: CNavItem,
        name: "Create order",
        to: "/orders/create-order",
      },
      {
        component: CNavItem,
        name: "Orders Table",
        to: "/orders/orders-table",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Data table",
    to: "/data",
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Data table",
        to: "/data/data-table",
      },
    ],
  },

  {
    component: CNavItem,
    name: "Daily Progrees check",
    to: "/charts",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "Authentication",
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Login",
        to: "/login",
      },
      {
        component: CNavItem,
        name: "Registration",
        to: "/registration",
      },
      {
        component: CNavItem,
        name: "Lockscreen",
        to: "/icons/brands",
      },
    ],
  },

  {
    component: CNavItem,
    name: "New features",
    to: "/widgets",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
 
  {
    component: CNavTitle,
    name: "easy Dispatch",
  },
];

export default _nav;
