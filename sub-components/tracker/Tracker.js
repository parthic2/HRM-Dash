import React, { useState, useEffect } from 'react';

const Tracker = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState(0);
  const SECONDS_IN_AN_HOUR = 3600;

  useEffect(() => {
    let timeInterval;

    if (isTimerRunning) {
      timeInterval = setInterval(() => {
        setTimeElapsedInSeconds(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timeInterval);
    }

    return () => {
      clearInterval(timeInterval);
    };
  }, [isTimerRunning]);

  const renderTime = () => {
    const hours = Math.floor(timeElapsedInSeconds / SECONDS_IN_AN_HOUR);
    const minutes = Math.floor((timeElapsedInSeconds % SECONDS_IN_AN_HOUR) / 60);
    const seconds = Math.floor(timeElapsedInSeconds % 60);

    const paddedHours = hours < 10 ? `0${hours}` : hours;
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
  };

  const time = renderTime();

  const onResetTimer = () => {
    clearInterval();
    setIsTimerRunning(false);
    setTimeElapsedInSeconds(0);
  };

  const onStopTimer = () => {
    clearInterval();
    setIsTimerRunning(false);
  };

  const onStartTimer = () => {
    setIsTimerRunning(true);
  };

  return (
    <div className="col-sm-6">
      <div className="timer-container">
        <div className="timer">
          <img
            className="timer-image"
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <span className="heading">Timer</span>
        </div>
        <h2 className="stopwatch-timer">{time}</h2>
        <div className="timer-buttons">
          <button
            type="button"
            className="start-button button"
            onClick={onStartTimer}
            disabled={isTimerRunning}
          >
            Start
          </button>
          <button
            type="button"
            className="stop-button button"
            onClick={onStopTimer}
          >
            Stop
          </button>
          <button
            type="button"
            className="reset-button button"
            onClick={onResetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tracker;