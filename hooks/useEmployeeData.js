import { useEffect, useState } from 'react';

const useEmployeeData = () => {
    const [employeeData, setEmployeeData] = useState(JSON.parse(localStorage.getItem('employees')) || []);
    const [editEmployeeEmail, setEditEmployeeEmail] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = employeeData.reduce((maxId, employee) => Math.max(maxId, employee.id), 0);
        setMaxId(maxExistingId);
    }, [employeeData]);

    const handleEditButtonClick = (email) => {
        setEditEmployeeEmail(email);
        setIsEditModalOpen(true);
    };

    const addEmployee = (newEmployee) => {
        // Increment the maxId and assign it to the new employee
        const newId = maxId + 1;
        const updatedData = [...employeeData, { ...newEmployee, id: newId }];
        setEmployeeData(updatedData);
        setMaxId(newId); // Update the maxId
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
        handleEditButtonClick,
        maxId
    };
};

export default useEmployeeData;