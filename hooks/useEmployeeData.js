import axios from 'axios';
import { bloodGroupMapping, genderMapping, roleMapping, statusMapping } from 'data/options/options';
import { useEffect, useState } from 'react';

const useEmployeeData = () => {
    const [employeeData, setEmployeeData] = useState(JSON.parse(localStorage.getItem('employees')) || []);
    const [editEmployeeEmail, setEditEmployeeEmail] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);
    const authToken = JSON.parse(localStorage.getItem('login-details'));

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = employeeData.reduce((maxId, employee) => Math.max(maxId, employee.id), 0);
        setMaxId(maxExistingId);
    }, [employeeData]);

    const handleEditButtonClick = (email) => {
        setEditEmployeeEmail(email);
        setIsEditModalOpen(true);
    };

    const addEmployee = async (newEmployee) => {
        try {
            // Convert numeric value using the mapping
            const roleNumericValue = roleMapping[newEmployee.role.trim().toLowerCase()];
            const genderNumericValue = genderMapping[newEmployee.gender.trim().toLowerCase()];
            const statusNumericValue = statusMapping[newEmployee.status.trim().toLowerCase()];
            const bloodGroupNumericValue = bloodGroupMapping[newEmployee.blood_group.trim().toLowerCase()];

            // Make a POST request to the API endpoint with the authorization token in the headers
            const response = await axios.post("https://hrm.stackholic.io/api/employee/store", {
                ...newEmployee,
                role: roleNumericValue,
                status: statusNumericValue,
                gender: genderNumericValue,
                blood_group: bloodGroupNumericValue
            }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${authToken.token}`,
                },
            });

            const newId = maxId + 1;
            const addedEmployee = response.data;
            const updatedData = [...employeeData, addedEmployee];
            setEmployeeData(updatedData);
            setMaxId(newId);
            setIsEditModalOpen(false);
        } catch (error) {
            console.error("Error Adding Employee:", error);
        }
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