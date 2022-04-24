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
  titleSide: CroppedContainerTitleSide;
  isActive: boolean;
}

const MainContainer = styled.div`
  position: relative;
`;

const TitleButton = styled.button`
  width: 100%;
  border: none;
  font-family: ${FontFamily.teko};
  cursor: pointer;
  color: ${ColorPalette.backgroundSolidLighter};
  font-size: ${FontSize[28]};
  background: ${ColorPalette.primary};
  border-radius: 20px 20px 0 0;
  position: relative;

  :before {
    content: "";
    background: ${ColorPalette.black};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  ${({ titleSide, isActive }: TitleButtonOptions) =>
    css`
      ${isActive &&
      css`
        color: ${ColorPalette.primary};
        background: ${ColorPalette.backgroundSolidDarker};
      `}

      ${titleSide === CroppedContainerTitleSide.left &&
      css`
        text-align: left;
        clip-path: polygon(0 0, 45% 0%, 101% 100%, 0% 100%);
        padding: ${Spacing[6]} 50% ${Spacing[40]} ${Spacing[40]};
        border-left: 3px solid ${ColorPalette.black};

        :before {
          clip-path: polygon(
            0 0,
            100% 0%,
            100% 100%,
            99.9% 100%,
            44.5% 2%,
            0 1%
          );
        }
      `}

      ${titleSide === CroppedContainerTitleSide.right &&
      css`
        text-align: right;
        clip-path: polygon(55% 0, 100% 0, 100% 100%, -2% 100%);
        border-right: 3px solid ${ColorPalette.black};
        padding: ${Spacing[6]} ${Spacing[40]} ${Spacing[40]} 50%};

        :before {
          clip-path: polygon(0 0, 100% 0, 100% 1.6%, 55.5% 3%, 0% 100%, 0 100%);
        }
      `}
    `}
`;

const ContentWrapper = styled.div`
  border: 3px solid ${ColorPalette.black};
  border-top: none;
  background: ${ColorPalette.backgroundSolidDarker};
  padding: ${Spacing[40]};
  pointer-events: all;
  display: ${({ isActive }: { isActive: boolean }) =>
    isActive ? "block" : "none"};
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
  return (
    <MainContainer>
      <TitleButton
        titleSide={titleSide}
        isActive={isActive}
        onClick={() => onTitleClick && onTitleClick()}
      >
        {title}
      </TitleButton>
      <ContentWrapper isActive={isActive}>{children}</ContentWrapper>
    </MainContainer>
  );
};

export default CroppedContainer;
