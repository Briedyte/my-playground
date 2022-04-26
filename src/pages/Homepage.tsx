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
  margin: 0 auto;
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
  max-width: 300px;
  align-self: end;
  margin-bottom: ${Spacing[100]};
  ${MediaQuery.m} {
    position: absolute;
    margin: 0 auto;
    opacity: 0.1;
    max-width: 100%;
    align-self: center;
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
            <p>I created this app to work on my front end skills.</p>
            <p>It is still quite fresh and more stuff comming soon.</p>
            <br />
            <p>In a meantime you can...</p>
          </div>
          <BalloonGame />
        </LeftItemsWrapper>
        <SliderImg src={Slide} alt="Slider" />
      </HomepageContainer>
    </Container>
  );
};

export default Homepage;
