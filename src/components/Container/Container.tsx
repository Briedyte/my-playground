import React from "react";
import styled from "styled-components";
import { MediaQuery, Spacing } from "../../config/style";

const ContainerWrapper = styled.div`
  padding: 0 ${Spacing[100]};
  height: 100%;
  ${MediaQuery.m} {
    padding: 0 ${Spacing[24]};
  }
`;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;