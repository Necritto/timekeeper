import React from "react";

import UIImage from "components/UI/UIImage";
import { ControlButtonsPropsInterface } from "types/components/stopwatch";

import { ControlsWrapper, ControlButton } from "./styles";

const ControlButtons: React.FC<ControlButtonsPropsInterface> = ({
  isActive,
  isPaused,
  handleStart,
  handleReset,
  handlePauseResume,
}) => {
  return (
    <>
      {isActive ? (
        <ControlsWrapper>
          <ControlButton onClick={handleReset}>
            <UIImage path="/icons/stop.svg" alt="stop" />
          </ControlButton>
          <ControlButton onClick={handlePauseResume}>
            {isPaused ? (
              <UIImage path="/icons/start.svg" alt="start" />
            ) : (
              <UIImage path="/icons/pause.svg" alt="pause" />
            )}
          </ControlButton>
        </ControlsWrapper>
      ) : (
        <ControlsWrapper>
          <ControlButton onClick={handleStart}>
            <UIImage path="/icons/start.svg" alt="start" />
          </ControlButton>
        </ControlsWrapper>
      )}
    </>
  );
};

export default React.memo(ControlButtons);
