import React from "react";
import { Controller } from "react-hook-form";
import '../index.css'
const Textarea = (props) => (
    <div className="app-input-text">
        <Controller
            render={({ field: { onChange, value } }) => (
                <textarea
                    disabled={props?.disable}
                    placeholder={props?.placeholder}
                    rows={props?.rows}
                    value={value}
                    style={props?.style}
                    onChange={(e) => {
                        onChange(e?.target?.value);
                        if (props?.onChange) props?.onChange(e?.target?.value);
                    }}
                    onBlur={(e) => {
                        if (props?.onBlur) props?.onBlur(e.target.value);
                    }}
                    name={props?.name}
                />
            )}
            name={props?.name}
            control={props.control}
        />
    </div>
);

export default Textarea;
