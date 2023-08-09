import { useState } from 'react';

const useApplicantData = (initialData) => {
    const [applicantData, setApplicantData] = useState(initialData); // State to hold form data
    const [editAppliId, setEditAppliId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditAppliId(id);
        setIsEditModalOpen(true);
    };

    const addApplicant = (newAppli) => {
        setApplicantData([...applicantData, newAppli]);
    };

    const editApplicant = (editedAppli) => {
        const updatedData = applicantData.map((req) =>
            req.id === editedAppli.id ? editedAppli : req
        );
        setApplicantData(updatedData);
        setEditAppliId(null);
    };

    const deleteApplicant = (id) => {
        const updatedData = applicantData.filter((req) => req.id !== id);
        setApplicantData(updatedData);
    };

    return {
        applicantData,
        editAppliId,
        setEditAppliId,
        addApplicant,
        editApplicant,
        deleteApplicant,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useApplicantData;