import { useEffect, useState } from 'react';

const useLeaveReqData = () => {
    const [leaveData, setLeaveData] = useState(JSON.parse(localStorage.getItem('leave')) || []);
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

    const addLeaveReq = (newLeave) => {
        // Increment the maxId and assign it to the new employee
        const newId = maxId + 1;
        const updatedData = [...leaveData, { ...newLeave, id: newId }];
        setLeaveData(updatedData);
        setMaxId(newId);
        localStorage.setItem('leave', JSON.stringify(updatedData));
    };

    const editLeaveReq = (editedLeave) => {
        const updatedData = leaveData.map((leave) =>
            leave.id === editedLeave.id ? editedLeave : leave
        );
        setLeaveData(updatedData);
        setEditLeaveId(null);
        localStorage.setItem('leave', JSON.stringify(updatedData));
    };

    const deleteLeaveReq = (id) => {
        const updatedData = leaveData.filter((leave) => leave.id !== id);
        setLeaveData(updatedData);
        localStorage.setItem('leave', JSON.stringify(updatedData));
    };

    return {
        leaveData,
        editLeaveId,
        setEditLeaveId,
        addLeaveReq,
        editLeaveReq,
        deleteLeaveReq,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick,
        maxId
    };
};

export default useLeaveReqData;