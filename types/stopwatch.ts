export interface StopwatchDisplayProps {
  currentTime: {
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export interface ControlButtonsProps {
  isActive: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
}
