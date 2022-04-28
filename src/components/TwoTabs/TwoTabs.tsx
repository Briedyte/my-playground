import React from "react";
import styled, { css } from "styled-components";

import {
  ColorPalette,
  FontFamily,
  FontSize,
  Spacing,
  zIndex,
} from "@config/style";

interface TitleButtonOptions {
  titleSideLeft: boolean;
  isActive: boolean;
}

const MainContainer = styled.div`
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
`;

const TitleButton = styled.button`
  border: none;
  font-family: ${FontFamily.teko};
  font-size: ${FontSize[28]};
  cursor: pointer;
  color: ${ColorPalette.backgroundSolidLighter};
  background: ${ColorPalette.primary};
  border-radius: 7px 7px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;

  ${({ titleSideLeft, isActive }: TitleButtonOptions) =>
    css`
      ${isActive &&
      `
        color: ${ColorPalette.primary};
        background: ${ColorPalette.backgroundSolidDarker};
        z-index: ${isActive ? zIndex.activeCroppedContainer : zIndex.positive};
      `}

      ${titleSideLeft &&
      `
        text-align: left;
        clip-path: polygon(0 0, 45% 0%, 101% 100%, 0% 100%);
        padding: ${Spacing[6]} 60% ${Spacing[40]} ${Spacing[40]};
      `}

      ${!titleSideLeft &&
      `
        text-align: right;
        clip-path: polygon(55% 0, 100% 0, 100% 100%, -2% 100%);
        padding: ${Spacing[6]} ${Spacing[40]} ${Spacing[40]} 60%};

      `}
    `}
`;

const ContentWrapper = styled.div`
  border-top: none;
  background: ${ColorPalette.backgroundSolidDarker};
  padding: ${Spacing[40]};
  position: relative;
  pointer-events: all;
  border-radius: 0 0 5px 5px;
  padding-bottom: ${Spacing[160]};

  :after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0;
    background: ${ColorPalette.primary};
    height: 170px;
    clip-path: ${({ coloredCornerLeft }: { coloredCornerLeft: boolean }) =>
      coloredCornerLeft
        ? "polygon(0 0, 0% 100%, 100% 100%)"
        : "polygon(100% 0, 0% 100%, 100% 100%)"};
  }
`;

interface TwoTabsProps {
  leftTabTitle: string;
  rightTabTitle: string;
  onTabClick: () => void;
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  leftTabOpen: boolean;
}
const TwoTabs = ({
  leftTabTitle,
  rightTabTitle,
  leftContent,
  rightContent,
  leftTabOpen,
  onTabClick,
}: TwoTabsProps) => {
  return (
    <MainContainer>
      <ButtonsWrapper>
        <TitleButton
          titleSideLeft={true}
          isActive={leftTabOpen}
          onClick={() => onTabClick()}
        >
          {leftTabTitle}
        </TitleButton>
        <TitleButton
          titleSideLeft={false}
          isActive={!leftTabOpen}
          onClick={() => onTabClick()}
        >
          {rightTabTitle}
        </TitleButton>
      </ButtonsWrapper>

      <ContentWrapper coloredCornerLeft={leftTabOpen}>
        {leftTabOpen ? leftContent : rightContent}
      </ContentWrapper>
    </MainContainer>
  );
};

export default TwoTabs;
