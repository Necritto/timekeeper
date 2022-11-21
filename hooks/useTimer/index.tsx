import React from "react";

import { UseTimerInterface } from "types/hooks/useTimer";

export const useTimer = (initialTime: number = 0): UseTimerInterface => {
  const [isActive, setIsActive] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const [timer, setTimer] = React.useState(initialTime);

  React.useEffect(() => {
    let interval: null | ReturnType<typeof setTimeout> = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    } else {
      clearInterval(Number(interval));
    }
    return () => {
      clearInterval(Number(interval));
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimer(0);
  };

  return { timer, isActive, isPaused, handleStart, handlePauseResume, handleReset };
};
