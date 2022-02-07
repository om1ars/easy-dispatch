import React from 'react'
import CreateUser from '../views/adminPanel/CreateUser/CreateUser'
import Dispatchers from '../views/adminPanel/Dispatchers/Dispatchers'
import Drivers from '../views/adminPanel/Drivers/Drivers'
import Charts from '../views/charts/Charts'
import Dashboard from '../views/dashboard/Dashboard'
import DailyOrders from '../views/orders/DailyOrders/DailyOrders'
import OrdersTable from '../views/orders/OrdersTable/OrdersTable'

// const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))
// const Drivers = React.lazy(() => import('../vie/ws/adminPanel/Drivers/Drivers'))
// const Dispatchers = React.lazy(() => import('../views/adminPanel/Dispatchers/Dispatchers'))
// const CreateUser = React.lazy(() => import('../views/adminPanel/CreateUser/CreateUser'))

// Base
// const DailyOrders = React.lazy(() => import('../views/orders/DailyOrders/DailyOrders'))
// const OrdersTable = React.lazy(() => import('../views/orders/OrdersTable/OrdersTable'))

// Buttons
// const DataTable = React.lazy(() => import('../views/dataTable/DataTable'))


// const Charts = React.lazy(() => import('../views/charts/Charts'))




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin', name: 'Theme', component: Drivers, exact: true },
  { path: '/admin/drivers', name: 'Drivers', component: Drivers },
  { path: '/admin/dispatchers', name: 'Dispatchers', component: Dispatchers },
  { path: '/admin/create-user', name: 'CreateUser', component: CreateUser },
  { path: '/orders/daily-orders', name: 'DailyOrders', component: DailyOrders },
  { path: '/orders/orders-table', name: 'OrdersTable', component: OrdersTable },
  { path: '/data', name: 'Buttons', component: DataTable, exact: true },
  { path: '/data/data-table', name: 'Buttons', component: DataTable },
  { path: '/charts', name: 'Charts', component: Charts },
]

export default routes
