import { useState, useEffect } from 'react';

export const useModalFormLogic = (employeeData, editEmployeeEmail) => {
    const initialFormValue = {
        name: "",
        email: "",
        number: "",
        designation: "",
        joiningDate: "",
        salary: "",
        image: null // To store the selected image
    };

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

    const validateEmail = (value) => {
        if (value.trim() === "") {
            return "Email Address is required";
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(value)) {
            return "Invalid email address";
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

    const validateDes = (value) => {
        if (value.trim() === "") {
            return "Designation is required";
        } else {
            return "";
        }
    };

    const validateJoinDate = (value) => {
        if (value.trim() === "") {
            return "Joining date is required";
        } else {
            return "";
        }
    };

    const validateSalary = (value) => {
        if (value.trim() === "") {
            return "Salary is required";
        } else if (!/^[0-9]+$/.test(value)) {
            return "Salary must be a number";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            name: validateName(formData.name),
            email: validateEmail(formData.email),
            number: validateNumber(formData.number),
            designation: validateDes(formData.designation),
            joiningDate: validateJoinDate(formData.joiningDate),
            salary: validateSalary(formData.salary),
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
        } else if (name === "email") {
            setErrors({ ...errors, [name]: validateEmail(value) });
        } else if (name === "number") {
            setErrors({ ...errors, [name]: validateNumber(value) });
        } else if (name === "designation") {
            setErrors({ ...errors, [name]: validateDes(value) });
        } else if (name === "joiningDate") {
            setErrors({ ...errors, [name]: validateJoinDate(value) });
        } else if (name === "salary") {
            setErrors({ ...errors, [name]: validateSalary(value) });
        }
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
        handleInputBlur,
        handleInputChange,
        handleImageChange,
    };
};
