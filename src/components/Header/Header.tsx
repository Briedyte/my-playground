import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ColorPalette, headerHeight, Spacing, zIndex } from "@config/style";

import { Link, useLocation } from "react-router-dom";

import { ReactComponent as HomeIcon } from "@images/house.svg";
import { ReactComponent as HeaderBackground } from "@images/header.svg";

import Container from "@components/Container";

import Button from "@components/Button";
import { ButtonVariant } from "@components/Button/Button";
import Tooltip from "@components/Tooltip";

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: ${headerHeight};
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

const Contacts = styled.p`
  white-space: nowrap;
  font-weight: bold;
`;

const Header = () => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const location = useLocation();
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (
        tooltipShown &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setTooltipShown(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [tooltipShown]);

  return (
    <HeaderWrapper>
      <Background />
      <Container>
        <ContentWrapper>
          <Link to="/">
            <HomeImg isHome={location.pathname === "/"} />
          </Link>
          <Tooltip
            showTooltip={tooltipShown}
            content={
              <>
                <Contacts>Tel: +370 621 75412</Contacts>
                <Contacts>Email: em.briedyte@gmail.com</Contacts>
              </>
            }
            reference={tooltipRef}
          >
            <Button
              variant={ButtonVariant.transparentLight}
              onClick={() => setTooltipShown((prev) => !prev)}
            >
              Contacts
            </Button>
          </Tooltip>
        </ContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
