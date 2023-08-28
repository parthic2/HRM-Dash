import { useState } from 'react';

const useDepartmentData = () => {
    const [department, setDepartment] = useState(JSON.parse(localStorage.getItem('department')) || []);
    const [editDepartmentName, setEditDepartmentName] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (name) => {
        setEditDepartmentName(name);
        setIsEditModalOpen(true);
    };

    const addDepartment = (newDepartment) => {
        const updatedData = [...department, newDepartment];
        setDepartment(updatedData);
        localStorage.setItem('department', JSON.stringify(updatedData));
    };

    const editDepartment = (editedDepartment) => {
        const updatedData = department.map((dept) =>
            dept.name === editedDepartment.name ? editedDepartment : dept
        );
        setDepartment(updatedData);
        setEditDepartmentName(null);
        localStorage.setItem('department', JSON.stringify(updatedData));
    };

    const deleteDepartment = (name) => {
        const updatedData = department.filter((dept) => dept.name !== name);
        setDepartment(updatedData);
        localStorage.setItem('department', JSON.stringify(updatedData));
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