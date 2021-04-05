import React from 'react'

export default props => (
    <React.Fragment>
        <label>{props.caption}</label>
        <div className="input-group">
            <input
                name={props.name}
                type="number"
                min={props.min === undefined ? "0.0000" : props.min}
                max={props.max === undefined ? "999999999.9999" : props.max}
                step={props.step === undefined ? "0.0001" : props.step}
                disabled={props.disabled}
                className="form-control"
                value={props.value}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                style={{
                    borderColor:
                        props.errors && props.touched && "red"
                }}
            />
        </div>
        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
        {props.errors && props.touched && (<div style={{ color: "red" }}>{props.errors}</div>)}
    </React.Fragment>
)
