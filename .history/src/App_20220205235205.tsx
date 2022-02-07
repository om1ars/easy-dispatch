import React from "react";
import { Route, Switch } from "react-router-dom";
import FirstStep from "./views/orders/CreateOrder/FirstStep/FirstStep";

const DefaultLayout = React.lazy(() => import("./layouts/DefaultLayout"));
const Login = React.lazy(() => import("./pages/Login/index"));
const Page404 = React.lazy(() => import("./pages/Page404/index"));

function App() {
  return (
    <div className="App">
     <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3 " style={{ padding: 15 }}>
          <AppContent />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
