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
            <UIImage path="/icons/reset.svg" alt="reset" />
          </ControlButton>
          <ControlButton onClick={handlePauseResume}>
            {isPaused ? (
              <UIImage path="/icons/start.svg" height={29} width={29} alt="start" />
            ) : (
              <UIImage path="/icons/pause.svg" alt="pause" />
            )}
          </ControlButton>
        </ControlsWrapper>
      ) : (
        <ControlsWrapper>
          <ControlButton onClick={handleStart}>
            <UIImage path="/icons/start.svg" height={29} width={29} alt="start" />
          </ControlButton>
        </ControlsWrapper>
      )}
    </>
  );
};

export default React.memo(ControlButtons);
