import React from "react";
import styled from "styled-components";
import {
  ColorPalette,
  FontFamily,
  FontSize,
  Spacing,
  zIndex,
} from "../../config/style";

const ButtonWrapper = styled.div`
  position: relative;
  z-index: ${zIndex.positive};
`;

const ButtonStyled = styled.button`
  background: ${ColorPalette.primary};
  color: ${ColorPalette.black};
  font: ${FontFamily.nunito};
  padding: ${Spacing[12]} ${Spacing[32]};
  font-size: ${FontSize[18]};
  border: 2px solid ${ColorPalette.black};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s linear;
  position: relative;
  top: 0;

  :after {
    content: "";
    border: 2px solid ${ColorPalette.black};
    background: ${ColorPalette.primaryDarker};
    border-radius: 20px;
    display: block;
    position: absolute;
    top: 0;
    bottom: -6px;
    left: -3px;
    right: -3px;
    transition: all 0.2s linear;
    z-index: -1;
  }

  :hover {
    background: ${ColorPalette.primaryLighter};
  }

  :active {
    background: ${ColorPalette.primary};
    top: 5px;

    :after {
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "button";
}

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <ButtonWrapper>
      <ButtonStyled onClick={onClick} type={type}>
        {children}
      </ButtonStyled>
    </ButtonWrapper>
  );
};

export default Button;
