import React from "react";
import { useLocation } from "react-router-dom";

export default function AppSidebarNav({ items }: any) {
  const location = useLocation();

  const navLink = (name: any, icon: any, badge: any) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && badge}
      </>
    );
  };
  return <div></div>;
}
