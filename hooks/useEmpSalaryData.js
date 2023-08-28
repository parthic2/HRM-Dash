import { useState } from 'react';

const useEmpSalaryData = () => {
    const [employeeData, setEmployeeData] = useState(JSON.parse(localStorage.getItem('employeeSalary')) || []);
    const [editEmployeeEmail, setEditEmployeeEmail] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (email) => {
        setEditEmployeeEmail(email);
        setIsEditModalOpen(true);
    };

    const addEmpSalary = (newEmployee) => {
        const updatedData = [...employeeData, newEmployee];
        setEmployeeData(updatedData);
        localStorage.setItem('employeeSalary', JSON.stringify(updatedData));
    };

    const editEmpSalary = (editedEmployee) => {
        const updatedData = employeeData.map((employee) =>
            employee.email === editedEmployee.email ? editedEmployee : employee
        );
        setEmployeeData(updatedData);
        setEditEmployeeEmail(null);
        localStorage.setItem('employeeSalary', JSON.stringify(updatedData));
    };

    const deleteEmpSalary = (email) => {
        const updatedData = employeeData.filter((employee) => employee.email !== email);
        setEmployeeData(updatedData);
        localStorage.setItem('employeeSalary', JSON.stringify(updatedData));
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