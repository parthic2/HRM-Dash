import { useState, useEffect } from 'react';

export const useModalFormLogic = (projectData, editProjectId) => {
    const initialFormValue = {
        id: "",
        projectName: "",
        clientName: "",
        clientEmail: "",
        startDate: "",
        endDate: "",
        members: "",
        status: "",
        progress: "",
        image: [] // To store the selected image
    }

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    // Validation function for each field
    const validateProName = (value) => {
        if (value.trim() === "") {
            return "Project name is required";
        } else {
            return "";
        }
    };

    const validateId = (value) => {
        if (value === "") {
            return "Project Id is required";
        } else {
            return "";
        }
    };

    const validateName = (value) => {
        if (value.trim() === "") {
            return "Client name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Client name should contain only characters";
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
        if (value.trim() === "") {
            return "Starting date is required";
        } else {
            return "";
        }
    };

    const validateEndDate = (value) => {
        if (value.trim() === "") {
            return "Ending date is required";
        } else {
            return "";
        }
    };

    const validateMember = (value) => {
        if (value === "") {
            return "Member number is required";
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

    const validateProgress = (value) => {
        if (value === "") {
            return "Progress is required";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            id: validateId(formData.id),
            projectName: validateProName(formData.projectName),
            clientName: validateName(formData.clientName),
            clientEmail: validateEmail(formData.clientEmail),
            startDate: validateStartDate(formData.startDate),
            endDate: validateEndDate(formData.endDate),
            members: validateMember(formData.members),
            status: validateStatus(formData.status),
            progress: validateProgress(formData.progress)
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
        } else if (name === "projectName") {
            setErrors({ ...errors, [name]: validateProName(value) });
        } else if (name === "clientName") {
            setErrors({ ...errors, [name]: validateName(value) });
        } else if (name === "clientEmail") {
            setErrors({ ...errors, [name]: validateEmail(value) });
        } else if (name === "startDate") {
            setErrors({ ...errors, [name]: validateStartDate(value) });
        } else if (name === "endDate") {
            setErrors({ ...errors, [name]: validateEndDate(value) });
        } else if (name === "members") {
            setErrors({ ...errors, [name]: validateMember(value) });
        } else if (name === "status") {
            setErrors({ ...errors, [name]: validateStatus(value) });
        } else if (name === "progress") {
            setErrors({ ...errors, [name]: validateProgress(value) });
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
        handleInputBlur,
        handleInputChange,
        handleImageChange,
    };
};
