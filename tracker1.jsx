import React, { useState, useEffect } from 'react';
import { Button, Card, Modal, Table } from 'react-bootstrap';

const Tracker = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeElapsedInSeconds, setTimeElapsedInSeconds] = useState(0);
  const [projectName, setProjectName] = useState("");
  const [savedProjects, setSavedProjects] = useState([]); // To store saved project data
  const [showProjectInput, setShowProjectInput] = useState(false); // State to control project input visibility
  const [showConfirm, setShowConfirm] = useState(false); // State to control the confirmation popup
  const [startTime, setStartTime] = useState(null);
  const [pauseTime, setPauseTime] = useState(null);
  const [stopTime, setStopTime] = useState(null);
  const SECONDS_IN_AN_HOUR = 3600;

  // Effect to handle timer updates
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

  // Function to render time in HH:MM:SS format
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

  // Function to handle Enter key press in the project name input field
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowConfirm(true);
    }
  };

  // Function to handle canceling the confirmation
  const onCancelConfirm = () => {
    setShowConfirm(false);
    setShowProjectInput(false); // Hide the project name input field
    setProjectName(""); // Clear the project name
  };

  // Function to start the timer
  const onStartTimer = () => {
    setIsTimerRunning(true);
    setStartTime(new Date());
  };

  // Function to pause the timer
  const onPauseTimer = () => {
    setIsTimerRunning(false);
    setPauseTime(new Date());
  }

  // Function to handle stopping the timer
  const onStopTimer = () => {
    setShowProjectInput(true); // Show the project name input field
    setStopTime(new Date());

    // if (projectName) {
    //   setShowConfirm(true); // Show the confirmation popup
    // }

    // if (showProjectInput) {
    //   const shouldStop = window.confirm("Are you sure you want to stop the timer and save the data?");

    //   if (shouldStop) {
    //     clearInterval();
    //     setIsTimerRunning(false);
    //     onSaveProject();
    //   }
    // } else {
    //   setShowProjectInput(true);
    // }
  };

  // Function to save the project and timer data
  const onSaveProject = () => {
    if (projectName && timeElapsedInSeconds > 0) {
      const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

      // const elapsedTimeInSeconds = Math.floor((stopTime - startTime) / 1000);

      const hours = Math.floor(timeElapsedInSeconds / 3600);
      const minutes = Math.floor((timeElapsedInSeconds % 3600) / 60);
      const seconds = Math.floor(timeElapsedInSeconds % 60);

      const newProject = {
        projectName: projectName,
        startTime: startTime.toLocaleTimeString(),
        pauseTime: pauseTime ? pauseTime.toLocaleTimeString() : "",
        stopTime: stopTime.toLocaleTimeString(),
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      };

      setSavedProjects(prevProjects => {
        return {
          ...prevProjects,
          [currentDate]: [...(prevProjects[currentDate] || []), newProject],
        };
      });

      setProjectName("");
      setTimeElapsedInSeconds(0);
      setShowProjectInput(false);
      setShowConfirm(false);
      setIsTimerRunning(false);
      setStartTime(null);
      setPauseTime(null);
      setStopTime(null);
    }
  };

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
                onKeyDown={onKeyDown}
              />
              <p>Please enter the project name and hit enter</p>
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
                <Card>
                  <Table responsive className="text-nowrap mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Date</th>
                        <th>Project Name</th>
                        <th>Start Time</th>
                        <th>Pause Time</th>
                        <th>Stop Time</th>
                        <th>Hours</th>
                        <th>Minutes</th>
                        <th>Seconds</th>
                      </tr>
                    </thead>
                    <tbody>
                      {savedProjects[date].map((project, index) => (
                        <tr key={index}>
                          <td>{date}</td>
                          <td className="align-middle">{project.projectName}</td>
                          <td className="align-middle">{project.startTime}</td>
                          <td className="align-middle">{project.pauseTime || "-"}</td>
                          <td className="align-middle">{project.stopTime}</td>
                          <td className="align-middle">{project.hours} hours</td>
                          <td className="align-middle">{project.minutes} minutes</td>
                          <td className="align-middle">{project.seconds} seconds</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card>
              </div>
            );
          }
          return null; // Exclude projects from other months
        })}
        {/* {Object.keys(savedProjects).map(date => (
          <div key={date}>
            <Card>
              <Table responsive className="text-nowrap mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Project Name</th>
                    <th>Start Time</th>
                    <th>Pause Time</th>
                    <th>Stop Time</th>
                    <th>Hours</th>
                    <th>Minutes</th>
                    <th>Seconds</th>
                  </tr>
                </thead>
                <tbody>
                  {savedProjects[date].map((project, index) => (
                    <tr key={index}>
                      <td>{date}</td>
                      <td className="align-middle">{project.projectName}</td>
                      <td className="align-middle">{project.startTime}</td>
                      <td className="align-middle">{project.pauseTime || "-"}</td>
                      <td className="align-middle">{project.stopTime}</td>
                      <td className="align-middle">{project.hours} hours</td>
                      <td className="align-middle">{project.minutes} minutes</td>
                      <td className="align-middle">{project.seconds} seconds</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </div>
        ))} */}
      </div>
      {showConfirm && (
        <Modal
          style={{ paddingLeft: "0px" }}
          size="md"
          show={showConfirm}
          onHide={() => setShowConfirm(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className="popup">
              <div className="popup-content">
                <p>Are you sure you want to stop the timer and save the data?</p>
                <Button variant="primary" type="button" onClick={onSaveProject}>
                  Save
                </Button>
                <Button variant="light" style={{ marginLeft: "10px" }} onClick={onCancelConfirm}>
                  Cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  )
}

export default Tracker;