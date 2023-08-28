import { useState } from 'react';

const useEmployeeData = () => {
    const [employeeData, setEmployeeData] = useState(JSON.parse(localStorage.getItem('employees')) || []);
    const [editEmployeeEmail, setEditEmployeeEmail] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (email) => {
        setEditEmployeeEmail(email);
        setIsEditModalOpen(true);
    };

    const addEmployee = (newEmployee) => {
        const updatedData = [...employeeData, newEmployee];
        setEmployeeData(updatedData);
        localStorage.setItem('employees', JSON.stringify(updatedData));
    };

    const editEmployee = (editedEmployee) => {
        const updatedData = employeeData.map((employee) =>
            employee.email === editedEmployee.email ? editedEmployee : employee
        );
        setEmployeeData(updatedData);
        setEditEmployeeEmail(null);
        localStorage.setItem('employees', JSON.stringify(updatedData));
    };

    const deleteEmployee = (email) => {
        const updatedData = employeeData.filter((employee) => employee.email !== email);
        setEmployeeData(updatedData);
        localStorage.setItem('employees', JSON.stringify(updatedData));
    };

    return {
        employeeData,
        editEmployeeEmail,
        setEditEmployeeEmail,
        addEmployee,
        editEmployee,
        deleteEmployee,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useEmployeeData;