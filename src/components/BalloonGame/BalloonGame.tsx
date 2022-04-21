import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  ColorPalette,
  FontSize,
  MediaQuery,
  Spacing,
  zIndex,
} from "../../config/style";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Balloon from "../../images/balloonGame/balloon.png";
import CloudImg from "../../images/balloonGame/cloud.svg";
import Button from "../Button";
import PointsCounter from "../PointsCounter/PointsCounter";

enum GameStages {
  idle = "idle",
  ready = "ready",
  started = "started",
  gameOver = "gameOver",
}

const defaultBalloonPosition = {
  x: "0",
  y: "0",
};

const balloonHeight = "150px";

const countOfClouds = 5;
const minCloudAnimationDuration = 6;
const randomCloudAnimationDurations = Array.from(Array(countOfClouds)).map(
  () => Math.random() * 10 + minCloudAnimationDuration
);

const Title = styled.h3`
  color: ${ColorPalette.secondary};
  font-size: ${FontSize[30]};
`;

const IdleBalloonImg = styled.img`
  @keyframes upAndGone {
    0% {
      bottom: 0;
      display: block;
    }
    75% {
      opacity: 1;
    }
    100% {
      bottom: 900px;
      display: none;
      opacity: 0;
    }
  }

  height: ${balloonHeight};
  position: relative;
  cursor: pointer;
  animation: ${({ isGameOpen }: { isGameOpen: boolean }) =>
    `${isGameOpen ? "upAndGone 2.5s ease-in forwards" : "none"}`};
`;

const ActiveGameContainer = styled.section`
  @keyframes backgroundAppear {
    0% {
      background: none;
    }
    100% {
      background: ${ColorPalette.balloonGameBackground};
    }
  }

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: ${zIndex.positive};
  animation: backgroundAppear 1s ease-in forwards;
`;

const CloseButton = styled.button`
  border: 0;
  background: ${ColorPalette.tertuary};
  z-index: ${zIndex.positive};
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin-right: ${Spacing[12]};
  margin-left: auto;
`;

const CloudsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

const Cloud = styled.img`
  @keyframes sideToSide {
    0% {
      left: -20%;
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    100% {
      left: 100%;
    }
  }

  position: relative;
  height: ${100 / countOfClouds}%;
  width: fit-content;
  animation: ${({ animationDuration }: { animationDuration: number }) =>
    `sideToSide ${animationDuration}s linear forwards infinite`};
  pointer-events: fill;

  ${MediaQuery.s} {
    height: ${85 / countOfClouds}%;
  }

  ::selection {
    background: transparent;
  }
  ::-moz-selection {
    background: transparent;
  }
`;

const GameBalloonWrapper = styled.div`
  @keyframes flyFromBottom {
    0% {
      opacity: 0;
      bottom: 0;
    }
    40% {
      opacity: 0;
      bottom: 0;
    }
    100% {
      opacity: 1;
      bottom: 30%;
    }
  }
  position: absolute;
  left: 45%;
  animation: flyFromBottom 2s forwards linear;
  height: fit-content;
  cursor: pointer;

  ${({
    positionY,
    positionX,
    gameReady,
  }: {
    positionX: string;
    positionY: string;
    gameReady: boolean;
  }) => `
    transition: transform ${gameReady ? 0 : 16}s linear;
    transform: translateX(${positionX}) translateY(${positionY});
  `}
`;

const GameBalloon = styled.img`
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-30deg);
    }
    75% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  height: ${balloonHeight};
  animation: ${({ gameStarted }: { gameStarted: boolean }) =>
    gameStarted ? "rotate 4s linear forwards infinite" : "none"};

  ::selection {
    background: transparent;
  }
  ::-moz-selection {
    background: transparent;
  }
`;

const GameRules = styled.p`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  margin: 10% auto 0;
  font-size: ${FontSize[40]};
  z-index: ${zIndex.positive};
  pointer-events: none;
  animation: appear 1s forwards linear;
  position: relative;
`;

