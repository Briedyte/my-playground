import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Breakpoint,
  ColorPalette,
  MediaQuery,
  Spacing,
} from "../../config/style";
import useMedia from "../../hooks/useMedia";
import { ReactComponent as ArrowIcon } from "../../images/arrow.svg";

const MainContainer = styled.aside`
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${Spacing[6]};
  justify-content: center;
  z-index: 1;
  transition: all 0.5s ease-in;

  ${MediaQuery.xs} {
    position: absolute;
    left: -260px;
    heihgt: fit-content;
    top: 0;
    bottom: 0;
    background: "none";

      ${({ $isMenuOpen }: { $isMenuOpen: boolean }) =>
        css`
          ${$isMenuOpen &&
          `
          left: 0;
          background: ${ColorPalette.darkerBackground};
          width: 100%;
          padding-right: 20px;
        `}
        `}
  }  
  }
`;

const Title = styled.h3`
  text-align: left;
  margin-left: ${Spacing[32]};
`;

const Arrow = styled(ArrowIcon)`
  fill: ${ColorPalette.primary};
  height: 20px;
  width: 20px;
  cursor: pointer;
  margin-left: auto;
  margin-right: ${Spacing[6]};
  transition: 0.4s transform ease-in;
  transform: ${({ isMenuOpen }: { isMenuOpen: boolean }) =>
    isMenuOpen && "rotate(-180deg)"};
`;

const Link = styled.li`
  color: ${ColorPalette.lightText};
  background: ${ColorPalette.primary};
  padding: ${Spacing[6]};
  padding-left: ${Spacing[12]};
  border: 2px solid ${ColorPalette.black};
  border-left: none;
  border-radius: 0 20px 20px 0;
  margin: ${Spacing[12]} 0;
  list-style-type: none;
  position: relative;
  width: 90%;
  transition: all 0.3s ease-in;

  :hover {
    width: 100%;
    padding-left: ${Spacing[18]};
  }

  :after {
    content: "";
    border: 2px solid ${ColorPalette.black};
    background: ${ColorPalette.primaryDarker};
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

  :nth-child(odd) {
    background: ${ColorPalette.secondary};

    :after {
      background: ${ColorPalette.secondaryDarker};
    }
  }

  ${({ $isClickable }: { $isClickable: boolean }) =>
    $isClickable &&
    `
  :active {
    top: 5px;

    :after {
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  `}

  ${MediaQuery.xs} {
    width: 100%;
    padding-left: ${Spacing[12]};
  }
`;

const Sidenav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["First", "Second", "One more", "Very long title of this one"];

  const isMobile = useMedia(Breakpoint.xs);

  return (
    <MainContainer $isMenuOpen={menuOpen}>
      {isMobile ? (
        <Arrow
          isMenuOpen={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      ) : (
        <Title>Menu</Title>
      )}

      <ul>
        {links.map((link, index) => (
          <Link key={index} $isClickable={!isMobile || menuOpen}>
            {link}
          </Link>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Sidenav;
