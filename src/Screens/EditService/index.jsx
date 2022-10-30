import "../../App.css";
import React, { useEffect } from "react";
import { InputLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const baseURL = "https://localhost:44386/api/nikita_Connection_Service";

const EditService = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const query = window.location.href.split("?")[1];

  const [post, setPost] = React.useState(null);
  const [service, setService] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const arr = post?.filter((item) => item.id === query);
    setService(arr?.[0]);
  }, [post, query]);

  const deleteService = () => {
    axios
      .delete(`https://localhost:44386/api/nikita_Connection_Service/${query}`)
      .then((res) => {
        if (res.status === 200) {
          DeleteAlert();
          setTimeout(() => navigate("/"), 1500);
        }
      })
      .catch((err) => console.log(err, "error here"));
  };

  const notify = () =>
    toast("Service Created Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });

  const DeleteAlert = () =>
    toast("Service Deleted Successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  return (
    <div className="container">
      <h4>Service</h4>
      <div className="header">
        <p> - Connection Service</p>
      </div>
      <div className="inputSection">
        <div className="leftInput">
          <div className="row">
            <InputLabel className="label">
              <span className="required">*</span>Protocol Type
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel> Select</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Select"
                value={service?.protocol_type_id === 1 ? "Soap" : "Rest"}
                onChange={(e) => {
                  console.log(e);
                }}
              >
                <MenuItem value={1}>Soap</MenuItem>
                <MenuItem value={2}>Rest</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="row">
            <InputLabel className="label">
              {" "}
              <span className="required">*</span>Service Name
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <TextField
                id="outlined-basic"
                label="Enter Service Name"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className="row">
            <InputLabel className="label">Advance Tracking</InputLabel>
            <FormControl sx={{ m: 1 }} size="small">
              <Checkbox {...label} defaultChecked />
            </FormControl>
          </div>
        </div>
        <div className="rightInput">
          <div className="textArea">
            <InputLabel className="serviceDescription ">
              Service Description
            </InputLabel>
            <FormControl sx={{ minWidth: 500 }}>
              <TextField
                id="filled-textarea"
                label="Enter Service Description"
                placeholder="Service Description"
                multiline
                rows={5}
                variant="outlined"
              />
            </FormControl>
          </div>
        </div>
      </div>
      <hr />
      <div className="greyBox"></div>
      <div className="header">
        <p> - Operation</p>
      </div>
      <div className="inputSection">
        <div className="leftInput">
          <div className="row">
            <InputLabel className="label">
              {" "}
              <span className="required">*</span>Operation
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <TextField
                id="outlined-basic"
                label="Enter Operation Name"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className="row">
            <InputLabel className="label">Is List</InputLabel>
            <FormControl sx={{ m: 1 }} size="small">
              <Checkbox {...label} />
            </FormControl>
          </div>
          <div className="row">
            <InputLabel className="label">
              {" "}
              <span className="required">*</span>Protocol Type
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel> Select</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Select"
              >
                <MenuItem value={1}>Get</MenuItem>
                <MenuItem value={2}>Delete</MenuItem>
                <MenuItem value={3}>Put</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="middleInput">
          <div className="row">
            <InputLabel className="label">
              {" "}
              <span className="required">*</span>Return Type
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel> -- Select --</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Select"
              >
                <MenuItem value={1}>Int</MenuItem>
                <MenuItem value={2}>String</MenuItem>
                <MenuItem value={3}>Boolean</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="row">
            <InputLabel className="label">Validate Data</InputLabel>
            <FormControl sx={{ m: 1 }} size="small">
              <Checkbox {...label} />
            </FormControl>
          </div>
          <div className="row">
            <InputLabel className="label">Override Name</InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel> -- Select --</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Select"
                disabled
              >
                <MenuItem value={1}>Override 1</MenuItem>
                <MenuItem value={2}>Override 2</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="lastSection">
          <div className="row">
            <InputLabel className="label">Is Nullable</InputLabel>
            <FormControl sx={{ m: 1 }} size="small">
              <Checkbox {...label} />
            </FormControl>
          </div>
        </div>
      </div>
      <hr />
      <div className="inputSection">
        <div className="leftInput">
          <div className="row">
            <InputLabel className="label">
              {" "}
              <span className="required">*</span>Parameter
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <TextField
                id="outlined-basic"
                label="Enter Parameter Name"
                variant="outlined"
                size="small"
              />
            </FormControl>
          </div>
          <div className="row">
            <InputLabel className="label">Is List</InputLabel>
            <FormControl sx={{ m: 1 }} size="small">
              <Checkbox {...label} />
            </FormControl>
          </div>
        </div>
        <div className="middleInput">
          <div className="row">
            <InputLabel className="label">
              {" "}
              <span className="required">*</span> Type
            </InputLabel>
            <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
              <InputLabel> -- Select --</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Select"
              >
                <MenuItem value={1}>Int</MenuItem>
                <MenuItem value={2}>String</MenuItem>
                <MenuItem value={3}>Boolean</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="lastSection">
          <div className="row">
            <InputLabel className="label">Is Nullable</InputLabel>
            <FormControl sx={{ m: 1 }} size="small">
              <Checkbox {...label} />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="buttons">
        {/* <Link to={"/"}> */}
        <Button variant="outlined" color="success" onClick={notify}>
          Save
        </Button>
        {/* </Link> */}
        <ToastContainer />
        <Link to={"/"}>
          <Button variant="outlined" color="secondary">
            Cancel
          </Button>
        </Link>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            deleteService();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EditService;
