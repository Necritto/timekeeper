import React from "react";

import { StopwatchDisplayProps } from "types/stopwatch";

const StopwatchDisplay: React.FC<StopwatchDisplayProps> = ({ currentTime }) => {
  return (
    <div>
      <span>
        {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds};
      </span>
    </div>
  );
};

export default React.memo(StopwatchDisplay);
