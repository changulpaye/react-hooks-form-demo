import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";

const LoginForm = () => {
  const { handleSubmit, register, errors, control, formState } = useForm({
    mode: "onBlur",
  });

  const [formValidation, setFormValidation] = useState({
    isEmailRequired: true,
    isPasswordRequired: true,
  });

  const onSubmit = async data => {
    const resp = await fetch("https://reqres.in/api/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await resp.json();
    console.log(result);
  };

  const toggleValidation = () => {
    setFormValidation({
      isEmailRequired: !formValidation.isEmailRequired,
      isPasswordRequired: !formValidation.isPasswordRequired,
    });
  };

  return (
    <div className="card" style={{ width: "400px" }}>
      <h5 className="card-header">Login</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="email">
              Email
              {formValidation.isEmailRequired && (
                <span style={{ color: "red" }}>*</span>
              )}
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="form-control"
              ref={register({
                required: {
                  value: formValidation.isEmailRequired,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
                minLength: {
                  value: 8,
                  message: "Minimum length should 8 character",
                },
              })}
            />
            {errors.email && (
              <div className="alert alert-danger mt-2">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
              {formValidation.isPasswordRequired && (
                <span style={{ color: "red" }}>*</span>
              )}
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              name="password"
              ref={register({
                required: {
                  value: formValidation.isEmailRequired,
                  message: "Password is required",
                },
                minLength: {
                  value: 8,
                  message: "Minimum password length should 8 character",
                },
              })}
            />
            {errors.password && (
              <div className="alert alert-danger mt-2">
                {errors.password.message}
              </div>
            )}
          </div>
        </div>

        <div className="card-footer text-right">
          <button onClick={toggleValidation} className="btn btn-info mr-2">
            Toggle Validation
          </button>
          <button
            className="btn btn-primary"
            disabled={!formState.isValid || formState.isSubmitting}
            type="submit">
            Submit
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default LoginForm;
