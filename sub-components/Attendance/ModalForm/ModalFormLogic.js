import { useState, useEffect } from 'react';

export const useModalFormLogic = (attendanceData, editAttId) => {
    const [formData, setFormData] = useState({
        name: "",
        employeeId: "",
        department: "",
        checkIn: "",
        checkOut: "",
        status: "",
        image: null // To store the selected image
    });

    const [errors, setErrors] = useState({
        name: "",
        employeeId: "",
        department: "",
        // checkIn: "",
        // checkOut: "",
        status: "",
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

        if (!formData.employeeId.trim()) {
            newErrors.employeeId = 'Employee Id is required';
            valid = false;
        }

        if (!formData.department.trim()) {
            newErrors.department = 'Department is required';
            valid = false;
        }

        // if (!formData.checkIn.trim()) {
        //     newErrors.checkIn = 'Check In time is required';
        //     valid = false;
        // }

        // if (!formData.checkOut.trim()) {
        //     newErrors.checkOut = 'Check Out time is required';
        //     valid = false;
        // }

        if (!formData.status.trim()) {
            newErrors.status = 'Status is required';
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
        const selectedAttendance = attendanceData.find((att) => att.id === editAttId);
        if (selectedAttendance) {
            setFormData(selectedAttendance);
        } else {
            setFormData({
                name: "",
                employeeId: "",
                department: "",
                checkIn: "",
                checkOut: "",
                status: "",
                image: null, // Clear the image after submission
            });
        }
    }, [editAttId]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputChange,
        handleImageChange,
    };
};
