import React from "react";
import styled, { css } from "styled-components";
import { MediaQuery, Spacing } from "@config/style";

export enum ContainerVariant {
  centeredContent = "centeredContent",
  sidePaddings = "sidePaddings",
  allPaddings = "allPaddings",
}

const ContainerWrapper = styled.div`
  padding: 0 ${Spacing[100]};

  ${({ variant }: { variant: ContainerVariant }) =>
    css`
      ${variant === ContainerVariant.centeredContent &&
      css`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
      ${variant === ContainerVariant.allPaddings &&
      css`
        padding: ${Spacing[60]} ${Spacing[100]};
      `}
    `}

  ${MediaQuery.m} {
    padding: 0 ${Spacing[24]};
  }
`;

interface ContainerProps {
  children: React.ReactNode;
  variant?: ContainerVariant;
}

const Container = ({
  children,
  variant = ContainerVariant.allPaddings,
}: ContainerProps) => {
  return <ContainerWrapper variant={variant}>{children}</ContainerWrapper>;
};

export default Container;
