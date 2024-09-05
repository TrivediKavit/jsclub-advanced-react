import React, { forwardRef } from 'react'

const CustomInputField = forwardRef(function FancyField(props, ref) {
    return (
        <div className="input-field-container">
            <label htmlFor="{props.id}">{props.label}</label>
            <input id="{props.id}" type="text" value={props.value} ref={ref} onChange={props.onChange} />
        </div>
    )
})

export default CustomInputField;
