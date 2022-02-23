export interface StopwatchDisplayPropsInterface {
  currentTime: {
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export interface ControlButtonsPropsInterface {
  isActive: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
}
