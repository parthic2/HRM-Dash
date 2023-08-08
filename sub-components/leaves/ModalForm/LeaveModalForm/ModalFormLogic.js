import { useState, useEffect } from 'react';

export const useModalFormLogic = (leaveData, editLeaveId) => {
    const [formData, setFormData] = useState({
        name: "",
        id: "",
        doj: "",
        leaveType: "",
        entitled: "",
        utilized: "",
        balanced: "",
        forward: "",
        image: null // To store the selected image
    });

    const [errors, setErrors] = useState({
        name: "",
        id: "",
        doj: "",
        leaveType: "",
        entitled: "",
        utilized: "",
        balanced: "",
        forward: "",
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

        if (!formData.id.trim()) {
            newErrors.id = 'ID is required';
            valid = false;
        }

        if (!formData.doj.trim()) {
            newErrors.doj = 'Date of joining is required';
            valid = false;
        }

        if (!formData.leaveType.trim()) {
            newErrors.leaveType = 'Leave type is required';
            valid = false;
        }

        if (!formData.entitled.trim()) {
            newErrors.entitled = 'Entitled is required';
            valid = false;
        }

        if (!formData.utilized.trim()) {
            newErrors.utilized = 'Utilized is required';
            valid = false;
        }

        if (!formData.balanced.trim()) {
            newErrors.balanced = 'Balanced is required';
            valid = false;
        }

        if (!formData.forward.trim()) {
            newErrors.forward = 'Forward is required';
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
        handleInputChange,
        handleImageChange,
    };
};
