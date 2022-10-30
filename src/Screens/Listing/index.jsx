import * as React from "react";
import "./listing.css";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Soap1", "Service 1", "Oper 1", "Param 1", "Type 1"),
  createData("Soap2", "Service 2", "Oper 2", "Param 2", "Type 2"),
  createData("Soap3", "Service 3", "Oper 3", "Param 3", "Type 3"),
  createData("Soap4", "Service 4", "Oper 4", "Param 4", "Type 4"),
  createData("Soap5", "Service 5", "Oper 5", "Param 5", "Type 5"),
];

export default function Lisiting() {
  return (
    <>
      <div>
        <div className="container">
          <h3>Service Listing Page</h3>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Protocol Type</TableCell>
                  <TableCell align="right">Service Name</TableCell>
                  <TableCell align="right">Operation Name</TableCell>
                  <TableCell align="right">Parameter Name</TableCell>
                  <TableCell align="right">Parameter Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="buttons">
          <Link to={"/addService"}>
            <Button variant="outlined" color="success">
              Add Service
            </Button>
          </Link>
          <Link to={"/editService"}>
            <Button variant="outlined" color="secondary">
              Edit
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
