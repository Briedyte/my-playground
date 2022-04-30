import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  ColorPalette,
  headerHeight,
  MediaQuery,
  Spacing,
  zIndex,
} from "@config/style";

import { Link, useLocation } from "react-router-dom";

import { ReactComponent as HomeIcon } from "@images/house.svg";
import { ReactComponent as HeaderBackground } from "@images/header.svg";
import PhonePng from "@images/icons/phone.png";
import MailPng from "@images/icons/email.png";
import UserIcon from "@images/icons/user.png";

import Container from "@components/Container";
import Button from "@components/Button";
import { ButtonVariant } from "@components/Button/Button";
import Tooltip from "@components/Tooltip";
import { ContainerVariant } from "@components/Container/Container";
import { useAuth } from "@context/AuthProvider";
import { RouteConfig } from "@config/routes";

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
  height: 80px;
  width: 80px;
  cursor: pointer;
  fill: ${ColorPalette.black};
  border: 2px solid ${ColorPalette.black};
  padding: ${Spacing[16]};
  border-radius: 30%;
  background: ${ColorPalette.backgroundTransparent};

  rect {
    fill: ${({ $isHome }: { $isHome: boolean }) =>
      $isHome ? ColorPalette.tertiary : ColorPalette.backgroundTransparent};
  }

  :hover {
    rect {
      fill: ${ColorPalette.tertiary};
    }
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${Spacing[20]};
  align-content: center;

  ${MediaQuery.s} {
    gap: ${Spacing[6]};
  }
`;

const Contacts = styled.p`
  white-space: nowrap;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: ${Spacing[8]};
`;

const ContactsIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const UserLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 38px;
  transition: width 0.3s linear;

  :hover {
    width: 44px;
  }
`;

const Header = () => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const location = useLocation();
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  const { isLoggedIn } = useAuth();

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
      <Container variant={ContainerVariant.sidePaddings}>
        <ContentWrapper>
          <Link to="/">
            <HomeImg $isHome={location.pathname === "/"} />
          </Link>
          <ButtonsWrapper>
            <Button variant={ButtonVariant.transparent}>
              <a
                href="https://github.com/Briedyte/my-playground"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </Button>
            <Tooltip
              showTooltip={tooltipShown}
              content={
                <>
                  <Contacts>
                    <ContactsIcon src={PhonePng} alt="Phone" />
                    +370 621 75412
                  </Contacts>
                  <Contacts>
                    <ContactsIcon src={MailPng} alt="Mail" />
                    em.briedyte@gmail.com
                  </Contacts>
                </>
              }
              reference={tooltipRef}
            >
              <Button
                variant={ButtonVariant.transparent}
                onClick={() => setTooltipShown((prev) => !prev)}
              >
                Contacts
              </Button>
            </Tooltip>
            {isLoggedIn && (
              <UserLink to={RouteConfig.UserPage}>
                <UserImg src={UserIcon} alt="User" />
              </UserLink>
            )}
          </ButtonsWrapper>
        </ContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
