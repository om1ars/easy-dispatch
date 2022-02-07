import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FirstStep from "./FirstStep/FirstStep";

export default function CreateOrder() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CButton onClick={() => setVisible(!visible)}>
        I want to create
      </CButton>
      <CModal
        alignment="center"
        scrollable
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <FirstStep />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}
