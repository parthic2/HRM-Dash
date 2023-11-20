import { useEffect, useState } from 'react';

const useLeaveBalData = () => {
    const [leaveData, setLeaveData] = useState(JSON.parse(localStorage.getItem('leaveBal')) || []); 
    const [editLeaveId, setEditLeaveId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = leaveData.reduce((maxId, leave) => Math.max(maxId, leave.id), 0);
        setMaxId(maxExistingId);
    }, [leaveData]);

    const handleEditButtonClick = (id) => {
        setEditLeaveId(id);
        setIsEditModalOpen(true);
    };

    const addLeaveBal = (newLeave) => {
        // Increment the maxId and assign it to the new employee
        const newId = maxId + 1;
        const updatedData = [...leaveData, { ...newLeave, id: newId }];
        setLeaveData(updatedData);
        setMaxId(newId);
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
        handleEditButtonClick,
        maxId
    };
};

export default useLeaveBalData;