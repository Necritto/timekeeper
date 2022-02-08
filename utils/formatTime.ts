interface FormatTime<T> {
  hours: T;
  minutes: T;
  seconds: T;
}

export const formatTime = (timer: number): FormatTime<string> => {
  const seconds = `0${timer % 60}`.slice(-2);
  const minutes = `0${Math.floor(timer / 60) % 60}`.slice(-2);
  const hours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return {
    hours,
    minutes,
    seconds,
  };
};
