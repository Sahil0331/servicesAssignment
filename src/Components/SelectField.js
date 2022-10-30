import React from 'react'
import Select, { components } from 'react-select'
import { Controller } from 'react-hook-form'

const SelectField = (props) => {
    const selected = React.useRef([])

    return (
        <div className="app-input-text">
            <Controller
                name={props?.name}
                control={props?.control}
                render={({ field: { onChange, value, onBlur } }) => (
                    <Select
                        onInputChange={(inputValue) => (inputValue.length <= 20 ? inputValue : inputValue.substr(0, 20))}
                        isClearable={props?.isClearable}
                        menuPlacement={props?.menuPlacement}
                        isMulti={props?.multiSelect}
                        isDisabled={props?.disabled}
                        className={props?.className}
                        closeMenuOnSelect={props?.multiSelect ? false : true}
                        hideSelectedOptions={false}
                        isSearchable={props.searchable ? false : true}
                        allowSelectAll={true}
                        placeholder={props?.placeholder}
                        onBlur={() => {
                            onBlur(selected.current)
                            if (props?.onBlur) props?.onBlur(selected.current)
                        }}
                        onChange={(e) => {
                            onChange(e)
                            selected.current = e
                            if (props?.onChange) props?.onChange(e)
                        }}
                        value={props?.value ? props?.data?.filter((option) => option?.value === props?.value) : value}
                        options={props.data}
                        defaultValue={props.defaultValue}
                    />
                )}
            />
        </div>
    )
}
export default SelectField
