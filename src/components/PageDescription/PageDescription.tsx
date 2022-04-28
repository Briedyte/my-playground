import React, { useState } from "react";
import styled from "styled-components";

import { ColorPalette, FontSize, Spacing } from "@config/style";

import Button from "@components/Button";
import { ButtonVariant } from "@components/Button/Button";
import ColoredContainer from "@components/ColoredContainer";
import { ColoredContainerColor } from "@components/ColoredContainer/ColoredContainer";

import { ReactComponent as DashedArrow } from "@images/dashedArrow.svg";

const ContainerAndArrow = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-right: ${Spacing[60]};
`;

interface PageDescriptionProps {
  mainDescription: string;
  steps: string[];
}

const PageDescription = ({ mainDescription, steps }: PageDescriptionProps) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

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
      {descriptionExpanded &&
        steps.map((step, index) => {
          const isOdd = index % 2 !== 0;
          const isLast = index === steps.length - 1;
          const containerColor = getColor(index);

          return (
            <ContainerAndArrow key={index}>
              {isOdd && !isLast && <Arrow reversed={true} />}
              <ColoredContainer reversed={isOdd} color={containerColor}>
                <Text
                  isLight={containerColor !== ColoredContainerColor.tertiary}
                >
                  {step}
                </Text>
              </ColoredContainer>
              {!isOdd && !isLast && <Arrow reversed={false} />}
            </ContainerAndArrow>
          );
        })}
      <ButtonWrapper>
        <Button
          variant={ButtonVariant.transparentDark}
          onClick={() => setDescriptionExpanded((prev) => !prev)}
        >
          {descriptionExpanded ? "Tell me less!" : "Tell me more..."}
        </Button>
      </ButtonWrapper>
    </section>
  );
};

export default PageDescription;
