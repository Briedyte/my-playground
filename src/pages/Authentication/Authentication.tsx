import React, { useState } from "react";
import styled from "styled-components";
import {
  ColorPalette,
  FontSize,
  MediaQuery,
  Spacing,
} from "../../config/style";

import Container from "../../components/Container";
import TwoTabs from "components/TwoTabs";
import LoginForm from "../../components/forms/LoginForm";
import RegistrationForm from "../../components/forms/RegistrationForm";
import PageDescription from "../../components/PageDescription/PageDescription";

const Title = styled.h2`
  font-size: ${FontSize[40]};
  color: ${ColorPalette.primary};
`;

const DescriptionWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

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

const Authentication = () => {
  const [loginFormOpen, setLoginFormOpen] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  return (
    <Container withTopBottomMargins={true}>
      <Title>You have to be logged in to see a picture of a cute doggo!</Title>

      <DescriptionWrapper>
        <PageDescription
          mainDescription="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. "
          steps={[
            "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
            " 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "sooooooooooooooomething sfsdfds sd fdsfdfdsfdsfds dfds fdsf ",
          ]}
        />
      </DescriptionWrapper>

      <AuthenticationContainer>
        {registrationSuccess && <p>Success! You can log in now.</p>}
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
    </Container>
  );
};

export default Authentication;
