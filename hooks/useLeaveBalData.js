import { useState } from 'react';

const useLeaveBalData = () => {
    const [leaveData, setLeaveData] = useState(JSON.parse(localStorage.getItem('leaveBal')) || []); 
    const [editLeaveId, setEditLeaveId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditLeaveId(id);
        setIsEditModalOpen(true);
    };

    const addLeaveBal = (newLeave) => {
        const updatedData = [...leaveData, newLeave];
        setLeaveData(updatedData);
        localStorage.setItem('leaveBal', JSON.stringify(updatedData));
    };

    const editLeaveBal = (editedLeave) => {
        const updatedData = leaveData.map((leave) =>
            leave.id === editedLeave.id ? editedLeave : leave
        );
        setLeaveData(updatedData);
        setEditLeaveId(null);
        localStorage.setItem('leaveBal', JSON.stringify(updatedData));
    };

    const deleteLeaveBal = (id) => {
        const updatedData = leaveData.filter((leave) => leave.id !== id);
        setLeaveData(updatedData);
        localStorage.setItem('leaveBal', JSON.stringify(updatedData));
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