import React from "react";

import CustomImage from "components/CusomImage";
import { ControlButtonsProps } from "types/stopwatch";

import { ControlsWrapper, ControlButton } from "./styles";

const ControlButtons: React.FC<ControlButtonsProps> = ({
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
            <CustomImage path="/icons/reset.svg" alt="reset" />
          </ControlButton>
          <ControlButton onClick={handlePauseResume}>
            {isPaused ? (
              <CustomImage path="/icons/start.svg" height={29} width={29} alt="start" />
            ) : (
              <CustomImage path="/icons/pause.svg" alt="pause" />
            )}
          </ControlButton>
        </ControlsWrapper>
      ) : (
        <ControlsWrapper>
          <ControlButton onClick={handleStart}>
            <CustomImage path="/icons/start.svg" height={29} width={29} alt="start" />
          </ControlButton>
        </ControlsWrapper>
      )}
    </>
  );
};

export default React.memo(ControlButtons);
