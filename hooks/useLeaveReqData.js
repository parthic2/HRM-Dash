import { useState } from 'react';

const useLeaveReqData = (initialData) => {
    const [leaveData, setLeaveData] = useState(initialData); // State to hold form data
    const [editLeaveId, setEditLeaveId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditLeaveId(id);
        setIsEditModalOpen(true);
    };

    const addLeaveReq = (newLeave) => {
        setLeaveData([...leaveData, newLeave]);
    };

    const editLeaveReq = (editedLeave) => {
        const updatedData = leaveData.map((leave) =>
            leave.id === editedLeave.id ? editedLeave : leave
        );
        setLeaveData(updatedData);
        setEditLeaveId(null);
    };

    const deleteLeaveReq = (id) => {
        const updatedData = leaveData.filter((leave) => leave.id !== id);
        setLeaveData(updatedData);
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