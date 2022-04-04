import React from "react";
import styled from "styled-components";
import HomeIcon from "../../images/home.svg";
import Container from "../Container";
import { ColorPalette, Spacing } from "../../config/style";

const HeaderWrapper = styled.header`
  background: ${ColorPalette.darkerBackground};
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${Spacing[20]} 0;
`;

const HomeImg = styled.img`
  height: 80px;
  width: 80px;
  cursor: pointer;
`;

const LinkList = styled.ul`
  display: flex;
  list-style: none;
  gap: ${Spacing[12]};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <ContentWrapper>
          <HomeImg src={HomeIcon} alt="home" />
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