const GameOverContainer = styled.div`
  font-size: ${FontSize[40]};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const TimerWrapper = styled.div`
  @keyframes appearFromBottom {
    0% {
      opacity: 0;
      transform: translateY(60px) translateX(60px);
    }
    90% {
      opacity: 0;
      transform: translateY(60px) translateX(60px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  position: fixed;
  bottom: 20px;
  right: 20px;
  animation: appearFromBottom 2s forwards linear;
`;

const BalloonGame = () => {
  const [gameStage, setGameStage] = useState(GameStages.idle);
  const [balloonPosition, setBalloonPosition] = useState(
    defaultBalloonPosition
  );
  const [scoredTime, setScoredTime] = useState(0);

  const balloonRef = useRef<HTMLImageElement>(null);
  const windowDimensions = useWindowDimensions();

  useEffect(() => {
    const balloonObserver = new IntersectionObserver((entries) => {
      const balloon = entries[0];

      if (!balloon.isIntersecting) {
        setGameStage(GameStages.gameOver);
      }
    });

    if (balloonRef.current) {
      balloonObserver.observe(balloonRef.current);
    }

    return () => balloonObserver.disconnect();
  }, [balloonRef, gameStage]);

  const getRandomOffscreenPosition = (screenWidthOrHeight: number) => {
    return Math.random() > 0.5
      ? `${Math.random() * 2000 + screenWidthOrHeight}px`
      : `${-(Math.random() * 2000) - screenWidthOrHeight}px`;
  };

  return (
    <div>
      <Title>Play with balloon! </Title>
      <p>Click on the ballon to open the game</p>
      <IdleBalloonImg
        src={Balloon}
        alt="Balloon"
        onClick={() => setGameStage(GameStages.ready)}
        isGameOpen={gameStage !== GameStages.idle}
      />
      {gameStage !== GameStages.idle && (
        <ActiveGameContainer>
          <CloseButton
            onClick={() => {
              setGameStage(GameStages.idle);
              setBalloonPosition(defaultBalloonPosition);
            }}
          >
            &#x274c;
          </CloseButton>
          {gameStage === GameStages.ready && (
            <GameRules>
              Click on the balloon to bounce it and try not to loose it
              offscreen!
            </GameRules>
          )}
          <GameBalloonWrapper
            positionX={balloonPosition.x}
            positionY={balloonPosition.y}
            gameReady={gameStage === GameStages.ready}
            onClick={() => {
              setBalloonPosition({
                x: getRandomOffscreenPosition(windowDimensions.width),
                y: getRandomOffscreenPosition(windowDimensions.height),
              });
              setGameStage(GameStages.started);
            }}
            ref={balloonRef}
          >
            <GameBalloon
              src={Balloon}
              alt="Start"
              gameStarted={gameStage === GameStages.started}
            />
          </GameBalloonWrapper>
          <CloudsContainer>
            {randomCloudAnimationDurations.map((duration, index) => (
              <Cloud
                src={CloudImg}
                alt={"Cloud"}
                animationDuration={duration}
                key={index}
              />
            ))}
          </CloudsContainer>

          {gameStage === GameStages.gameOver && (
            <GameOverContainer>
              <p>...aaand it's gone!</p>
              <p>You scored {scoredTime} points!</p>
              <Button
                onClick={() => {
                  setGameStage(GameStages.ready);
                  setBalloonPosition(defaultBalloonPosition);
                }}
              >
                Play again
              </Button>
            </GameOverContainer>
          )}
          <TimerWrapper>
            <PointsCounter
              isActive={gameStage === GameStages.started}
              reset={gameStage === GameStages.ready}
              onGameEnd={(time) => setScoredTime(time)}
            />
          </TimerWrapper>
        </ActiveGameContainer>
      )}
    </div>
  );
};

export default BalloonGame;
