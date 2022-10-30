import "../../App.css";
import React, { useEffect } from "react";
import { InputLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import TextInput from "../../Components/TextInput";
import { VALIDATION_SCHEMA } from "../../utils/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import Textarea from "../../Components/TextArea";
import SelectField from "../../Components/SelectField";
import axios from "axios";

const ProtocolData = [
  {
    label: "Soap",
    value: "1",
  },
  {
    label: "Rest",
    value: "2",
  },
];

const verbData = [
  {
    label: "Get",
    value: "1",
  },
  {
    label: "Put",
    value: "2",
  },
  {
    label: "Delete",
    value: "3",
  },
];

const returnTypeData = [
  {
    label: "Int",
    value: "1",
  },
  {
    label: "String",
    value: "2",
  },
  {
    label: "Boolean",
    value: "3",
  },
];

const AddService = () => {
  const notify = () =>
    toast("Service Created Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  const defaultValues = {
    service_name: "",
    service_description: "",
    operation_name: "",
    parameter_name: "",
    operation_list_type: "",
    is_operation_return_nullable: false,
    is_parameter_type_nullable: true,
    parameter_list_type: "",
    advance_tracking: true,
  };

  const [toggle, setToggle] = React.useState(false);
  const [data, setData] = React.useState({});
  const [verb, setVerb] = React.useState("");
  const [overrideToggle, setOverrideToggle] = React.useState(false);
  const [listArrayToggle, setListArrayToggle] = useState(false);
  const [operationListToggle, setOperationListToggle] = useState(false);

  const overRideData =
    verb === "Get"
      ? [
          {
            label: "override1",
            value: "1",
          },
          {
            label: "override2",
            value: "2",
          },
        ]
      : [
          {
            label: "override3",
            value: "3",
          },
          {
            label: "override4",
            value: "4",
          },
        ];
  const navigate = useNavigate();
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

  const onSubmit = (value) => {
    setData({
      ...value,
      override_id: value?.override_id?.value,
      operation_return_type_id: value?.operation_return_type_id?.value,
      verb_id: value?.verb_id?.value,
      parameter_type_id: value?.parameter_type_id?.value,
      protocol_type_id: value?.protocol_type_id?.value,
    });
  };

  React.useEffect(() => {
    if (data?.protocol_type_id == 1 || data?.protocol_type_id == 2) {
      axios
        .post("https://localhost:44386/api/nikita_Connection_Service", data)
        .then((res) => {
          if (res.status === 200) {
            notify();
            setTimeout(() => navigate("/"), 1000);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [data]);
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4> Add Service</h4>
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
                  name="protocol_type_id"
                  control={control}
                  onChange={() => {
                    setToggle(true);
                  }}
                />
                <h3 className="error-message">
                  {errors?.protocol_type_id &&
                    errors?.protocol_type_id?.message}
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
                  render={({ field }) => <Checkbox {...field} checked />}
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
                    <div>
                      <TextInput
                        type="text"
                        control={control}
                        name="operation_name"
                        className="input"
                        placeholder="Enter Operation Name"
                      />
                      <h3 className="error-message">
                        {errors?.operation_name &&
                          errors?.operation_name?.message}
                      </h3>
                    </div>
                  </FormControl>
                </div>
                <div className="row">
                  <InputLabel className="label checkbox">Is List</InputLabel>
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setOperationListToggle(true)
                        : setOperationListToggle(false);
                    }}
                  />
                  {operationListToggle && (
                    <div style={{ display: "flex" }}>
                      <div className="radioWrapper">
                        <label htmlFor="Array">
                          <input
                            {...register("operation_list_type", {
                              required: true,
                            })}
                            type="radio"
                            name="operation_list_type"
                            value="List"
                            className="radio"
                          />
                          List
                        </label>
                      </div>
                      <div className="radioWrapper">
                        <label htmlFor="Array">
                          <input
                            {...register("operation_list_type", {
                              required: true,
                            })}
                            type="radio"
                            name="operation_list_type"
                            value="Array"
                            className="radio"
                          />
                          Array
                        </label>
                      </div>
                    </div>
                  )}
                </div>
                <div className="row">
                  <InputLabel className="label">
                    <span className="required">*</span>Verb
                  </InputLabel>
                  <div>
                    <SelectField
                      data={verbData}
                      name="verb_id"
                      control={control}
                      onChange={(e) => {
                        setVerb(e.label);
                        setOverrideToggle(true);
                      }}
                    />
                    <h3 className="error-message">
                      {errors?.verb_id && errors?.verb_id?.message}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="middleInput">
                <div className="row">
                  <InputLabel className="label">
                    <span className="required">*</span>Return Type
                  </InputLabel>
                  <div>
                    <SelectField
                      data={returnTypeData}
                      name="operation_return_type_id"
                      control={control}
                    />
                    <h3 className="error-message">
                      {errors?.operation_return_type_id &&
                        errors?.operation_return_type_id?.message}
                    </h3>
                  </div>
                </div>

                <div className="row">
                  <InputLabel className="label">
                    <span className="required">*</span>Override Name
                  </InputLabel>
                  <div>
                    <SelectField
                      data={overRideData}
                      name="override_id"
                      control={control}
                      disabled={!overrideToggle}
                    />
                    <h3 className="error-message">
                      {!overrideToggle && "Please Select Verb First."}
                      {errors?.override_id && errors?.override_id?.message}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="lastSection">
                <div className="row">
                  <InputLabel className="label">Is Nullable</InputLabel>
                  <FormControl sx={{ m: 1 }} size="small">
                    <Controller
                      name="is_operation_return_nullable"
                      control={control}
                      render={({ field }) => <Checkbox {...field} />}
                    />
                  </FormControl>
                </div>
              </div>
            </div>

            <hr />
            <div className="inputSection">
              <div className="leftInput">
                <div className="row">
                  <InputLabel className="label">
                    <span className="required">*</span>Parameter
                  </InputLabel>
                  <div>
                    <TextInput
                      type="text"
                      control={control}
                      name="parameter_name"
                      className="input"
                      placeholder="Enter Service Name"
                    />
                    <h3 className="error-message">
                      {errors?.parameter_name &&
                        errors?.parameter_name?.message}
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <InputLabel className="label checkbox">Is List</InputLabel>
                  <Checkbox
                    onChange={(e) => {
                      e.target.checked
                        ? setListArrayToggle(true)
                        : setListArrayToggle(false);
                    }}
                  />
                  {listArrayToggle && (
                    <div style={{ display: "flex" }}>
                      <div className="radioWrapper">
                        <label htmlFor="Array">
                          <input
                            {...register("parameter_list_type", {
                              required: true,
                            })}
                            type="radio"
                            name="parameter_list_type"
                            value="List"
                            className="radio"
                          />
                          List
                        </label>
                      </div>
                      <div className="radioWrapper">
                        <label htmlFor="Array">
                          <input
                            {...register("parameter_list_type", {
                              required: true,
                            })}
                            type="radio"
                            name="parameter_list_type"
                            value="Array"
                            className="radio"
                          />
                          Array
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="middleInput">
                <div className="row">
                  <InputLabel className="label">
                    <span className="required">*</span> Type
                  </InputLabel>
                  <div>
                    <SelectField
                      data={returnTypeData}
                      name="parameter_type_id"
                      control={control}
                    />
                    <h3 className="error-message">
                      {errors?.parameter_type_id &&
                        errors?.parameter_type_id?.message}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="lastSection">
                <div className="row">
                  <InputLabel className="label checkbox">
                    Is Nullable
                  </InputLabel>
                  <Controller
                    name="is_parameter_type_nullable"
                    control={control}
                    render={({ field }) => <Checkbox {...field} checked />}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <div className="buttons">
          <Button
            variant="outlined"
            color="success"
            // onClick={notify}
            type="submit"
            disabled={!isValid}
          >
            Save
          </Button>
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
};

export default AddService;
