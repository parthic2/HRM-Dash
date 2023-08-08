import { useState } from 'react';

const useReqData = (initialData) => {
    const [reqData, setReqData] = useState(initialData); // State to hold form data
    const [editReqId, setEditReqId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditReqId(id);
        setIsEditModalOpen(true);
    };

    const addRequirement = (newReq) => {
        setReqData([...reqData, newReq]);
    };

    const editRequirement = (editedReq) => {
        const updatedData = reqData.map((req) =>
            req.id === editedReq.id ? editedReq : req
        );
        setReqData(updatedData);
        setEditReqId(null);
    };

    const deleteRequirement = (id) => {
        const updatedData = reqData.filter((req) => req.id !== id);
        setReqData(updatedData);
    };

    return {
        reqData,
        editReqId,
        setEditReqId,
        addRequirement,
        editRequirement,
        deleteRequirement,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useReqData;