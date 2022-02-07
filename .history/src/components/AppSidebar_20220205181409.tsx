import CIcon from "@coreui/icons-react";
import { CSidebar, CSidebarBrand, CSidebarNav } from "@coreui/react";
import SimpleBar from "simplebar-react";
import { useAppDispatch, useAppSelector } from "../helpers/hooks";
import AppSidebarNav from "./AppSidebarNav";
import { sygnet } from "../assets/brand/sygnet";
import navigation from "../helpers/navs";

export default function AppSidebar() {
  const dispatch = useAppDispatch();
  const sidebarShow = useAppSelector((state) => state.openSidebar.openSidebar);

  
  return (
    <div>
      <CSidebar
        position="fixed"
        visible={sidebarShow}
        className="sidebar_container-main"
        style={{ backgroundColor: "#2F3478" }}
        onVisibleChange={(visible) => {
          dispatch({ type: "set", sidebarShow: !sidebarShow });
        }}
      >
        <CSidebarBrand className="d-none d-md-flex">
          <img
            className="sidebar-brand-full"
            src="https://www.seekpng.com/png/detail/83-835228_fscheck-by-kurt-random-logo-png.png"
            style={{ height: "35px", objectFit: "contain" }}

            alt='logo'
          />
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={navigation} />
          </SimpleBar>
        </CSidebarNav>
      </CSidebar>
    </div>
  );
}
