import React from 'react';
import ConfirmationModal from './ConfirmationModal';
import ProjectTable from './ProjectTable';
import { useTimer } from 'context/TimerContext';

const Tracker = () => {
  const { isTimerRunning,
    setIsTimerRunning,
    onCancelConfirm,
    onStartTimer,
    onPauseTimer,
    onStopTimer,
    onSaveProject,
    showConfirm,
    time,
    projectName,
    setProjectName,
    setShowConfirm,
    projectsForCurrentMonth } = useTimer();

  const handleChange = (e) => {
    setProjectName(e.target.value);
    setIsTimerRunning(true);
    setShowConfirm(false);
  }

  return (
    <>
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
            className={`start-button button ${isTimerRunning ? "disabled-start" : ""}`}
            onClick={onStartTimer}
            disabled={isTimerRunning}
          >
            Start
          </button>
          <button
            type="button"
            className="reset-button button"
            onClick={onPauseTimer}
          >
            Pause
          </button>
          <button
            type="button"
            className={`stop-button button ${!isTimerRunning ? "disabled" : ""}`}
            onClick={onStopTimer}
            disabled={!isTimerRunning}
          >
            Stop
          </button>
        </div>
      </div>
      <div className="mt-4">
        <ProjectTable savedProjects={projectsForCurrentMonth} />
      </div>

      <ConfirmationModal
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        onSaveProject={onSaveProject}
        onCancelConfirm={onCancelConfirm}
        projectName={projectName}
        handleChange={handleChange}
        isTimerRunning={isTimerRunning}
      />
    </>
  )
}

export default Tracker;