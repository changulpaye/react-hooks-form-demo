import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "react-hook-form-devtools";
import Select from "./Select";
import Input from "./Input";

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

  const toggleValidation = e => {
    e.preventDefault();
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
          <Input
            isRequired={formValidation.isEmailRequired}
            errors={errors.email}
            ref={register}
            label="Email"
            placeholder="Enter Email"
            type="email"
            controlName="email"
            validation={{
              required: {
                value: formValidation.isEmailRequired,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            }}
          />

          <Input
            isRequired={formValidation.isPasswordRequired}
            errors={errors.password}
            ref={register}
            label="Password"
            placeholder="Enter Password"
            type="password"
            controlName="password"
            validation={{
              required: {
                value: formValidation.isPasswordRequired,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Minimum password length should 8 character",
              },
            }}
          />
          <Select
            label="Select Age Range"
            ref={register}
            options={["10 - 20", "20 - 30", "30 - 40"]}
          />
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
