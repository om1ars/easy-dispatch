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
        <div className="wrapper d-flex flex-column min-vh-100 " style={{backgroundColor: '#DDEEF0'}}>
          <AppHeader />
          <div className="body flex-grow-1 px-3 " style={{ padding: 15 }}>
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
