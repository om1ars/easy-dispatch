import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useAppSelector } from "../helpers/hooks";

export default function Test() {
  const { id } = useParams();

  const posts = useAppSelector((s) => s.test.tests);
  return (
    <div>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
         {posts.filter((f, i) => f.id == )}
        </CContainer>
      </div>
    </div>
  );
}
