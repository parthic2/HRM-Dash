import { useState, useEffect } from 'react';

export const useModalFormLogic = (leaveData, editLeaveName) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        status: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        status: ""
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Name should contain only characters.";
            valid = false;
        }

        if (!formData.type.trim()) {
            newErrors.type = 'Leave type is required';
            valid = false;
        }

        if (!formData.status.trim()) {
            newErrors.status = 'Leave status is required';
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
        handleInputChange,
    };
};
