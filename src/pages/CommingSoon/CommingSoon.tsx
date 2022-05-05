import React from "react";
import { ReactComponent as Girl } from "@images/girl.svg";
import styled from "styled-components";
import Container from "@components/Container";
import { ContainerVariant } from "@components/Container/Container";
import { FontSize } from "@config/style";

const Paragraph = styled.p`
  font-size: ${FontSize[80]};
  text-align: center;

`;

const GirlImg = styled(Girl)`
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(6deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  max-height: 500px;

  .hand {
    position: relative;
    left: 3px;
    animation: wave 1s infinite;
    transform-origin: 40% 60%;
  }
`;

const CommingSoon = () => {
  return (
    <Container variant={ContainerVariant.centeredContent}>
      <Paragraph>Comming soon...</Paragraph>
      <GirlImg />
    </Container>
  );
};

export default CommingSoon;
