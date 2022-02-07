import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../helpers/hooks";

export default function DataTable() {
  const posts = useAppSelector((state) => state.test.tests);
  return (
    <div>
      <CTable striped hover>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {posts.map((v, i) => (
            <>
                <CTableRow>
              <Link to={'/404'}>

                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableDataCell>Mark</CTableDataCell>
                  <CTableDataCell>Otto</CTableDataCell>
                  <CTableDataCell>@mdo</CTableDataCell>
                </CTableRow>
              </Link>
            </>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
}
