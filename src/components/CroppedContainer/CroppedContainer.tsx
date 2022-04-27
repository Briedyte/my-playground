import React from "react";
import styled, { css } from "styled-components";

import {
  ColorPalette,
  FontFamily,
  FontSize,
  Spacing,
} from "../../config/style";

export enum CroppedContainerTitleSide {
  right = "right",
  left = "left",
}

interface TitleButtonOptions {
  titleSideLeft: boolean;
  isActive: boolean;
}

const TitleButton = styled.button`
  width: 100%;
  border: none;
  font-family: ${FontFamily.teko};
  cursor: pointer;
  color: ${ColorPalette.backgroundSolidLighter};
  font-size: ${FontSize[28]};
  background: ${ColorPalette.primary};
  border-radius: 7px 7px 0 0;

  ${({ titleSideLeft, isActive }: TitleButtonOptions) =>
    css`
      ${isActive &&
      `
        color: ${ColorPalette.primary};
        background: ${ColorPalette.backgroundSolidDarker};
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
  }

  ${({
    isActive,
    coloredCornerLeft,
  }: {
    isActive: boolean;
    coloredCornerLeft: boolean;
  }) => css`
    display: ${isActive ? "block" : "none"};

    :after {
      clip-path: ${coloredCornerLeft
        ? "polygon(0 0, 0% 100%, 100% 100%)"
        : "polygon(100% 0, 0% 100%, 100% 100%)"};
    }
  `}
`;

interface CroppedContainerProps {
  children: React.ReactNode;
  title: string;
  onTitleClick?: () => void;
  titleSide?: CroppedContainerTitleSide;
  isActive?: boolean;
}
const CroppedContainer = ({
  children,
  title,
  onTitleClick,
  titleSide = CroppedContainerTitleSide.left,
  isActive = true,
}: CroppedContainerProps) => {
  const titleSideLeft = titleSide === CroppedContainerTitleSide.left;

  return (
    <>
      <TitleButton
        titleSideLeft={titleSideLeft}
        isActive={isActive}
        onClick={() => onTitleClick && onTitleClick()}
      >
        {title}
      </TitleButton>
      <ContentWrapper isActive={isActive} coloredCornerLeft={titleSideLeft}>
        {children}
      </ContentWrapper>
    </>
  );
};

export default CroppedContainer;
