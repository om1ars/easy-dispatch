import { CButton } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CreateOrder() {
  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <CButton>
        <Link to="/order/create-order?steps=FirstStep">
          I want to make order
        </Link>
      </CButton>
    </div>
  );
}
