import { useState, useEffect } from 'react';

export const useModalFormLogic = (department, editDepartmentName) => {
    const initialFormValue = {
        name: "",
        headName: "",
        number: "",
        email: "",
        startingDate: "",
        totalEmp: "",
        about: "",
    }

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    const validateName = (value) => {
        if (value.trim() === "") {
            return "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Name should contain only characters";
        } else {
            return "";
        }
    };

    const validateHead = (value) => {
        if (value.trim() === "") {
            return "Head name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Head name should contain only characters";
        } else {
            return "";
        }
    };

    const validateNumber = (value) => {
        if (value.trim() === "") {
            return "Mobile number is required";
        } else if (!/^\d{10}$/.test(value)) {
            return "Mobile Number must be a 10-digit number";
        } else {
            return "";
        }
    };

    const validateEmail = (value) => {
        if (value.trim() === "") {
            return "Email Address is required";
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(value)) {
            return "Invalid email address";
        } else {
            return "";
        }
    };

    const validateStartDate = (value) => {
        if (value === "") {
            return "Starting date is required";
        } else {
            return "";
        }
    };

    const validateEmp = (value) => {
        if (value === "") {
            return "Total employee is required";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            name: validateName(formData.name),
            headName: validateHead(formData.headName),
            number: validateNumber(formData.number),
            email: validateEmail(formData.email),
            startingDate: validateStartDate(formData.startingDate),
            totalEmp: validateEmp(formData.totalEmp)
        };

        setErrors(newErrors);

        // Check if the form is valid by checking if there are no error messages
        return !Object.values(newErrors).some((error) => error !== "");
    };

    // Handle onBlur event for each input field
    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Validate the current field and set the error message
        if (name === "name") {
            setErrors({ ...errors, [name]: validateName(value) });
        } else if (name === "headName") {
            setErrors({ ...errors, [name]: validateHead(value) });
        } else if (name === "email") {
            setErrors({ ...errors, [name]: validateEmail(value) });
        } else if (name === "number") {
            setErrors({ ...errors, [name]: validateNumber(value) });
        } else if (name === "startingDate") {
            setErrors({ ...errors, [name]: validateStartDate(value) });
        } else if (name === "totalEmp") {
            setErrors({ ...errors, [name]: validateEmp(value) });
        }
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
        handleInputBlur,
        handleInputChange,
    };
};
