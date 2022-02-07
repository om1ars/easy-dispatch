import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../../helpers/hooks";

export default function DataTable() {
  const posts = useAppSelector((state) => state.test.tests);
  return (
    <div>
      <CTable striped hover style={{backgroundColor: 'white'}}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Class</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
            <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {posts.slice(0, 30).map((v: any, i: any) => (
            <>
              <CTableRow>
                <CTableHeaderCell scope="row">{v.id}</CTableHeaderCell>
                <CTableDataCell>
                  <NavLink to={`/data/data-table/${v.id}`}>{v.title}</NavLink>
                </CTableDataCell>
                <CTableDataCell>Otto</CTableDataCell>
                <CTableDataCell>@mdo</CTableDataCell>
              </CTableRow>
            </>
          ))}
        </CTableBody>
      </CTable>
    </div>
  );
}
