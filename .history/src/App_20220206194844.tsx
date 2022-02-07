import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./helpers/hooks";
import { getPostsFetch } from "./modules/test/test.slice";

const DefaultLayout = React.lazy(() => import("./layouts/DefaultLayout"));
const Login = React.lazy(() => import("./pages/Login/index"));
const Page404 = React.lazy(() => import("./pages/Page404/index"));

function App() {
  const dis = useAppDispatch();
  const test = useAppSelector((state) => state.test.posts);

  console.log(test);

  useEffect(() => {
    dis(getPosts());
  }, [dis]);
  return (
    <div className="App">
      <React.Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route path="/login" render={(props) => <Login />} />
          <Route path="/404" component={Page404} />
          <Route path="/" render={(props) => <DefaultLayout />} />
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
