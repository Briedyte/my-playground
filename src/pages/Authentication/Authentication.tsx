import React, { useState } from "react";
import styled from "styled-components";
import {
  ColorPalette,
  MediaQuery,
  Spacing,
} from "../../config/style";

import Container from "../../components/Container";
import TwoTabs from "components/TwoTabs";
import LoginForm from "../../components/forms/LoginForm";
import RegistrationForm from "../../components/forms/RegistrationForm";
import PageDescription from "../../components/PageDescription/PageDescription";
import { useAuth } from "@context/AuthProvider";
import Button from "@components/Button";
import { ContainerVariant } from "@components/Container/Container";
import { authenticationDescr } from "@config/descriptions/authentication";

const AuthenticationContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${Spacing[18]};
  width: 50%;
  margin: ${Spacing[40]} auto 0;

  ${MediaQuery.l} {
    width: 80%;
  }

  ${MediaQuery.m} {
    width: 100%;
  }
`;

const SuccessMessage = styled.p`
  background: ${ColorPalette.tertiary};
  padding: ${Spacing[20]};
  border-radius: 10px;
  font-weight: bold;
  display: inline-block;
`;

const Authentication = () => {
  const [loginFormOpen, setLoginFormOpen] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  return (
    <Container>
      <PageDescription
        title={authenticationDescr.title}
        mainDescription={authenticationDescr.main}
        steps={[...authenticationDescr.stages]}
      />

      {isLoggedIn ? (
        <>
          <Container variant={ContainerVariant.centeredContent}>
            <p>You are logged in.</p>
            <Button onClick={() => logout()}>Log out</Button>
          </Container>
        </>
      ) : (
        <AuthenticationContainer>
          {registrationSuccess && (
            <SuccessMessage>Success! You can log in now.</SuccessMessage>
          )}
          <TwoTabs
            leftTabOpen={loginFormOpen}
            leftTabTitle="Log in"
            rightTabTitle="Register"
            leftContent={<LoginForm />}
            onTabClick={() => setLoginFormOpen((prev) => !prev)}
            rightContent={
              <RegistrationForm
                onSuccess={() => {
                  setLoginFormOpen(true);
                  setRegistrationSuccess(true);
                }}
              />
            }
          />
        </AuthenticationContainer>
      )}
    </Container>
  );
};

export default Authentication;
