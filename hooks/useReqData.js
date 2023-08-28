import { useState } from 'react';

const useReqData = () => {
    const [reqData, setReqData] = useState(JSON.parse(localStorage.getItem('requirement')) || []);
    const [editReqId, setEditReqId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditReqId(id);
        setIsEditModalOpen(true);
    };

    const addRequirement = (newReq) => {
        const updatedData = [...reqData, newReq];
        setReqData(updatedData);
        localStorage.setItem('requirement', JSON.stringify(updatedData));
    };

    const editRequirement = (editedReq) => {
        const updatedData = reqData.map((req) =>
            req.id === editedReq.id ? editedReq : req
        );
        setReqData(updatedData);
        setEditReqId(null);
        localStorage.setItem('requirement', JSON.stringify(updatedData));
    };

    const deleteRequirement = (id) => {
        const updatedData = reqData.filter((req) => req.id !== id);
        setReqData(updatedData);
        localStorage.setItem('requirement', JSON.stringify(updatedData));
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