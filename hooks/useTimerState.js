import { useState, useEffect } from 'react';

export function useTimerState() {
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
    };

    // Function to save the project and timer data
    const onSaveProject = () => {
        if (projectName && timeElapsedInSeconds > 0) {
            const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

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

            // Save to localStorage
            const updatedProjects = {
                ...savedProjects,
                [currentDate]: [...(savedProjects[currentDate] || []), newProject],
            };
            localStorage.setItem('savedProjects', JSON.stringify(updatedProjects));

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

    useEffect(() => {
        const savedProjectsFromStorage = JSON.parse(localStorage.getItem('savedProjects'));

        if (savedProjectsFromStorage) {
            setSavedProjects(savedProjectsFromStorage);
        }
    }, []);

    return {
        isTimerRunning,
        setIsTimerRunning,
        timeElapsedInSeconds,
        setTimeElapsedInSeconds,
        startTime,
        setStartTime,
        pauseTime,
        setPauseTime,
        stopTime,
        setStopTime,
        SECONDS_IN_AN_HOUR,
        renderTime,
        onKeyDown,
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
    };
}
