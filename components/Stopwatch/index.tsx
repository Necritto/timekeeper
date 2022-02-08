import React from "react";

import { useTimer } from "hooks/useTimer";
import { formatTime } from "utils/formatTime";

import StopwatchDisplay from "./StopwatchDisplay";
import ControlButtons from "./ControlButtons";
import { StopwatchWrapper } from "./styles";

const Stopwatch: React.FC = () => {
  const { isActive, isPaused, timer, handleStart, handlePauseResume, handleReset } = useTimer();

  return (
    <StopwatchWrapper>
      <StopwatchDisplay currentTime={formatTime(timer)} />
      <ControlButtons
        isActive={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </StopwatchWrapper>
  );
};

export default Stopwatch;
