import { useEffect, useState } from 'react';

const useApplicantData = () => {
    const [applicantData, setApplicantData] = useState(JSON.parse(localStorage.getItem('Applicant')) || []);
    const [editAppliId, setEditAppliId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = applicantData.reduce((maxId, appli) => Math.max(maxId, appli.id), 0);
        setMaxId(maxExistingId);
    }, [applicantData]);


    const handleEditButtonClick = (id) => {
        setEditAppliId(id);
        setIsEditModalOpen(true);
    };

    const addApplicant = (newAppli) => {
         // Increment the maxId and assign it to the new employee
         const newId = maxId + 1;
        const updatedData = [...applicantData, { ...newAppli, id: newId }];
        setApplicantData(updatedData);
        setMaxId(newId);
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
        handleEditButtonClick,
        maxId
    };
};

export default useApplicantData;