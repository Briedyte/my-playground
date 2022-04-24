import React, { useState } from "react";
import styled from "styled-components";
import { Spacing } from "../../config/style";
import Button from "../Button";
import FormInput, { InputType } from "../Form/FormInput";

const RegexRules = {
  user: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

enum FormFields {
  firstName = "fName",
  lastName = "lName",
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
  userName = "userName",
}

interface FormValues {
  [FormFields.firstName]: string;
  [FormFields.lastName]: string;
  [FormFields.email]: string;
  [FormFields.password]: string;
  [FormFields.confirmPassword]: string;
  [FormFields.userName]: string;
}

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RegistrationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [user, setUser] = useState<FormValues>({
    [FormFields.firstName]: "",
    [FormFields.lastName]: "",
    [FormFields.email]: "",
    [FormFields.password]: "",
    [FormFields.confirmPassword]: "",
    [FormFields.userName]: "",
  });
  const [inputErrors, setInputErrors] = useState({
    [FormFields.email]: "",
    [FormFields.password]: "",
    [FormFields.confirmPassword]: "",
    [FormFields.userName]: "",
  });
  const [isFormLoading, setIsFormLoading] = useState(false);

  const isFormValid = () =>
    Object.values(user).every((item) => item) &&
    Object.values(inputErrors).every((error) => !error);

  const registerUser = async () => {
    if (!isFormValid()) {
      return;
    }

    setIsFormLoading(true);

    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "content-type": "application/json",
        },
      });
      setIsFormLoading(false);
      onSuccess();
      console.log(response);
    } catch (err) {
      setIsFormLoading(false);
      console.log(err);
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        registerUser();
      }}
    >
      <FormInput
        name={FormFields.firstName}
        label="First name"
        onChange={(e) =>
          setUser({ ...user, [FormFields.firstName]: e.currentTarget.value })
        }
        required
      />
      <FormInput
        name={FormFields.lastName}
        label="Last name"
        onChange={(e) =>
          setUser({ ...user, [FormFields.lastName]: e.currentTarget.value })
        }
        required
      />
      <FormInput
        name={FormFields.email}
        label="Email"
        onChange={(e) =>
          setUser({ ...user, [FormFields.email]: e.currentTarget.value })
        }
        errorMessage={inputErrors.email}
        onBlur={(inputValue) =>
          setInputErrors({
            ...inputErrors,
            [FormFields.email]: !inputValue.match(RegexRules.email)
              ? "Insert valid email."
              : "",
          })
        }
        required
      />
      <FormInput
        name={FormFields.userName}
        label="Username"
        onChange={(e) =>
          setUser({ ...user, [FormFields.userName]: e.currentTarget.value })
        }
        errorMessage={inputErrors.userName}
        onBlur={(inputValue: string) =>
          setInputErrors({
            ...inputErrors,
            [FormFields.userName]: !inputValue.match(RegexRules.user)
              ? "Username should be 8-20 characters long and have no special characters."
              : "",
          })
        }
        required
      />
      <FormInput
        inputType={InputType.password}
        name={FormFields.password}
        label="Password"
        onChange={(e) =>
          setUser({ ...user, [FormFields.password]: e.currentTarget.value })
        }
        errorMessage={inputErrors.password}
        onBlur={(inputValue) =>
          setInputErrors({
            ...inputErrors,
            [FormFields.password]: !inputValue.match(RegexRules.password)
              ? "Password must be minimum 8 characters, contain at least one letter and one number."
              : "",
          })
        }
        required
      />
      <FormInput
        inputType={InputType.password}
        name={FormFields.confirmPassword}
        label="Confirm password"
        onChange={(e) =>
          setUser({
            ...user,
            [FormFields.confirmPassword]: e.currentTarget.value,
          })
        }
        errorMessage={inputErrors.confirmPassword}
        onBlur={(inputValue) =>
          setInputErrors({
            ...inputErrors,
            [FormFields.confirmPassword]:
              inputValue !== user.password ? "Passwords do not match" : "",
          })
        }
        required
      />
      <Button type="submit" disabled={isFormLoading}>
        {isFormLoading ? "Loading..." : "Sign in"}
      </Button>
    </Form>
  );
};

export default RegistrationForm;
