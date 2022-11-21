import React from "react";

import { useTimer } from "hooks/useTimer";
import { formatTime } from "utils/formatTime";

import StopwatchDisplay from "./StopwatchDisplay";
import ControlButtons from "./ControlButtons";
import { StopwatchWrapper } from "./styles";

type StopwatchProps = {
  workedTime: number;
  updateProjectTimer: (timer: number) => void;
};

const Stopwatch: React.FC<StopwatchProps> = ({ workedTime, updateProjectTimer }) => {
  const { isActive, isPaused, timer, handleStart, handlePauseResume, handleReset } = useTimer();

  React.useEffect(() => updateProjectTimer(timer), [timer, updateProjectTimer]);

  return (
    <StopwatchWrapper>
      <StopwatchDisplay currentTime={formatTime(workedTime)} />
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
