import React from "react";
import AppContent from "../components/AppContent";
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
// import AppSidebar from "../components/AppSidebar";

const DefaultLayout = () => {

  return (
    <div>
 <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3 " style={{ padding: 15 }}>
            <React.Suspense fallback={<h1>Loading</h1>}>
              <Switch>
                <Route path="/" component={DefaultLayout} />

                <Route path="/login" component={Login} />
                <Route path="/404" component={Page404} />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </div>    </div>
  );
};

export default DefaultLayout;
