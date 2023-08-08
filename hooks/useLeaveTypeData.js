import { useState } from 'react';

const useLeaveTypeData = (initialData) => {
    const [leaveData, setLeaveData] = useState(initialData); // State to hold form data
    const [editLeaveName, setEditLeaveName] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (name) => {
        setEditLeaveName(name);
        setIsEditModalOpen(true);
    };

    const addLeaveType = (newLeave) => {
        setLeaveData([...leaveData, newLeave]);
    };

    const editLeave = (editedLeave) => {
        const updatedData = leaveData.map((leave) =>
            leave.name === editedLeave.name ? editedLeave : leave
        );
        setLeaveData(updatedData);
        setEditLeaveName(null);
    };

    const deleteLeaveType = (name) => {
        const updatedData = leaveData.filter((leave) => leave.name !== name);
        setLeaveData(updatedData);
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