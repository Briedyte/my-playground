import React from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../images/house.svg";
import { ReactComponent as HeaderBackground } from "../../images/header.svg";
import Container from "../Container";
import { ColorPalette, Spacing, zIndex } from "../../config/style";

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
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
    fill: ${ColorPalette.primary};
  }

  :hover {
    rect {
      fill: ${ColorPalette.tertuary};
    }
  }
`;

const LinkList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${Spacing[12]};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Background />
      <Container>
        <ContentWrapper>
          <HomeImg />
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
