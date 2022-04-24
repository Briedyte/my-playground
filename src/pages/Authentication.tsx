import React, { useState } from "react";
import styled, { css } from "styled-components";
import Container from "../components/Container";
import CroppedContainer from "../components/CroppedContainer";
import { CroppedContainerTitleSide } from "../components/CroppedContainer/CroppedContainer";
import LoginForm from "../components/forms/LoginForm";
import RegistrationForm from "../components/forms/RegistrationForm";
import { zIndex } from "../config/style";

const AuthenticationContainer = styled.section`
  display: flex;
  position: relative;
  width: 50%;
`;

const LoginFormWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  ${({ isActive }: { isActive: boolean }) =>
    css`
      z-index: ${isActive ? zIndex.activeCroppedContainer : zIndex.positive};
      pointer-events: ${isActive ? "none" : "auto"};
    `}
`;

const RegisterFormWrapper = styled.div`
  width: 100%;

  ${({ isActive }: { isActive: boolean }) =>
    css`
      z-index: ${isActive ? zIndex.activeCroppedContainer : zIndex.positive};
      pointer-events: ${isActive ? "none" : "auto"};
    `}
`;

const Authentication = () => {
  const [leftContainerActive, setLeftContainerActive] = useState(true);

  return (
    <Container>
      <h2>You have to be logged in to see a picture of a cute doggo!</h2>
      <AuthenticationContainer>
        <LoginFormWrapper isActive={leftContainerActive}>
          <CroppedContainer
            title="Log in"
            isActive={leftContainerActive}
            onTitleClick={() => setLeftContainerActive(true)}
          >
            <LoginForm />
          </CroppedContainer>
        </LoginFormWrapper>
        <RegisterFormWrapper isActive={!leftContainerActive}>
          <CroppedContainer
            title="Register"
            titleSide={CroppedContainerTitleSide.right}
            isActive={!leftContainerActive}
            onTitleClick={() => setLeftContainerActive(false)}
          >
            <RegistrationForm onSuccess={() => setLeftContainerActive(true)} />
          </CroppedContainer>
        </RegisterFormWrapper>
      </AuthenticationContainer>
    </Container>
  );
};

export default Authentication;
