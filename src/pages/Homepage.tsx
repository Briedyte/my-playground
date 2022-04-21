import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Slide from "../images/slide.png";
import BalloonGame from "../components/BalloonGame";
import {
  ColorPalette,
  FontSize,
  MediaQuery,
  Spacing,
  zIndex,
} from "../config/style";

const HomepageContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${Spacing[60]};
  position: relative;
`;

const LeftItemsWrapper = styled.div`
  font-size: ${FontSize[18]};
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: ${Spacing[50]};
`;

const MainTitle = styled.h1`
  color: ${ColorPalette.primary};
  font-size: ${FontSize[48]};
`;

const SmallerTitle = styled.h2`
  color: ${ColorPalette.secondary};
  font-size: ${FontSize[40]};
`;

const SliderImg = styled.img`
  text-align: right;
  max-height: 500px;
  ${MediaQuery.m} {
    position: absolute;
    opacity: 0.1;
    width: 100%;
    z-index: ${zIndex.negative};
  }
`;

const Homepage = () => {
  return (
    <Container>
      <HomepageContainer>
        <LeftItemsWrapper>
          <div>
            <SmallerTitle>Hi, I’m Emilija.</SmallerTitle>
            <p>An entry-level front end developer.</p>
          </div>
          <div>
            <MainTitle>Welcome to my playground!</MainTitle>
            <p>
              Last year I decided to retrain myself as a web developer and
              lately I started focusing only on front-end. This is where I
              practice it.
            </p>
            <p>You can look aroundo or simply...</p>
          </div>
          <BalloonGame />
        </LeftItemsWrapper>
        <SliderImg src={Slide} alt="Slider" />
      </HomepageContainer>
    </Container>
  );
};

export default Homepage;
