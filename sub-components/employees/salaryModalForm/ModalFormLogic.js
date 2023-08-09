import { useState, useEffect } from 'react';

export const useModalFormLogic = (employeeData, editEmployeeEmail) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        designation: "",
        joiningDate: "",
        salary: "",
        image: null // To store the selected image
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        number: "",
        designation: "",
        joiningDate: "",
        salary: "",
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Name should contain only characters";
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }

        if (!formData.number.trim()) {
            newErrors.number = 'Mobile number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(formData.number)) {
            newErrors.number = "Contact Number must be a 10-digit number";
            valid = false;
        }

        if (!formData.designation.trim()) {
            newErrors.designation = 'Designation is required';
            valid = false;
        }

        if (!formData.joiningDate.trim()) {
            newErrors.joiningDate = 'Joining date is required';
            valid = false;
        }

        if (!formData.salary.trim()) {
            newErrors.salary = 'Salary is required';
            valid = false;
        } else if (!/^[0-9]+$/.test(formData.salary)) {
            newErrors.salary = "Salary must be a number";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (files) => {
        setFormData({
            ...formData,
            image: files[0] // Store the selected image
        });
    };

    useEffect(() => {
        const selectedEmployee = employeeData.find((employee) => employee.email === editEmployeeEmail);
        if (selectedEmployee) {
            setFormData(selectedEmployee);
        } else {
            setFormData({
                name: "",
                email: "",
                number: "",
                designation: "",
                joiningDate: "",
                salary: "",
                image: null, // Clear the image after submission
            });
        }
    }, [editEmployeeEmail]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputChange,
        handleImageChange,
    };
};
