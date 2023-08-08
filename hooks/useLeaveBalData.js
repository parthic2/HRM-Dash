import { useState } from 'react';

const useLeaveBalData = (initialData) => {
    const [leaveData, setLeaveData] = useState(initialData); // State to hold form data
    const [editLeaveId, setEditLeaveId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditLeaveId(id);
        setIsEditModalOpen(true);
    };

    const addLeaveBal = (newLeave) => {
        setLeaveData([...leaveData, newLeave]);
    };

    const editLeaveBal = (editedLeave) => {
        const updatedData = leaveData.map((leave) =>
            leave.id === editedLeave.id ? editedLeave : leave
        );
        setLeaveData(updatedData);
        setEditLeaveId(null);
    };

    const deleteLeaveBal = (id) => {
        const updatedData = leaveData.filter((leave) => leave.id !== id);
        setLeaveData(updatedData);
    };

    return {
        leaveData,
        editLeaveId,
        setEditLeaveId,
        addLeaveBal,
        editLeaveBal,
        deleteLeaveBal,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useLeaveBalData;