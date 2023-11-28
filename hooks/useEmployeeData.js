import axios from 'axios';
import { bloodGroupMapping, genderMapping, roleMapping, statusMapping } from 'data/options/options';
import { useEffect, useState } from 'react';

const useEmployeeData = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [maxId, setMaxId] = useState(0);
  const authToken = JSON.parse(localStorage.getItem('login-details'));

  // Helper function to handle unexpected mappings
  const getMappedValue = (value, mapping) => mapping[value.trim().toLowerCase()] || value;

  const fetchData = async () => {
    try {
      // const numericRole = roleMapping["hr"];
      const response = await axios.post("https://hrm.stackholic.io/api/employee/list", {
        // role: numericRole,
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken.token}`,
        },
      });
      const data = response.data.data || [];
      console.log(data);
      setEmployeeData(data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [authToken.token]);

  useEffect(() => {
    // Calculate the maximum ID from the existing data
    const maxExistingId = employeeData.reduce((maxId, employee) => Math.max(maxId, employee.id), 0);
    setMaxId(maxExistingId);
  }, [employeeData]);

  const handleEditButtonClick = (id) => {
    setEditEmployeeId(id);
    setIsEditModalOpen(true);
  };

  const addEmployee = async (newEmployee) => {
    try {
      const roleNumericValue = getMappedValue(newEmployee.role, roleMapping);
      const genderNumericValue = getMappedValue(newEmployee.gender, genderMapping);
      const statusNumericValue = getMappedValue(newEmployee.status, statusMapping);
      const bloodGroupNumericValue = getMappedValue(newEmployee.blood_group, bloodGroupMapping);

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

      // Check the success status from the API response
      if (response.data.success) {
        // Instead of relying on the previous state, you can use the response data directly
        const addedEmployee = response.data;
        setEmployeeData((prevData) => [...prevData, addedEmployee]);
        setMaxId((prevMaxId) => prevMaxId + 1);
        setIsEditModalOpen(false);

        fetchData();
      } else {
        console.error("Error editing employee:", response.data.message);
      }
    } catch (error) {
      console.error("Error Adding Employee:", error);
    }
  };

  const editEmployee = async (editedEmployee, id) => {
    console.log(id)
    try {
      // if (!authToken || !authToken.token) {
      //   console.error("Authentication token not found.");
      //   return;
      // }

      const response = await axios.post(`https://hrm.stackholic.io/api/employee/store`, {
        editedEmployee,
        id
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken.token}`,
        },
      });

      // Check the success status from the API response
      if (response.data.success) {
        // Update the local state to reflect the changes
        const updatedData = employeeData.map((employee) =>
          employee.id === editedEmployee.id ? editedEmployee : employee
        );
        setEmployeeData(updatedData);
        setEditEmployeeId(null); // Reset the edit state
      } else {
        console.error("Error editing employee:", response.data.message);
      }
    } catch (error) {
      console.error("Error editing employee:", error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      // if (!authToken || !authToken.token) {
      //   console.error("Authentication token not found.");
      //   return;
      // }

      const response = await axios.post("https://hrm.stackholic.io/api/employee/delete", {
        id
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken.token}`,
        },
      });

      // Check the success status from the API response
      if (response.data.success) {
        // Update the local state to reflect the deletion
        const updatedData = employeeData.filter(
          (employee) => employee.id !== id
        );
        setEmployeeData(updatedData);
      } else {
        console.error("Error deleting employee:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return {
    employeeData,
    editEmployeeId,
    addEmployee,
    editEmployee,
    deleteEmployee,
    isEditModalOpen,
    setIsEditModalOpen,
    handleEditButtonClick,
    maxId,
  };
};

export default useEmployeeData;