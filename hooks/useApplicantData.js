import { useState } from 'react';

const useApplicantData = () => {
    const [applicantData, setApplicantData] = useState(JSON.parse(localStorage.getItem('Applicant')) || []);
    const [editAppliId, setEditAppliId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditAppliId(id);
        setIsEditModalOpen(true);
    };

    const addApplicant = (newAppli) => {
        const updatedData = [...applicantData, newAppli];
        setApplicantData(updatedData);
        localStorage.setItem('Applicant', JSON.stringify(updatedData));
    };

    const editApplicant = (editedAppli) => {
        const updatedData = applicantData.map((req) =>
            req.id === editedAppli.id ? editedAppli : req
        );
        setApplicantData(updatedData);
        setEditAppliId(null);
        localStorage.setItem('Applicant', JSON.stringify(updatedData));
    };

    const deleteApplicant = (id) => {
        const updatedData = applicantData.filter((req) => req.id !== id);
        setApplicantData(updatedData);
        localStorage.setItem('Applicant', JSON.stringify(updatedData));
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