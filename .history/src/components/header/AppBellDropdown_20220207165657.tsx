import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilList,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import avatar8 from "./../../assets/images/avatars/8.jpg";
import { Link } from "react-router-dom";

const AppBellDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CNavItem>
            <CNavLink>
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Account
        </CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilBell} className="me-2" />
          Updates
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          <Link to="/messages">Messages</Link>
        </CDropdownItem>

        <CDropdownHeader className="bg-light fw-semibold py-2">
          Settings
        </CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          <Link to="/profile">Profile</Link>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon icon={cilLockLocked} className="me-2" />
          Watch Lock
        </CDropdownItem>

        <CDropdownDivider />
        <CDropdownItem>Lock Account</CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppBellDropdown;
