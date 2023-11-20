import { useEffect, useState } from 'react';

const useReqData = () => {
    const [reqData, setReqData] = useState(JSON.parse(localStorage.getItem('requirement')) || []);
    const [editReqId, setEditReqId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = reqData.reduce((maxId, req) => Math.max(maxId, req.id), 0);
        setMaxId(maxExistingId);
    }, [reqData]);

    const handleEditButtonClick = (id) => {
        setEditReqId(id);
        setIsEditModalOpen(true);
    };

    const addRequirement = (newReq) => {
        // Increment the maxId and assign it to the new employee
        const newId = maxId + 1;
        const updatedData = [...reqData, { ...newReq, id: newId }];
        setReqData(updatedData);
        setMaxId(newId);
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
        handleEditButtonClick,
        maxId
    };
};

export default useReqData;