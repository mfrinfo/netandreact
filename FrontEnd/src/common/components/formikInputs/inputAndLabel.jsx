import React from "react";

export default (props) => (
  <React.Fragment>
    <label>{props.caption}</label>
    <input
      name={props.name}
      type={props.number ? "number" : "text"}
      className="form-control"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange}
      onBlur={props.handleBlur}
      style={{
        borderColor: props.errors && props.touched && "red",
      }}
      disabled={props.disabled}
    />
    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
    {props.errors && props.touched && (
      <div style={{ color: "red" }}>{props.errors}</div>
    )}
  </React.Fragment>
);
