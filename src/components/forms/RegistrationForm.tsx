import React, { useState } from "react";
import styled from "styled-components";
import { formBaseStyle } from "../../config/style";

import Button from "../Button";
import FormError from "../Form/FormError";
import FormInput, { InputType } from "../Form/FormInput";

const RegexRules = {
  user: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
};

const Form = styled.form`
  ${formBaseStyle}
`;

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

const defaultFormValues = {
  [FormFields.firstName]: "",
  [FormFields.lastName]: "",
  [FormFields.email]: "",
  [FormFields.password]: "",
  [FormFields.confirmPassword]: "",
  [FormFields.userName]: "",
};

const RegistrationForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formValues, setFormValues] = useState<FormValues>({
    ...defaultFormValues,
  });
  const [errors, setErrors] = useState({
    invalidEmail: "",
    badPassword: "",
    passwordsDoNotMatch: "",
    badUserName: "",
    backendError: "",
    generalError: "",
  });
  const [isFormLoading, setIsFormLoading] = useState(false);

  const isFormValid = () =>
    Object.values(formValues).every((item) => item) &&
    Object.values(errors).every((error) => !error);

  const registerUser = async () => {
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "content-type": "application/json",
        },
      }).then((res) => res.ok && res.json());

      if (response.authToken) {
        onSuccess();
        setIsFormLoading(false);
        setFormValues(defaultFormValues);
      } else {
        response.message &&
          setErrors({ ...errors, backendError: response.message });
        setIsFormLoading(false);
      }
    } catch (err) {
      setIsFormLoading(false);
      setErrors({ ...errors, generalError: "Something went wrong..." });
    }
  };

  const handleSubmit = () => {
    setErrors({ ...errors, backendError: "" });
    if (!isFormValid()) {
      return;
    }
    setIsFormLoading(true);
    registerUser();
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <FormInput
        id="First name"
        name={FormFields.firstName}
        value={formValues.fName}
        label="First name"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.firstName]: e.currentTarget.value,
          })
        }
        required
      />
      <FormInput
        id="Last name"
        name={FormFields.lastName}
        value={formValues.lName}
        label="Last name"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.lastName]: e.currentTarget.value,
          })
        }
        required
      />
      <FormInput
        id="Email"
        name={FormFields.email}
        value={formValues.email}
        label="Email"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.email]: e.currentTarget.value,
          })
        }
        errorMessage={errors.invalidEmail}
        onBlur={(inputValue) =>
          setErrors({
            ...errors,
            invalidEmail: !inputValue.match(RegexRules.email)
              ? "Insert valid email."
              : "",
          })
        }
        required
      />
      <FormInput
        id="Username"
        name={FormFields.userName}
        value={formValues.userName}
        label="Username"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.userName]: e.currentTarget.value,
          })
        }
        errorMessage={errors.badUserName}
        onBlur={(inputValue: string) =>
          setErrors({
            ...errors,
            badUserName: "",
          })
        }
        required
      />
      <FormInput
        id="Password"
        inputType={InputType.password}
        name={FormFields.password}
        value={formValues.password}
        label="Password"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.password]: e.currentTarget.value,
          })
        }
        errorMessage={errors.badPassword}
        onBlur={(inputValue) =>
          setErrors({
            ...errors,
            badPassword: !inputValue.match(RegexRules.password)
              ? "Password must be minimum 8 characters, contain at least one letter and one number."
              : "",
          })
        }
        required
      />
      <FormInput
        id="Confirm password"
        inputType={InputType.password}
        name={FormFields.confirmPassword}
        value={formValues.confirmPassword}
        label="Confirm password"
        onChange={(e) =>
          setFormValues({
            ...formValues,
            [FormFields.confirmPassword]: e.currentTarget.value,
          })
        }
        errorMessage={errors.passwordsDoNotMatch}
        onBlur={(inputValue) =>
          setErrors({
            ...errors,
            passwordsDoNotMatch:
              inputValue !== formValues.password
                ? "Passwords do not match"
                : "",
          })
        }
        required
      />
      <FormError message={errors.backendError || errors.generalError} />
      <Button type="submit" disabled={isFormLoading}>
        {isFormLoading ? "Loading..." : "Register"}
      </Button>
    </Form>
  );
};

export default RegistrationForm;
