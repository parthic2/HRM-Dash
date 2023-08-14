import { useTimerState } from 'hooks/useTimerState';
import React from 'react';
import ConfirmationModal from './ConfirmationModal';
import ProjectTable from './ProjectTable';
import { FormSelect } from 'widgets';
import { Form } from 'react-bootstrap';
import { totalProjectName } from 'data/options/options';

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

  const currentDate = new Date();
  const currentDateString = currentDate.toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

  return (
    <>
      <div className="col-sm-6">
        <div className="col-md-12 col-12">
          {showProjectInput ? (
            <Form.Control
              className="form-control"
              placeholder="Project Name"
              id="name"
              name="name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              as={FormSelect}
              options={totalProjectName}
            />
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
        {currentDateString in savedProjects && (
          <ProjectTable currentDateString={currentDateString} savedProjects={savedProjects} />
        )}
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