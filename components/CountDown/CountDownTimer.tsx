import React from "react";
import Countdown from "react-countdown";

interface CountdownTimerProps {
  seconds: number;
  onTimeout: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  seconds,
  onTimeout,
}) => {
  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  return (
    <Countdown
      date={Date.now() + seconds * 1000}
      onComplete={onTimeout}
      renderer={({ minutes, seconds, completed }) => {
        return (
          <div>
            <p className="text-gray-300">
              {formatTime(minutes)}:{formatTime(seconds)}
            </p>
          </div>
        );
      }}
    />
  );
};

export default CountdownTimer;
