import { useState, useEffect } from 'react';

export const useModalFormLogic = (reqData, editReqId) => {
    const initialFormValue = {
        title: "",
        posType: "",
        department: "",
        noPos: "",
        interviewDate: "",
        location: "",
        reportingTo: "",
        qualification: ""
    }

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    const validateTitle = (value) => {
        if (value.trim() === "") {
            return "Title is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Title should contain only characters";
        } else {
            return "";
        }
    };

    const validateType = (value) => {
        if (value === "" || value === "select position type") {
            return "Position type is required";
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

    const validatePos = (value) => {
        if (value === "") {
            return "No of position is required";
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

    const validateLocation = (value) => {
        if (value.trim() === "") {
            return "Location is required";
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
            title: validateTitle(formData.title),
            posType: validateType(formData.posType),
            department: validateDept(formData.department),
            noPos: validatePos(formData.noPos),
            interviewDate: validateIntDate(formData.interviewDate),
            location: validateLocation(formData.location),
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
        if (name === "title") {
            setErrors({ ...errors, [name]: validateTitle(value) });
        } else if (name === "posType") {
            setErrors({ ...errors, [name]: validateType(value) });
        } else if (name === "department") {
            setErrors({ ...errors, [name]: validateDept(value) });
        } else if (name === "noPos") {
            setErrors({ ...errors, [name]: validatePos(value) });
        } else if (name === "interviewDate") {
            setErrors({ ...errors, [name]: validateIntDate(value) });
        } else if (name === "location") {
            setErrors({ ...errors, [name]: validateLocation(value) });
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
        const selectedReq = reqData.find((req) => req.id === editReqId);
        if (selectedReq) {
            setFormData(selectedReq);
        } else {
            setFormData({
                ...initialFormValue
            });
        }
    }, [editReqId]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputBlur,
        handleInputChange,
    };
};
