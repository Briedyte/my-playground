import React from "react";
import styled from "styled-components";
import { ColorPalette, Spacing } from "@config/style";

const Container = styled.div`
  border: 2px solid ${ColorPalette.black};
  background: ${ColorPalette.error};
  text-align: center;
  padding: ${Spacing[16]};
  width: 100%;
`;

const Text = styled.p`
  color: ${ColorPalette.lightText};
`;

const FormError = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
};

export default FormError;
