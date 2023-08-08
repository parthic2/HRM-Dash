import { useState } from 'react';

const useDepartmentData = (initialData) => {
    const [department, setDepartment] = useState(initialData); // State to hold form data
    const [editDepartmentName, setEditDepartmentName] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (name) => {
        setEditDepartmentName(name);
        setIsEditModalOpen(true);
    };

    const addDepartment = (newDepartment) => {
        setDepartment([...department, newDepartment]);
    };

    const editDepartment = (editedDepartment) => {
        const updatedData = department.map((dept) =>
            dept.name === editedDepartment.name ? editedDepartment : dept
        );
        setDepartment(updatedData);
        setEditDepartmentName(null);
    };

    const deleteDepartment = (name) => {
        const updatedData = department.filter((dept) => dept.name !== name);
        setDepartment(updatedData);
    };

    return {
        department,
        editDepartmentName,
        setEditDepartmentName,
        addDepartment,
        editDepartment,
        deleteDepartment,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useDepartmentData;