import React, { RefObject } from "react";
import styled from "styled-components";
import { ColorPalette, MediaQuery, Spacing, zIndex } from "@config/style";

import { ReactComponent as TooltipImg } from "@images/tooltip.svg";

const MainContainer = styled.div`
  position: relative;
`;

const TooltipWrapper = styled.div`
  position: absolute;
  right: -30px;
  display: ${({ showTooltip }: { showTooltip: boolean }) =>
    showTooltip ? "block" : "none"};

  ${MediaQuery.s} {
    right: -10px;
  }
`;

const TooltipStyled = styled(TooltipImg)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${zIndex.negative};

  .st9 {
    fill: ${ColorPalette.tertiary};
  }
`;

const ContentWrapper = styled.div`
  z-index: ${zIndex.positive};
  padding: ${Spacing[40]} ${Spacing[60]} ${Spacing[20]};

  ${MediaQuery.s} {
    padding: ${Spacing[40]} ${Spacing[28]} ${Spacing[20]};
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
        <TooltipStyled />
        <ContentWrapper>{content}</ContentWrapper>
      </TooltipWrapper>
    </MainContainer>
  );
};

export default Tooltip;
