import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import FormInput from "../Form/FormInput";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  const [user, setUser] = useState<FormValues>({
    [FormFields.password]: "",
    [FormFields.userName]: "",
  });
  const [isFormLoading, setIsFormLoading] = useState(false);

  const isFormValid = () => Object.values(user).every((detail) => detail);

  const navigate = useNavigate();

  const loginUser = async () => {
    if (!isFormValid()) {
      return;
    }

    setIsFormLoading(true);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      });

      console.log(response);
      navigate("/user-page");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        loginUser();
      }}
    >
      <FormInput
        name={FormFields.userName}
        label="User name"
        onChange={(e) =>
          setUser({ ...user, [FormFields.userName]: e.currentTarget.value })
        }
        required
      />
      <FormInput
        name={FormFields.password}
        label="Password"
        onChange={(e) =>
          setUser({ ...user, [FormFields.password]: e.currentTarget.value })
        }
        required
      />
      <Button type="submit" disabled={isFormLoading}>
        {isFormLoading ? "Loading..." : "Sign in"}
      </Button>
    </Form>
  );
};

export default LoginForm;
