import "../../App.css";
import React from "react";
import { InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import TextInput from "../../Components/TextInput";
import { VALIDATION_SCHEMA } from "../../utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "../../Components/TextArea";
import SelectField from "../../Components/SelectField";
import CheckboxInput from "../../Components/Checkbox";

const ProtocolData = [
  {
    label: "Soap",
    value: "1",
    id: "1",
  },
  {
    label: "Rest",
    value: "1",
    id: "1",
  },
];
function AddService() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
  const defaultValues = {
    service_name: "",
    service_name: "",
    service_description: "",
  };
  const [toggle, setToggle] = React.useState(false);
  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    reValidateMode: "all",
    resolver: yupResolver(VALIDATION_SCHEMA),
    shouldFocusError: true,
    defaultValues,
  });
  const onSubmit = (data) => console.log(data, "data");

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <div>
                <SelectField
                  data={ProtocolData}
                  name="protocol_type"
                  control={control}
                  onChange={() => {
                    setToggle(true);
                  }}
                />
                <h3 className="error-message">
                  {errors?.protocol_type && errors?.protocol_type?.message}
                </h3>
              </div>
            </div>

            <div className="row">
              <InputLabel className="label">
                <span className="required">*</span>Service Name
              </InputLabel>
              <div>
                <TextInput
                  type="text"
                  control={control}
                  name="service_name"
                  className="input"
                  placeholder="Enter Service Name"
                />
                <h3 className="error-message">
                  {errors?.service_name && errors?.service_name?.message}
                </h3>
              </div>
            </div>

            <div className="row">
              <InputLabel className="label checkbox">
                Advance Tracking
              </InputLabel>
              <FormControl sx={{ m: 1 }} size="small">
                <Controller
                  name="advance_tracking"
                  control={control}
                  render={({ field }) => <Checkbox {...field} />}
                />
              </FormControl>
            </div>
          </div>
          <div className="rightInput">
            <div className="textArea">
              <InputLabel className="serviceDescription ">
                Service Description
              </InputLabel>
              <div>
                <Textarea
                  control={control}
                  name={"service_description"}
                  className="textArea"
                />
                <h3 className="error-message">
                  {errors?.service_description &&
                    errors?.service_description?.message}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="greyBox"></div>
        {toggle && (
          <>
            <div className="header">
              <p> - Operation</p>
            </div>
            <div className="inputSection">
              <div className="leftInput">
                <div className="row">
                  <InputLabel className="label">
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
                    <span className="required">*</span>Verb
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
          </>
        )}
        <div className="buttons">
          {/* <Link to={"/"}> */}
          <Button
            variant="outlined"
            color="success"
            onClick={notify}
            type="submit"
            disabled={!isValid}
          >
            Save
          </Button>
          {/* </Link> */}
          <ToastContainer />
          <Link to={"/"}>
            <Button variant="outlined" color="secondary">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddService;
