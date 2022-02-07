import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from "@coreui/react";
import { CgMenuRight } from "react-icons/cg";
import CIcon from "@coreui/icons-react";
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from "@coreui/icons";

// import { AppBreadcrumb } from "./index";
import AppBreadcrumb from "./AppBreadcrumb";
import { useAppSelector } from "../helpers/hooks";
import AppHeaderDropdown from "./header/AppHeaderDropdown";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useAppSelector((state) => state.openSidebar.sidebarShow);

  return (
    <CHeader
      position="sticky"
      className="mb-4"
      style={{ alignItems: "center", color: "#5B4CE2" }}
    >
      <CContainer fluid style={{ alignItems: "center" }}>
        <CHeaderToggler
          style={{ alignItems: "center" }}
          className="ps-1"
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <CgMenuRight style={{ color: "#5B4CE2" }} />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none"></CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink
              style={{ color: "#5B4CE2" }}
              to="/dashboard"
              component={NavLink}
              // activeClassName="active"
            >
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink style={{ color: "#5B4CE2" }}>
              <Link to="/admin/drivers">Drivers</Link>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink style={{color: '#5B4CE2'}} >
              <Link to="/admin/dispatchers">Dispatchers</Link>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav style={{ alignItems: "center" }}>
          <CNavItem>
            <CDropdown>
              <CDropdownToggle
                style={{
                  color: "#5B4CE2",
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                }}
              >
                <CIcon icon={cilBell} size="lg" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                {/* <CDropdownItem>Another action</CDropdownItem> */}
                {/* <CDropdownItem>Something else here</CDropdownItem> */}
              </CDropdownMenu>
            </CDropdown>
          </CNavItem>
          <CNavItem>
            <CNavLink>
              <CIcon style={{ color: "#5B4CE2" }} icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink>
              <CIcon
                style={{ color: "#5B4CE2" }}
                icon={cilEnvelopeOpen}
                size="lg"
              />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
