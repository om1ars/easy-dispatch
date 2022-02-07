import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../helpers/routes";
import Test from "./Test";
import ProfilePage from "../views/profile/ProfilePage";
import Messages from "../views/messages/Messages";

const AppContent = () => {
  return (
    <CContainer lg >
      <Suspense fallback={<CSpinner color="primary" />}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => (
                    <>
                      <route.component {...props} />
                    </>
                  )}
                />
              )
            );
          })}
          <Route path="/data/data-table/singleDta?/:id" component={Test} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/messages" component={Messages} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);
