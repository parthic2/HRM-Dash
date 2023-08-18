import { useState, useEffect } from 'react';

export const useModalFormLogic = (leaveData, editLeaveId) => {
    const initialFormValue = {
        name: "",
        id: "",
        doj: "",
        leaveType: "",
        entitled: "",
        utilized: "",
        balanced: "",
        forward: "",
        image: null // To store the selected image
    }

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    // Validation function for each field
    const validateName = (value) => {
        if (value.trim() === "") {
            return "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Name should contain only characters";
        } else {
            return "";
        }
    };

    const validateId = (value) => {
        if (value.trim() === "") {
            return "Employee Id is required";
        } else {
            return "";
        }
    };

    const validateJoinDate = (value) => {
        if (value.trim() === "") {
            return "Date of joining is required";
        } else {
            return "";
        }
    };

    const validateType = (value) => {
        if (value === "" || value === "select leave type") {
            return "Leave type is required";
        } else {
            return "";
        }
    };

    const validateEntitled = (value) => {
        if (value.trim() === "") {
            return "Entitled is required";
        } else if (!/^[0-9]+$/.test(value)) {
            return "Entitled must be a number";
        } else {
            return "";
        }
    };

    const validateUtilized = (value) => {
        if (value.trim() === "") {
            return "Utilized is required";
        } else if (!/^[0-9]+$/.test(value)) {
            return "Utilized must be a number";
        } else {
            return "";
        }
    };

    const validateBalanced = (value) => {
        if (value.trim() === "") {
            return "Leave balanced is required";
        } else if (!/^[0-9]+$/.test(value)) {
            return "Leave balanced must be a number";
        } else {
            return "";
        }
    };

    const validateForward = (value) => {
        if (value.trim() === "") {
            return "Forward Leave is required";
        } else if (!/^[0-9]+$/.test(value)) {
            return "Forward Leave must be a number";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            id: validateId(formData.id),
            name: validateName(formData.name),
            doj: validateJoinDate(formData.doj),
            leaveType: validateType(formData.leaveType),
            entitled: validateEntitled(formData.entitled),
            utilized: validateUtilized(formData.utilized),
            balanced: validateBalanced(formData.balanced),
            forward: validateForward(formData.forward)
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
        if (name === "id") {
            setErrors({ ...errors, [name]: validateId(value) });
        } else if (name === "name") {
            setErrors({ ...errors, [name]: validateName(value) });
        } else if (name === "doj") {
            setErrors({ ...errors, [name]: validateJoinDate(value) });
        } else if (name === "leaveType") {
            setErrors({ ...errors, [name]: validateType(value) });
        } else if (name === "entitled") {
            setErrors({ ...errors, [name]: validateEntitled(value) });
        } else if (name === "utilized") {
            setErrors({ ...errors, [name]: validateUtilized(value) });
        } else if (name === "balanced") {
            setErrors({ ...errors, [name]: validateBalanced(value) });
        } else if (name === "forward") {
            setErrors({ ...errors, [name]: validateForward(value) });
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
        const selectedLeave = leaveData.find((leave) => leave.id === editLeaveId);
        if (selectedLeave) {
            setFormData(selectedLeave);
        } else {
            setFormData({
                name: "",
                id: "",
                doj: "",
                leaveType: "",
                entitled: "",
                utilized: "",
                balanced: "",
                forward: "",
                image: null, // Clear the image after submission
            });
        }
    }, [editLeaveId]);

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
