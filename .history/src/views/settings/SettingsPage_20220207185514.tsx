import React from "react";
import { createLogicalAnd } from "typescript";

const settingTags = [
  {
    id: 1,
    title: "Profile",
  },
  {
    id: 2,
    title: "Billing",
  },
  {
    id: 3,
    title: "Security",
  },
  {
    id: 4,
    title: "Notifications",
  },
];
let displayTag = "Profile";



export default function SettingsPage() {
  return (
    <div className="container-xl px-4 mt-4">
      <nav className="nav nav-borders">
        {settingTags.map((v: any, i: any) => (
          <>
            <div
              onClick={() => handleChangeTags(v.title)}
              className="nav-link  ms-0"
            >
              {v.title}
            </div>
          </>
        ))}
      </nav>
      <hr className="mt-0 mb-4" />
      {displayTag}
    </div>
  );
}
