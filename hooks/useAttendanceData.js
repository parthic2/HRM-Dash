import { useState } from 'react';

const useAttendanceData = (initialData) => {
    const [attendanceData, setAttendanceData] = useState(initialData);
    const [editAttId, setAttId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setAttId(id);
        setIsEditModalOpen(true);
    };

    const addAttendance = (newAtt) => {
        setAttendanceData([...attendanceData, newAtt]);
    };

    const editAttendance = (editedAtt) => {
        const updatedData = attendanceData.map((attendance) =>
            attendance.id === editedAtt.id ? editedAtt : attendance
        );
        setAttendanceData(updatedData);
        setAttId(null);
    };

    const deleteAttendance = (id) => {
        const updatedData = attendanceData.filter((attendance) => attendance.id !== id);
        setAttendanceData(updatedData);
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