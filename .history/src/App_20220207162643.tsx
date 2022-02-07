import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import Test from "./components/Test";
import { useAppDispatch, useAppSelector } from "./helpers/hooks";
import DefaultLayout from "./layouts/DefaultLayout";
import { getPostsFetch } from "./modules/test/test.slice";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import ProfilePage from "./views/profile/ProfilePage";

function App() {
  const dis = useAppDispatch();

  useEffect(() => {
    dis(getPostsFetch());
  }, [dis]);
  return (
    <div className="App">
     <
    </div>
  );
}

export default App;
