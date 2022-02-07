import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";
import { sygnet } from "../assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../helpers/navs";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.openSidebar.sidebarShow);

  console.log(sidebarShow);

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
      className="sidebar_container-main"
      style={{ backgroundColor: "#2F3478" }}
      onVisibleChange={(visible) => {
        changeState({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img
          className="sidebar-brand-full"
          src="https://www.seekpng.com/png/detail/83-835228_fscheck-by-kurt-random-logo-png.png"
          style={{ height: "35px", objectFit: "contain" }}
        />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
