import { useState, useEffect } from 'react';

export const useModalFormLogic = (projectData, editProjectId) => {
    const [formData, setFormData] = useState({
        projectName: "",
        clientName: "",
        clientEmail: "",
        startDate: "",
        endDate: "",
        members: "",
        status: "",
        progress: "",
        image: [] // To store the selected image
    });

    const [errors, setErrors] = useState({
        projectName: "",
        clientName: "",
        clientEmail: "",
        startDate: "",
        endDate: "",
        members: "",
        status: "",
        progress: "",
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.projectName.trim()) {
            newErrors.projectName = 'Project name is required';
            valid = false;
        }

        if (!formData.clientName.trim()) {
            newErrors.clientName = 'Client name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.clientName)) {
            newErrors.clientName = "Client name should contain only characters";
            valid = false;
        }

        if (!formData.clientEmail.trim()) {
            newErrors.clientEmail = 'Client email is required';
            valid = false;
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(formData.clientEmail)) {
            newErrors.clientEmail = 'Invalid email format';
            valid = false;
        }

        if (!formData.startDate.trim()) {
            newErrors.startDate = 'Starting date is required';
            valid = false;
        }

        if (!formData.endDate.trim()) {
            newErrors.endDate = 'Ending date is required';
            valid = false;
        }

        if (!formData.members.trim()) {
            newErrors.members = 'Member number is required';
            valid = false;
        }

        if (!formData.status.trim()) {
            newErrors.status = 'status is required';
            valid = false;
        }

        if (!formData.progress.trim()) {
            newErrors.progress = 'Progress is required';
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
        const selectedProject = projectData.find((project) => project.id === editProjectId);
        if (selectedProject) {
            setFormData(selectedProject);
        } else {
            setFormData({
                projectName: "",
                clientName: "",
                clientEmail: "",
                startDate: "",
                endDate: "",
                members: "",
                status: "",
                progress: "",
                image: [] // Clear the image after submission
            });
        }
    }, [editProjectId]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputChange,
        handleImageChange,
    };
};
