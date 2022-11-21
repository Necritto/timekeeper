import React from "react";

import { StopwatchDisplayPropsInterface } from "types/components/stopwatch";

import { DisplayWrapper, Digit, ColoredDigit } from "./styles";

const StopwatchDisplay: React.FC<StopwatchDisplayPropsInterface> = ({ currentTime: { hours, minutes, seconds } }) => {
  return (
    <DisplayWrapper>
      <Digit>{hours}&nbsp;:&nbsp;</Digit>
      <Digit>{minutes}&nbsp;:&nbsp;</Digit>
      <ColoredDigit>{seconds}</ColoredDigit>
    </DisplayWrapper>
  );
};

export default React.memo(StopwatchDisplay);
