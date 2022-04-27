import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../images/house.svg";
import { ReactComponent as HeaderBackground } from "../../images/header.svg";
import Container from "../Container";
import {
  ColorPalette,
  headerHeight,
  Spacing,
  zIndex,
} from "../../config/style";
import { Link, useLocation } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: ${headerHeight}%;
  z-index: ${zIndex.positive};
  padding-bottom: ${Spacing[11]};
`;

const Background = styled(HeaderBackground)`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: ${zIndex.negative};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing[20]} 0;
`;

const HomeImg = styled(HomeIcon)`
  height: 60px;
  width: 60px;
  cursor: pointer;
  fill: ${ColorPalette.black};

  rect {
    fill: ${({ isHome }: { isHome: boolean }) =>
      isHome ? ColorPalette.tertiary : ColorPalette.primary};
  }

  :hover {
    rect {
      fill: ${ColorPalette.tertiary};
    }
  }
`;

const LinkList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${Spacing[12]};
`;

const Header = () => {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Background />
      <Container>
        <ContentWrapper>
          <Link to="/">
            <HomeImg isHome={location.pathname === "/"} />
          </Link>
          <LinkList>
            <li>Resume</li>
            <li>Contacts</li>
          </LinkList>
        </ContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
