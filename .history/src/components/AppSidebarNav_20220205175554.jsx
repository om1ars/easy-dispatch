import { CBadge } from "@coreui/react";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function AppSidebarNav({ items }: any) {
  const location = useLocation();

  const navLink = (name: any, icon: any, badge: any) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item, index) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
            activeClassName: "active",
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };

  const navGroup = (item, index) => {
    const { component, name, icon, to, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index)
        )}
      </Component>
    );
  };

  return (
    <>
      <React.Fragment>
        <div className="sidebar_container-main-item">
          {items &&
            items.map((item: any, index: any) =>
              item.items ? navGroup(item, index) : navItem(item, index)
            )}
        </div>
      </React.Fragment>
    </>
  );
}
