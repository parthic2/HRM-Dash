import { useTimerState } from 'hooks/useTimerState';
import React from 'react';
import ConfirmationModal from './ConfirmationModal';
import ProjectTable from './ProjectTable';

const Tracker = () => {
  const {
    isTimerRunning,
    // onKeyDown,
    onCancelConfirm,
    onStartTimer,
    onPauseTimer,
    onStopTimer,
    onSaveProject,
    showProjectInput,
    showConfirm,
    time,
    savedProjects,
    projectName,
    setProjectName,
    setShowConfirm
  } = useTimerState();

  // const currentDate = new Date();
  // const currentDateString = currentDate.toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // Current month (0-11)
  const currentYear = currentDate.getFullYear(); // Current year

  return (
    <>
      <div className="col-sm-6">
        <div className="col-md-12 col-12">
          {showProjectInput ? (
            <>
              <input
                type="text"
                className="form-control"
                placeholder="Project Name"
                id="name"
                name="name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              // onKeyDown={onKeyDown}
              />
              {/* <p>Please enter the project name and hit enter</p> */}
            </>
          ) : null}
        </div>
      </div>
      <div className="timer-container mt-4">
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
            className="reset-button button"
            onClick={onPauseTimer}
          >
            Pause
          </button>
          <button
            type="button"
            className="stop-button button"
            onClick={onStopTimer}
          >
            Stop
          </button>
        </div>
      </div>
      <div className="mt-4">
        {Object.keys(savedProjects).map(date => {
          const projectDate = new Date(date);
          const projectMonth = projectDate.getMonth(); // Month of the saved project
          const projectYear = projectDate.getFullYear(); // Year of the saved project

          // Check if the saved project is from the current month and year
          if (projectMonth === currentMonth && projectYear === currentYear) {
            return (
              <div key={date}>
                <ProjectTable savedProjects={savedProjects} date={date} />
              </div>
            );
          }
          return null; // Exclude projects from other months
        })}


        {/* {currentDateString in savedProjects && (
          <ProjectTable currentDateString={currentDateString} savedProjects={savedProjects} />
        )} */}
      </div>

      <ConfirmationModal
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        onSaveProject={onSaveProject}
        onCancelConfirm={onCancelConfirm}
      />
    </>
  )
}

export default Tracker;