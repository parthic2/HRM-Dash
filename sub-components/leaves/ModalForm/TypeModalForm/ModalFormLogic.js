import { useState, useEffect } from 'react';

export const useModalFormLogic = (leaveData, editLeaveName) => {
    const initialFormValue = {
        name: "",
        type: "",
        status: ""
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

    const validateType = (value) => {
        if (value.trim() === "") {
            return "Leave type is required";
        } else {
            return "";
        }
    };

    const validateStatus = (value) => {
        if (value === "" || value === "select status") {
            return "Leave status is required";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            name: validateName(formData.name),
            type: validateType(formData.type),
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
        if (name === "name") {
            setErrors({ ...errors, [name]: validateName(value) });
        } else if (name === "type") {
            setErrors({ ...errors, [name]: validateType(value) });
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

    useEffect(() => {
        const selectedLeave = leaveData.find((leave) => leave.name === editLeaveName);
        if (selectedLeave) {
            setFormData(selectedLeave);
        } else {
            setFormData({
                name: "",
                type: "",
                status: ""
            });
        }
    }, [editLeaveName]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputBlur,
        handleInputChange,
    };
};
