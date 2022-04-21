import React from "react";
import styled from "styled-components";
import { ColorPalette, Spacing } from "../../config/style";

const MainContainer = styled.aside`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${Spacing[6]};
  justify-content: center;
  z-index: 1;
`;

const Title = styled.h3`
  margin-left: ${Spacing[32]};
`;

const Link = styled.li`
  padding: ${Spacing[6]};
  padding-left: ${Spacing[12]};
  border: 2px solid ${ColorPalette.black};
  border-left: none;
  border-radius: 0 20px 20px 0;
  margin: ${Spacing[12]} 0;
  list-style-type: none;
  position: relative;
  background: ${({ background }: { background: string }) => background};
  width: 90%;
  transition: all 0.3s ease-in;

  :after {
    content: "";
    border: 2px solid ${ColorPalette.black};
    background: ${({ background }: { background: string }) =>
      background === ColorPalette.primary
        ? ColorPalette.primaryDarker
        : ColorPalette.secondaryDarker};
    border-radius: 0 20px 20px 0;
    display: block;
    position: absolute;
    top: 0;
    bottom: -6px;
    left: -3px;
    right: -3px;
    transition: all 0.2s linear;
    z-index: -1;
  }

  :hover {
    position: relative;
    width: 100%;
    padding-left: ${Spacing[18]};
  }

  :active {
    top: 5px;

    :after {
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

const Sidenav = () => {
  const links = ["First", "Second", "One more", "Very long title of this one"];

  return (
    <MainContainer>
      <Title>Some title</Title>
      <ul>
        {links.map((link, index) => (
          <Link
            key={index}
            background={
              index % 2 === 0 ? ColorPalette.secondary : ColorPalette.primary
            }
          >
            {link}
          </Link>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Sidenav;
