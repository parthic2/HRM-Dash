import { useState, useEffect } from 'react';

export const useModalFormLogic = (attendanceData, editAttId) => {
    const initialFormValue = {
        name: "",
        employeeId: "",
        department: "",
        checkIn: "",
        checkOut: "",
        status: "",
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

    const validateID = (value) => {
        if (value.trim() === "") {
            return "Employee Id is required";
        } else {
            return "";
        }
    };

    const validateDepart = (value) => {
        if (value.trim() === "") {
            return "Department is required";
        } else {
            return "";
        }
    };

    const validateStatus = (value) => {
        if (value.trim() === "") {
            return "Status is required";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            employeeId: validateID(formData.employeeId),
            name: validateName(formData.name),
            department: validateDepart(formData.department),
            status: validateStatus(formData.status)
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
        if (name === "employeeId") {
            setErrors({ ...errors, [name]: validateID(value) });
        } else if (name === "name") {
            setErrors({ ...errors, [name]: validateName(value) });
        } else if (name === "department") {
            setErrors({ ...errors, [name]: validateDepart(value) });
        } else if (name === "status") {
            setErrors({ ...errors, [name]: validateStatus(value) });
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
        const selectedAttendance = attendanceData.find((att) => att.id === editAttId);
        if (selectedAttendance) {
            setFormData(selectedAttendance);
        } else {
            setFormData({
                name: "",
                employeeId: "",
                department: "",
                checkIn: "",
                checkOut: "",
                status: "",
                image: null, // Clear the image after submission
            });
        }
    }, [editAttId]);

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
