import React from "react";
import styled, { css } from "styled-components";
import { ColorPalette, Spacing, zIndex } from "../../config/style";
import { ReactComponent as Frame } from "../../images/frame.svg";

export enum ColoredContainerColor {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

const TextWrapper = styled.div`
  position: relative;
  margin-top: ${Spacing[16]};
  width: 100%;
  min-height: 250px;
  text-align: center;
  display: flex;
  align-items: center;
`;

const FrameStyled = styled(Frame)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottomt: 0;
  z-index: ${zIndex.negative};

  ${({
    reversed,
    backgroundColor,
  }: {
    reversed: boolean;
    backgroundColor: string;
  }) => css`
    .st10 {
      fill: ${backgroundColor};
    }

    ${reversed &&
    `
      transform: scaleX(-1);
    `}
  `}
`;

interface ColoredContainerProps {
  children: React.ReactNode;
  reversed?: boolean;
  color: ColoredContainerColor;
}

const ColoredContainer = ({
  children,
  reversed = false,
  color,
}: ColoredContainerProps) => {
  return (
    <TextWrapper>
      {children}
      <FrameStyled reversed={reversed} backgroundColor={ColorPalette[color]} />
    </TextWrapper>
  );
};

export default ColoredContainer;
