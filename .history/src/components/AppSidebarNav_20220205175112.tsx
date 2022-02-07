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
            <CBadge color={badge.color} className=''>
                {badge.text}
            </CBadge>
        )}
      </>
    );
  };
  return <div></div>;
}
