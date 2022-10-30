import React, { useState } from "react";
import { Controller } from "react-hook-form";
import "../index.css";

const TextInput = (props) => {
  return (
    <div className="app-input-text">
      <Controller
        render={({ field: { onChange, value, rules } }) => (
          <input
            className={props.disabled ? "disabled" : ""}
            onChange={(e) => {
              onChange(e);
              if (props?.onChange) props?.onChange(e);
            }}
            onFocus={(e) => {
              if (props?.onFocus) props?.onFocus(e?.target?.value);
            }}
            onBlur={(e) => {
              if (props?.onBlur) props?.onBlur(e?.target?.value);
            }}
            type={"text"}
            placeholder={props.placeholder}
            defaultValue={props?.defaultValue}
            style={props?.style}
            disabled={props.disabled}
            value={props?.value || value}
            rules={rules}
            name={props?.name}
            maxLength={props?.maxLength}
          />
        )}
        name={props?.name}
        control={props.control}
      />
    </div>
  );
};

export default TextInput;
