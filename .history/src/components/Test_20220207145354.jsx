import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { singlePostFetch } from "../modules/test/single.slice";

export default function Test() {
  const { id } = useParams();
  const dis = useDispatch();

  const singlePost = useSelector((s) => s.singleTest.singlePosts);
  const laoding = useSelector((s) => s.singleTest.loading);

  console.log(singlePost);

  useEffect(() => {
    dis(singlePostFetch(id));
  }, []);

  const posts = useAppSelector((s) => s.test.tests);
  return (
    <div>
     {}
    </div>
  );
}
