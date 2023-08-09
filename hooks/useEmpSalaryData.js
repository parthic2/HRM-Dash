import { useState } from 'react';

const useEmpSalaryData = (initialData) => {
    const [employeeData, setEmployeeData] = useState(initialData);
    const [editEmployeeEmail, setEditEmployeeEmail] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (email) => {
        setEditEmployeeEmail(email);
        setIsEditModalOpen(true);
    };

    const addEmpSalary = (newEmployee) => {
        setEmployeeData([...employeeData, newEmployee]);
    };

    const editEmpSalary = (editedEmployee) => {
        const updatedData = employeeData.map((employee) =>
            employee.email === editedEmployee.email ? editedEmployee : employee
        );
        setEmployeeData(updatedData);
        setEditEmployeeEmail(null);
    };

    const deleteEmpSalary = (email) => {
        const updatedData = employeeData.filter((employee) => employee.email !== email);
        setEmployeeData(updatedData);
    };

    return {
        employeeData,
        editEmployeeEmail,
        setEditEmployeeEmail,
        addEmpSalary,
        editEmpSalary,
        deleteEmpSalary,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useEmpSalaryData;