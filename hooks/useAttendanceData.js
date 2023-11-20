import { useEffect, useState } from 'react';

const useAttendanceData = () => {
    const [attendanceData, setAttendanceData] = useState(JSON.parse(localStorage.getItem('attendance')) || []);
    const [editAttId, setAttId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = attendanceData.reduce((maxId, att) => Math.max(maxId, att.id), 0);
        setMaxId(maxExistingId);
    }, [attendanceData]);

    const handleEditButtonClick = (id) => {
        setAttId(id);
        setIsEditModalOpen(true);
    };

    const addAttendance = (newAtt) => {
        // Increment the maxId and assign it to the new employee
        const newId = maxId + 1;
        const updatedData = [...attendanceData, { ...newAtt, id: newId }];
        setAttendanceData(updatedData);
        setMaxId(newId);
        localStorage.setItem('attendance', JSON.stringify(updatedData));
    };

    const editAttendance = (editedAtt) => {
        const updatedData = attendanceData.map((attendance) =>
            attendance.id === editedAtt.id ? editedAtt : attendance
        );
        setAttendanceData(updatedData);
        setAttId(null);
        localStorage.setItem('attendance', JSON.stringify(updatedData));
    };

    const deleteAttendance = (id) => {
        const updatedData = attendanceData.filter((attendance) => attendance.id !== id);
        setAttendanceData(updatedData);
        localStorage.setItem('attendance', JSON.stringify(updatedData));
    };

    return {
        attendanceData,
        editAttId,
        setAttId,
        addAttendance,
        editAttendance,
        deleteAttendance,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick,
        maxId
    };
};

export default useAttendanceData;