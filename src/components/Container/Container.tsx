import React from "react";
import styled from "styled-components";
import { MediaQuery, Spacing } from "@config/style";

const ContainerWrapper = styled.div`
  height: 100%;
  padding: ${({ withTopBottomMargins }: { withTopBottomMargins: boolean }) =>
    withTopBottomMargins
      ? `${Spacing[60]} ${Spacing[100]}`
      : `0 ${Spacing[100]}`};

  ${MediaQuery.m} {
    padding: 0 ${Spacing[24]};
  }
`;

interface ContainerProps {
  children: React.ReactNode;
  withTopBottomMargins?: boolean;
}

const Container = ({
  children,
  withTopBottomMargins = false,
}: ContainerProps) => {
  return (
    <ContainerWrapper withTopBottomMargins={withTopBottomMargins}>
      {children}
    </ContainerWrapper>
  );
};

export default Container;
