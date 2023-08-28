import { useState } from 'react';

const useAttendanceData = () => {
    const [attendanceData, setAttendanceData] = useState(JSON.parse(localStorage.getItem('attendance')) || []);
    const [editAttId, setAttId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setAttId(id);
        setIsEditModalOpen(true);
    };

    const addAttendance = (newAtt) => {
        const updatedData = [...attendanceData, newAtt];
        setAttendanceData(updatedData);
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
        handleEditButtonClick
    };
};

export default useAttendanceData;