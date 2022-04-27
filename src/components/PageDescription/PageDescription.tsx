import React from "react";
import Button from "../Button";
import { ButtonVariant } from "../Button/Button";

import { ReactComponent as DashedArrow } from "../../images/dashedArrow.svg";
import { ColorPalette, FontSize, Spacing } from "../../config/style";
import styled from "styled-components";
import ColoredContainer from "../ColoredContainer";
import { ColoredContainerColor } from "../ColoredContainer/ColoredContainer";

const ContainerAndArrow = styled.div`
  display: flex;
`;

const Text = styled.p`
  padding: ${Spacing[50]};
  font-size: ${FontSize[18]};
  color: ${({ isLight }: { isLight: boolean }) =>
    isLight ? ColorPalette.lightText : ColorPalette.black};
`;

const Arrow = styled(DashedArrow)`
  min-width: 40px;
  max-height: 70px;
  align-self: end;
  position: relative;
  top: 30px;
  transform: ${({ reversed }: { reversed: boolean }) =>
    reversed ? "scaleX(-1)" : "none"};
`;

interface PageDescriptionProps {
  mainDescription: string;
  steps: string[];
}

const PageDescription = ({ mainDescription, steps }: PageDescriptionProps) => {
  const getColor = (index: number) => {
    if (index % 3 === 0) {
      return ColoredContainerColor.primary;
    }
    if (index % 2 === 0) {
      return ColoredContainerColor.secondary;
    }

    return ColoredContainerColor.tertiary;
  };

  return (
    <section>
      <p>{mainDescription}</p>
      {steps.map((step, index) => {
        const isOdd = index % 2 !== 0;
        const isLast = index === steps.length - 1;
        const containerColor = getColor(index);

        return (
          <ContainerAndArrow key={index}>
            {isOdd && !isLast && <Arrow reversed={true} />}
            <ColoredContainer reversed={isOdd} color={containerColor}>
              <Text isLight={containerColor !== ColoredContainerColor.tertiary}>
                {step}
              </Text>
            </ColoredContainer>
            {!isOdd && !isLast && <Arrow reversed={false} />}
          </ContainerAndArrow>
        );
      })}

      <Button variant={ButtonVariant.transparentDark}>Tell me more...</Button>
    </section>
  );
};

export default PageDescription;
