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

  console.log(singlePost);

  useEffect(() => {
    dis(singlePostFetch());
  }, []);

  const posts = useAppSelector((s) => s.test.tests);
  return (
    <div>
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          {posts
            .filter((f, i) => f.id == id)
            .map((v, i) => (
              <>{v.id}</>
            ))}
        </CContainer>
      </div>
    </div>
  );
}
