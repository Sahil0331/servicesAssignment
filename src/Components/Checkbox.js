import React from 'react'
import '../index.css'
const CheckboxInput = (props) => (
    <div className={`checkbox-field ${props?.disabled && 'checkBoxDisable'}`}>
        <label className="checkbox-container">
            <input
                {...props}
                checked={props.value}
                className="checkBox"
                type="checkbox"
                onChange={(e) => {
                    props?.onChange && props?.onChange(e.target.checked)
                }}
            />
            <span className="checkMark"></span>
            {props?.label}
        </label>
    </div>
)

export default CheckboxInput
