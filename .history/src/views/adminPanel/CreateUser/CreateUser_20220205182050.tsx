import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from "@coreui/react";
import React, { useState } from "react";

export default function CreateUser() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  return (
    <>
      <CForm
        className="row g-3 needs-validation"
        // noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <h1>Personal info</h1>
        <hr />
        <br />
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
          <CFormInput
            type="text"
            id="validationCustom01"
            defaultValue="Mark"
            required
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
          <CFormInput
            type="text"
            id="validationCustom02"
            defaultValue="Otto"
            required
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
            <CFormInput
              type="text"
              id="validationCustomUsername"
              defaultValue=""
              aria-describedby="inputGroupPrepend"
              required
            />
            <CFormFeedback invalid>Please choose a username.</CFormFeedback>
          </CInputGroup>
        </CCol>
        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
          <CFormInput type="text" id="validationCustom03" required />
          <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
        </CCol>
        <CCol md={3}>
          <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
          <CFormSelect id="validationCustom04">
            <option disabled>Choose...</option>
            <option>...</option>
          </CFormSelect>
          <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
        </CCol>
        <CCol md={3}>
          <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
          <CFormInput type="text" id="validationCustom05" required />
          <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
        </CCol>

        <h1>Requirements</h1>
        <hr />
        <br />

        <CCol md={6}>
          <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
          <CFormInput type="text" id="validationCustom03" required />
          <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
        </CCol>
        <CCol md={3}>
          <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
          <CFormSelect id="validationCustom04">
            <option disabled>Choose...</option>
            <option>...</option>
          </CFormSelect>
          <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
        </CCol>

        <CCol xs={12}>
          <CFormCheck
            type="checkbox"
            id="invalidCheck"
            label="Agree to terms and conditions"
            required
          />
          <CFormFeedback invalid>
            You must agree before submitting.
          </CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Submit form
          </CButton>
        </CCol>
      </CForm>
    </>
  );
}
