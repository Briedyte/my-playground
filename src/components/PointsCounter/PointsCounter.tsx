import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {
  ColorPalette,
  FontFamily,
  FontSize,
  Spacing,
  zIndex,
} from "@config/style";

interface TimerProps {
  isActive: boolean;
  reset: boolean;
  onGameEnd: (points: number) => void;
}

export const defaultTime = { minutes: 0, seconds: 0 };

const Container = styled.div`
  padding: ${Spacing[20]};
  color: ${ColorPalette.black};
  font-size: ${FontSize[40]};
  font-family: ${FontFamily.teko};
  position: relative;
  z-index: ${zIndex.positive};
  transition: all 0.5s linear;
`;

const PointsCounter = ({ isActive, reset, onGameEnd }: TimerProps) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isActive) {
      interval = setInterval(() => setPoints((prev) => prev + 1), 100);
    }

    if (reset) {
      setPoints(0);
    }

    onGameEnd(points);

    return () => {
      clearInterval(interval);
    };
  }, [isActive, reset, onGameEnd, points]);

  return <Container>{points}</Container>;
};

export default PointsCounter;
