import { useState, useEffect } from 'react';

export const useModalFormLogic = (applicantData, editAppliId) => {
    const initialFormValue = {
        id: "",
        name: "",
        title: "",
        department: "",
        interviewDate: "",
        interviewTime: "",
        reportingTo: "",
        qualification: ""
    };

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    const validateId = (value) => {
        if (value === "") {
            return "Applicant Id is required";
        } else {
            return "";
        }
    };

    const validateName = (value) => {
        if (value.trim() === "") {
            return "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Name should contain only characters";
        } else {
            return "";
        }
    };

    const validateTitle = (value) => {
        if (value.trim() === "") {
            return "Title is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Title should contain only characters";
        } else {
            return "";
        }
    };

    const validateDept = (value) => {
        if (value === "" || value === "select department") {
            return "Department is required";
        } else {
            return "";
        }
    };

    const validateIntDate = (value) => {
        if (value.trim() === "") {
            return "Interview date is required";
        } else {
            return "";
        }
    };

    const validateIntTime = (value) => {
        if (value.trim() === "") {
            return "Interview Time is required";
        } else {
            return "";
        }
    };

    const validateReport = (value) => {
        if (value.trim() === "") {
            return "Reporting Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Reporting name should contain only characters";
        } else {
            return "";
        }
    };

    const validateQua = (value) => {
        if (value.trim() === "") {
            return "Qualification is required";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            id: validateId(formData.id),
            name: validateName(formData.name),
            title: validateTitle(formData.title),
            department: validateDept(formData.department),
            interviewDate: validateIntDate(formData.interviewDate),
            interviewTime: validateIntTime(formData.interviewTime),
            reportingTo: validateReport(formData.reportingTo),
            qualification: validateQua(formData.qualification)
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
        } else if (name === "title") {
            setErrors({ ...errors, [name]: validateTitle(value) });
        } else if (name === "department") {
            setErrors({ ...errors, [name]: validateDept(value) });
        } else if (name === "interviewDate") {
            setErrors({ ...errors, [name]: validateIntDate(value) });
        } else if (name === "interviewTime") {
            setErrors({ ...errors, [name]: validateIntTime(value) });
        } else if (name === "reportingTo") {
            setErrors({ ...errors, [name]: validateReport(value) });
        } else if (name === "qualification") {
            setErrors({ ...errors, [name]: validateQua(value) });
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
        handleInputBlur,
        handleInputChange,
    };
};
