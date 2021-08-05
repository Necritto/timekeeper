import React from "react";

import StopwatchDisplay from "./StopwatchDisplay";

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [timer, setTimer] = React.useState<NodeJS.Timer | null>();

  const formatTime = (val: number): string => {
    let value = val.toString();
    if (value.length < 2) {
      value = "0" + value;
    }
    return value;
  };

  const pace = () => {
    if (seconds >= 60) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
    if (minutes >= 60) {
      setHours(hours + 1);
      setMinutes(0);
    }
    getCurrentTime();
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const stopwatchTimer = setInterval(() => pace(), 1000);
      setTimer(stopwatchTimer);
    }
  };

  const stop = () => {
    setIsRunning(false);
    const stopwatchTimer: any = timer;
    clearInterval(stopwatchTimer);
    setTimer(null);
  };

  const getCurrentTime = () => {
    return {
      hours: formatTime(hours),
      minutes: formatTime(minutes),
      seconds: formatTime(seconds),
    };
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      {isRunning ? <button onClick={stop}>STOP</button> : <button onClick={start}>START</button>}
      <StopwatchDisplay currentTime={getCurrentTime()} />
    </div>
  );
};

export default Stopwatch;
1;
