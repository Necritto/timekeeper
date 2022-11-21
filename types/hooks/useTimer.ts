export interface UseTimerInterface {
  timer: number;
  isActive: boolean;
  isPaused: boolean;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
}
