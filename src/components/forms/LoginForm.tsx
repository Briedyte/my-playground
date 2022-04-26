import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { formBaseStyle } from "../../config/style";
import { useAuth } from "../../context/AuthProvider";
import Button from "../Button";
import FormError from "../Form/FormError";
import FormInput, { InputType } from "../Form/FormInput";

const Form = styled.form`
  ${formBaseStyle}
`;

enum FormFields {
  password = "password",
  userName = "userName",
}

interface FormValues {
  [FormFields.password]: string;
  [FormFields.userName]: string;
}

const LoginForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    [FormFields.password]: "",
    [FormFields.userName]: "",
  });
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [errors, setErrors] = useState({ backendError: "", generalError: "" });
  const { login } = useAuth();

  const isFormValid = () => Object.values(formValues).every((detail) => detail);

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => res.ok && res.json());

      if (response.user) {
        login(response.user);
        navigate("/user-page");
      } else {
        response.message &&
          setErrors({ ...errors, backendError: response.message });
        setIsFormLoading(false);
      }
    } catch (err) {
      setErrors({ ...errors, generalError: "Something went wrong..." });
      setIsFormLoading(false);
    }
  };

  const handleSubmit = async () => {
    setErrors({ backendError: "", generalError: "" });
    if (!isFormValid()) {
      return;
    }
    setIsFormLoading(true);
    loginUser();
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <FormInput
        id="User name"
        name={FormFields.userName}
        label="User name"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.userName]: e.currentTarget.value,
          })
        }
        required
      />
      <FormInput
        id="Password"
        name={FormFields.password}
        label="Password"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.password]: e.currentTarget.value,
          })
        }
        inputType={InputType.password}
        required
      />
      <FormError message={errors.backendError || errors.generalError} />
      <Button type="submit" disabled={isFormLoading}>
        {isFormLoading ? "Loading..." : "Login"}
      </Button>
    </Form>
  );
};

export default LoginForm;
