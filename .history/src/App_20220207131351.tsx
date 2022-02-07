import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import AppSidebar from "./components/AppSidebar";
import { useAppDispatch, useAppSelector } from "./helpers/hooks";
import { getPostsFetch } from "./modules/test/test.slice";

const DefaultLayout = React.lazy(() => import("./layouts/DefaultLayout"));
const Login = React.lazy(() => import("./pages/Login/index"));
const Page404 = React.lazy(() => import("./pages/Page404/index"));

function App() {
  const dis = useAppDispatch();
  const test = useAppSelector((state) => state.test.tests);

  console.log(test);

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
                <Route path="/login" component={Login} />
                <Route path="/404" component={Page404} />
                <Route path="/" component={Def} />
                <Route path="/heyTest">
                  <Login />
                </Route>
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
