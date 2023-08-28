import { useState } from 'react';

const useLeaveReqData = () => {
    const [leaveData, setLeaveData] = useState(JSON.parse(localStorage.getItem('leave')) || []); 
    const [editLeaveId, setEditLeaveId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditLeaveId(id);
        setIsEditModalOpen(true);
    };

    const addLeaveReq = (newLeave) => {
        const updatedData = [...leaveData, newLeave];
        setLeaveData(updatedData);
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
        handleEditButtonClick
    };
};

export default useLeaveReqData;