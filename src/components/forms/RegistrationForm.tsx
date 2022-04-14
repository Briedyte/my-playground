import React, { useState } from "react";
import styled from "styled-components";
import { Spacing } from "../../config/style";
import Button from "../Button";
import FormInput, { InputType } from "../Form/FormInput";

const RegexRule = {
  user: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
};

enum FormField {
  userName = "userName",
  password = "password",
  confirmPassword = "confirmPassword",
}

interface FormValues {
  [FormField.userName]: string;
  [FormField.password]: string;
  [FormField.confirmPassword]: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${Spacing[11]};
`;

const RegistrationForm = () => {
  const [user, setUser] = useState<FormValues>({
    [FormField.userName]: "",
    [FormField.password]: "",
    [FormField.confirmPassword]: "",
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(user.password, user.userName);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit(e);
      }}
    >
      <FormInput
        name={FormField.userName}
        label="Username"
        onChange={(e) =>
          setUser({ ...user, [FormField.userName]: e.currentTarget.value })
        }
        errorMessage={
          user.userName.length > 0 && !user.userName.match(RegexRule.user)
            ? "Username should have no special characters and be 8-20 characters long."
            : null
        }
        required
      />
      <FormInput
        inputType={InputType.password}
        name={FormField.password}
        label="Password"
        onChange={(e) =>
          setUser({ ...user, [FormField.password]: e.currentTarget.value })
        }
        errorMessage={
          user.password.length > 0 && !user.password.match(RegexRule.password)
            ? "Password must be minimum 8 characters, at least one letter and one number."
            : null
        }
        required
      />
      <FormInput
        inputType={InputType.password}
        name={FormField.confirmPassword}
        label="Confirm password"
        onChange={(e) =>
          setUser({
            ...user,
            [FormField.confirmPassword]: e.currentTarget.value,
          })
        }
        errorMessage={
          user.confirmPassword.length > 0 &&
          user.password !== user.confirmPassword
            ? "Passwords do not match"
            : null
        }
        required
      />
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default RegistrationForm;
