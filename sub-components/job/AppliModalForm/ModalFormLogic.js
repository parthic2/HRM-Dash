import { useState, useEffect } from 'react';

export const useModalFormLogic = (applicantData, editAppliId) => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        department: "",
        interviewDate: "",
        interviewTime: "",
        reportingTo: "",
        qualification: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        title: "",
        department: "",
        interviewDate: "",
        interviewTime: "",
        reportingTo: "",
        qualification: ""
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

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.title)) {
            newErrors.title = "Title should contain only characters";
            valid = false;
        }

        if (!formData.department.trim()) {
            newErrors.department = 'Department is required';
            valid = false;
        }

        if (!formData.interviewDate.trim()) {
            newErrors.interviewDate = 'Interview date is required';
            valid = false;
        }

        if (!formData.interviewTime.trim()) {
            newErrors.interviewTime = 'Interview time is required';
            valid = false;
        }

        if (!formData.reportingTo.trim()) {
            newErrors.reportingTo = 'Reporting Name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.reportingTo)) {
            newErrors.reportingTo = "Reporting name should contain only characters";
            valid = false;
        }

        if (!formData.qualification.trim()) {
            newErrors.qualification = 'Qualification is required';
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
        const selectedApplicant = applicantData.find((req) => req.id === editAppliId);
        if (selectedApplicant) {
            setFormData(selectedApplicant);
        } else {
            setFormData({
                name: "",
                title: "",
                department: "",
                interviewDate: "",
                interviewTime: "",
                reportingTo: "",
                qualification: ""
            });
        }
    }, [editAppliId]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputChange,
    };
};
