import React from "react";
const Input = React.forwardRef(
  (
    { isRequired, errors, label, type, placeholder, controlName, validation },
    register
  ) => {
    return (
      <div className="form-group">
        <label htmlFor={label}>
          {label}
          {isRequired && <span style={{ color: "red" }}>*</span>}
        </label>
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          name={controlName}
          ref={register(validation)}
        />
        {errors && (
          <div className="alert alert-danger mt-2">{errors.message}</div>
        )}
      </div>
    );
  }
);

export default Input;
