import { useState, useEffect } from 'react';

export const useModalFormLogic = (department, editDepartmentName) => {
    const [formData, setFormData] = useState({
        name: "",
        headName: "",
        number: "",
        email: "",
        startingDate: "",
        totalEmp: "",
        about: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        headName: "",
        number: "",
        email: "",
        startingDate: "",
        totalEmp: "",
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

        if (!formData.headName.trim()) {
            newErrors.headName = 'Name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.headName)) {
            newErrors.headName = "Name should contain only characters";
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

        if (!formData.startingDate) {
            newErrors.startingDate = 'Starting date is required';
            valid = false;
        }

        if (!formData.totalEmp.trim()) {
            newErrors.totalEmp = 'Total employee is required';
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

    useEffect(() => {
        const selectedDepartment = department.find((dept) => dept.name === editDepartmentName);
        if (selectedDepartment) {
            setFormData(selectedDepartment);
        } else {
            setFormData({
                name: "",
                headName: "",
                number: "",
                email: "",
                startingDate: "",
                totalEmp: "",
                about: "",
            });
        }
    }, [editDepartmentName]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputChange,
    };
};
