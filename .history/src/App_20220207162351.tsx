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
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3 " style={{ padding: 15 }}>
            <React.Suspense fallback={<h1>Loading</h1>}>
              <Switch>
                <Route exact path="/" component={DefaultLayout} />
                <Route path="/data/data-table/:id" component={Test} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/login" component={Login} />
                <Route path="/404" component={Page404} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
