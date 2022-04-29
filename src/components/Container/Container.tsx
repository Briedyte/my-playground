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
      ${variant === ContainerVariant.sidePaddings &&
      css`
        padding: 0 ${Spacing[100]};

        ${MediaQuery.m} {
          padding: 0 ${Spacing[24]};
        }
      `}

      ${variant === ContainerVariant.centeredContent &&
      css`
        padding: 0 ${Spacing[100]};
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        ${MediaQuery.m} {
          padding: 0 ${Spacing[24]};
        }
      `}

      ${variant === ContainerVariant.allPaddings &&
      css`
        padding: ${Spacing[60]} ${Spacing[100]};

        ${MediaQuery.m} {
          padding: ${Spacing[60]} ${Spacing[24]};
        }
      `}
    `}
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
