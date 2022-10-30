import * as React from "react";
import "./listing.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const baseURL = "https://localhost:44386/api/nikita_Connection_Service";
export default function Lisiting() {
  const navigate = useNavigate();
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
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
                {post.map((row) => (
                  <TableRow
                    onClick={() => navigate(`/editService?${row?.id}`)}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" key={row?.id}>
                      {row.protocol_type_id === 1 ? "Soap" : "Rest"}
                    </TableCell>
                    <TableCell align="right">{row.service_name}</TableCell>
                    <TableCell align="right">{row.operation_name}</TableCell>
                    <TableCell align="right">{row.parameter_name}</TableCell>
                    <TableCell align="right">
                      {row.parameter_type_id === 1
                        ? "int"
                        : row.parameter_type_id === 2
                        ? "String"
                        : "Boolean"}
                    </TableCell>
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
