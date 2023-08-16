import { useState, useEffect } from 'react';

export const useModalFormLogic = (employeeData, editEmployeeEmail) => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        password: "",
        email: "",
        number: "",
        alterNum: "",
        address: "",
        designation: "",
        joiningDate: "",
        birthDate: "",
        gender: "",
        bloodGroup: "",
        showPassword: false,
        image: null // To store the selected image
    });

    const [errors, setErrors] = useState({
        id: "",
        name: "",
        password: "",
        email: "",
        number: "",
        alterNum: "",
        address: "",
        designation: "",
        joiningDate: "",
        birthDate: "",
        gender: "",
        bloodGroup: "",
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

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            valid = false;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character';
            valid = false;
        }

        if (!formData.id.trim()) {
            newErrors.id = 'Employee Id is required';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
            valid = false;
        }

        if (!formData.number.trim()) {
            newErrors.number = 'Mobile number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(formData.number)) {
            newErrors.number = "Contact Number must be a 10-digit number";
            valid = false;
        }

        if (!formData.alterNum.trim()) {
            newErrors.alterNum = 'Alternative Number is required';
            valid = false;
        } else if (!/^\d{10}$/.test(formData.alterNum)) {
            newErrors.alterNum = "Contact number must be a 10-digit alterNum";
            valid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
            valid = false;
        }

        if (!formData.designation.trim()) {
            newErrors.designation = 'Designation is required';
            valid = false;
        }

        if (!formData.joiningDate.trim()) {
            newErrors.joiningDate = 'Joining date is required';
            valid = false;
        }

        if (!formData.birthDate.trim()) {
            newErrors.birthDate = 'Birth date is required';
            valid = false;
        }

        if (!formData.bloodGroup.trim()) {
            newErrors.bloodGroup = 'Blood Group is required';
            valid = false;
        }

        if (!formData.gender) {
            newErrors.gender = 'Gender is required';
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
        const selectedEmployee = employeeData.find((employee) => employee.email === editEmployeeEmail);
        if (selectedEmployee) {
            setFormData(selectedEmployee);
        } else {
            setFormData({
                id: "",
                name: "",
                password: "",
                email: "",
                number: "",
                alterNum: "",
                address: "",
                designation: "",
                joiningDate: "",
                birthDate: "",
                gender: "",
                bloodGroup: "",
                image: null, // Clear the image after submission
            });
        }
    }, [editEmployeeEmail]);

    return {
        formData,
        setFormData,
        errors,
        validateForm,
        handleInputChange,
        handleImageChange,
    };
};
