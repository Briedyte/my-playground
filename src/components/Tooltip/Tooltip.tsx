import React, { RefObject } from "react";
import styled from "styled-components";
import { ColorPalette, MediaQuery, Spacing } from "@config/style";

const ArrowHeight = 40;

const MainContainer = styled.div`
  position: relative;
`;

const TooltipWrapper = styled.div`
  position: absolute;
  background: ${ColorPalette.tertiary};
  border-radius: 30px;
  border: 3px solid ${ColorPalette.black};
  right: 0;
  margin-top: ${ArrowHeight + 6}px;
  display: ${({ showTooltip }: { showTooltip: boolean }) =>
    showTooltip ? "block" : "none"};

  ${MediaQuery.s} {
    right: -10px;
  }
`;

const ContentWrapper = styled.div`
  padding: ${Spacing[20]};
  position: relative;

  :after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: -${ArrowHeight + 5}px;
    right: 30px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: ${ArrowHeight}px solid ${ColorPalette.tertiary};
    
  }
`;

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  showTooltip: boolean;
  reference: RefObject<HTMLDivElement>;
}

const Tooltip = ({
  children,
  content,
  showTooltip,
  reference,
}: TooltipProps) => {
  return (
    <MainContainer ref={reference}>
      {children}
      <TooltipWrapper showTooltip={showTooltip}>
        <ContentWrapper>{content}</ContentWrapper>
      </TooltipWrapper>
    </MainContainer>
  );
};

export default Tooltip;
