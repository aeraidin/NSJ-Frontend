import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialTime: number;
  onComplete: () => void;
  reset: boolean;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime,
  onComplete,
  reset,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(initialTime);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (reset) {
      setRemainingTime(initialTime);
    } else if (remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onComplete();
    }

    return () => clearInterval(timer);
  }, [remainingTime, onComplete, reset, initialTime]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return (
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
    );
  };

  return (
    <div className="flex items-center justify-center">
      <span className="text-gray-300">{formatTime(remainingTime)}</span>
    </div>
  );
};

export default CountdownTimer;
