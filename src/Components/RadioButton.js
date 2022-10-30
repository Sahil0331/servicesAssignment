import React from "react";
import "../index.css"
const RadioButton = (props) => {
    return (
        <div>
            <input
                style={{
                    backgroundColor: "#393938 !important",
                    color: "#393939 !important",
                    width: "18px !important"
                }}
                className="radio"
                name={props?.name}
                id={props?.id}
                type="radio"
                value={props?.id}
                checked={props?.id === props?.value}
                onChange={props?.onChange}
                onBlur={props?.onBlur}
                {...props}
            />
            <label htmlFor={props?.id}>{props?.label}</label>
        </div>
    );
};

export default RadioButton;
