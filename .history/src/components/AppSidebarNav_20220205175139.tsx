import { CBadge } from "@coreui/react";
import React from "react";
import { useLocation } from "react-router-dom";

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


  const navItem = (item:any, index) => {
    const { component, name, badge, icon, ...rest } = item
    const Component = component
    return (
      <Component
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
            activeClassName: 'active',
          })}
        key={index}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    )
  }

  return <div></div>;
}
