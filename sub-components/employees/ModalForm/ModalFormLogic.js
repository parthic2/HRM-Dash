import { useState, useEffect } from 'react';

export const useModalFormLogic = (employeeData, editEmployeeEmail) => {
    const initialFormValue = {
        user_name: "",
        password: "",
        email: "",
        phone_no: "",
        alternative_phone: "",
        address: "",
        designation: "",
        joining_date: "",
        birth_date: "",
        gender: "",
        blood_group: "",
        gov_doc: null,
        status: "",
        role: "",
        showPassword: false // To store the selected image
    };

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    // Validation function for each field
    const validateName = (value) => {
        if (value.trim() === "") {
            return "Name is required";
        } else if (!/^[A-Za-z\s]+$/.test(value)) {
            return "Name should contain only characters";
        } else {
            return "";
        }
    };

    const validatePassword = (value) => {
        if (value.trim() === "") {
            return "Password is required"
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)) {
            return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        } else {
            return "";
        }
    }

    const validateEmail = (value) => {
        if (value.trim() === "") {
            return "Email Address is required";
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(value)) {
            return "Invalid email address";
        } else {
            return "";
        }
    };

    const validateNumber = (value) => {
        if (value.trim() === "") {
            return "Mobile number is required";
        } else if (!/^\d{10}$/.test(value)) {
            return "Mobile Number must be a 10-digit number";
        } else {
            return "";
        }
    };

    const validateAltNumber = (value) => {
        if (value.trim() === "") {
            return "Alternative Number is required";
        } else if (!/^\d{10}$/.test(value)) {
            return "Alternative Contact Number must be a 10-digit number";
        } else {
            return "";
        }
    };

    const validateAddress = (value) => {
        if (value.trim() === "") {
            return "Address is required";
        } else {
            return "";
        }
    };

    const validateDes = (value) => {
        if (value.trim() === "") {
            return "Designation is required";
        } else {
            return "";
        }
    };

    const validateJoinDate = (value) => {
        if (value.trim() === "") {
            return "Joining date is required";
        } else {
            return "";
        }
    };

    const validateBirDate = (value) => {
        if (value.trim() === "") {
            return "Birth date is required";
        } else {
            return "";
        }
    };

    const validateBGroup = (value) => {
        if (value.trim() === "") {
            return "Blood Group is required";
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

    const validateRole = (value) => {
        if (value.trim() === "") {
            return "Role is required";
        } else {
            return "";
        }
    };

    const validateGender = (value) => {
        if (value === "" || value === "select gender") {
            return "Gender is required";
        } else {
            return "";
        }
    };

    const validateForm = () => {
        // Validate all form fields and set the error messages
        const newErrors = {
            user_name: validateName(formData.user_name),
            password: validatePassword(formData.password),
            email: validateEmail(formData.email),
            phone_no: validateNumber(formData.phone_no),
            alternative_phone: validateAltNumber(formData.alternative_phone),
            address: validateAddress(formData.address),
            designation: validateDes(formData.designation),
            joining_date: validateJoinDate(formData.joining_date),
            birth_date: validateBirDate(formData.birth_date),
            gender: validateGender(formData.gender),
            blood_group: validateBGroup(formData.blood_group),
            status: validateStatus(formData.status),
            role: validateRole(formData.role),
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
        if (name === "user_name") {
            setErrors({ ...errors, [name]: validateName(value) });
        } else if (name === "password") {
            setErrors({ ...errors, [name]: validatePassword(value) });
        } else if (name === "email") {
            setErrors({ ...errors, [name]: validateEmail(value) });
        } else if (name === "phone_no") {
            setErrors({ ...errors, [name]: validateNumber(value) });
        } else if (name === "alternative_phone") {
            setErrors({ ...errors, [name]: validateAltNumber(value) });
        } else if (name === "address") {
            setErrors({ ...errors, [name]: validateAddress(value) });
        } else if (name === "designation") {
            setErrors({ ...errors, [name]: validateDes(value) });
        } else if (name === "joining_date") {
            setErrors({ ...errors, [name]: validateJoinDate(value) });
        } else if (name === "birth_date") {
            setErrors({ ...errors, [name]: validateBirDate(value) });
        } else if (name === "gender") {
            setErrors({ ...errors, [name]: validateGender(value) });
        } else if (name === "blood_group") {
            setErrors({ ...errors, [name]: validateBGroup(value) });
        } else if (name === "status") {
            setErrors({ ...errors, [name]: validateStatus(value) });
        } else if (name === "role") {
            setErrors({ ...errors, [name]: validateRole(value) });
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
        const selectedEmployee = employeeData.find((employee) => employee.email === editEmployeeEmail);
        if (selectedEmployee) {
            setFormData(selectedEmployee);
        } else {
            setFormData({
                ...initialFormValue
            });
        }
    }, [editEmployeeEmail]);

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
