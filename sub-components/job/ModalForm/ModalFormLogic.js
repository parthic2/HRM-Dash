import { useState, useEffect } from 'react';

export const useModalFormLogic = (reqData, editReqId) => {
    const [formData, setFormData] = useState({
        title: "",
        posType: "",
        department: "",
        noPos: "",
        interviewDate: "",
        location: "",
        reportingTo: "",
        qualification: ""
    });

    const [errors, setErrors] = useState({
        title: "",
        posType: "",
        department: "",
        noPos: "",
        interviewDate: "",
        location: "",
        reportingTo: "",
        qualification: ""
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.title.trim()) {
            newErrors.title = 'Title is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.title)) {
            newErrors.title = "Title should contain only characters";
            valid = false;
        }

        if (!formData.posType.trim()) {
            newErrors.posType = 'Position type is required';
            valid = false;
        }

        if (!formData.department.trim()) {
            newErrors.department = 'Department is required';
            valid = false;
        }

        if (!formData.noPos) {
            newErrors.noPos = 'No of position is required';
            valid = false;
        }

        if (!formData.interviewDate.trim()) {
            newErrors.interviewDate = 'Interview date is required';
            valid = false;
        }

        if (!formData.location.trim()) {
            newErrors.location = 'Location is required';
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
        const selectedReq = reqData.find((req) => req.id === editReqId);
        if (selectedReq) {
            setFormData(selectedReq);
        } else {
            setFormData({
                title: "",
                posType: "",
                department: "",
                noPos: "",
                interviewDate: "",
                location: "",
                reportingTo: "",
                qualification: ""
            });
        }
    }, [editReqId]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputChange,
    };
};
