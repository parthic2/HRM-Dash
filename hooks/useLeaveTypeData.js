import { useState } from 'react';

const useLeaveTypeData = () => {
    const [leaveData, setLeaveData] = useState(JSON.parse(localStorage.getItem('leaveType')) || []);
    const [editLeaveName, setEditLeaveName] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (name) => {
        setEditLeaveName(name);
        setIsEditModalOpen(true);
    };

    const addLeaveType = (newLeave) => {
        const updatedData = [...leaveData, newLeave];
        setLeaveData(updatedData);
        localStorage.setItem('leaveType', JSON.stringify(updatedData));
    };

    const editLeave = (editedLeave) => {
        const updatedData = leaveData.map((leave) =>
            leave.name === editedLeave.name ? editedLeave : leave
        );
        setLeaveData(updatedData);
        setEditLeaveName(null);
        localStorage.setItem('leaveType', JSON.stringify(updatedData));
    };

    const deleteLeaveType = (name) => {
        const updatedData = leaveData.filter((leave) => leave.name !== name);
        setLeaveData(updatedData);
        localStorage.setItem('leaveType', JSON.stringify(updatedData));
    };

    return {
        leaveData,
        editLeaveName,
        setEditLeaveName,
        addLeaveType,
        editLeave,
        deleteLeaveType,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useLeaveTypeData;