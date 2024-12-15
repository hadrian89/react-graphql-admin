// // https://www.ag-grid.com/react-data-grid/getting-started/
import React, { StrictMode, useMemo, useState } from "react";
import { List } from 'react-virtualized';
import Nav from 'react-bootstrap/Nav';
import { AgGridReact } from "ag-grid-react";
import {
  themeQuartz,
} from "ag-grid-community";

const rowSelection = {
  mode: "multiRow",
  headerCheckbox: false,
};

const myTheme = themeQuartz.withParams({
  /* Low spacing = very compact */
  spacing: 6.6,
  /* Changes the color of the grid text */
  foregroundColor: 'rgb(14, 68, 145)',
  /* Changes the color of the grid background */
  backgroundColor: 'rgb(255 255 255)',
  /* Changes the header color of the top row */
  headerBackgroundColor: 'rgb(228, 237, 250)',
  /* Changes the hover color of the row*/
  rowHoverColor: 'rgb(216, 226, 255)',
});

const GridExample = () => {
  const cdata = new Array(100).fill({
    make: "Tesla",
    model: "Model Y",
    price: Math.floor(Math.random(5) + 100),
    electric: Boolean(Math.random(1)),
    month: "June",
  })
  console.log(JSON.stringify(cdata), 'cdata')
  const [rowData, setRowData] = useState(cdata);

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "make",
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: [
          "Tesla",
          "Ford",
          "Toyota",
          "Mercedes",
          "Fiat",
          "Nissan",
          "Vauxhall",
          "Volvo",
          "Jaguar",
        ],
      },
    },
    { field: "model" },
    { field: "price", filter: "agNumberColumnFilter" },
    { field: "electric" },
    {
      field: "month",
      comparator: (valueA, valueB) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const idxA = months.indexOf(valueA);
        const idxB = months.indexOf(valueB);
        return idxA - idxB;
      },
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);

  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <Nav variant="pills" className="justify-content-end" defaultActiveKey="/home" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Add Item</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Download</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Refresh</Nav.Link>
        </Nav.Item>
      </Nav>

      <div style={{ height: 500 }}>
        <AgGridReact
          theme={myTheme}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection={rowSelection}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10, 25, 50]}
        />
      </div>
    </>

  );
};
export default GridExample