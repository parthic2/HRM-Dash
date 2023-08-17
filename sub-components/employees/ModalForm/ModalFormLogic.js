import { useState, useEffect } from 'react';

export const useModalFormLogic = (employeeData, editEmployeeEmail) => {
    const initialFormValue = {
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

    const validateId = (value) => {
        if (value.trim() === "") {
            return "Employee Id is required";
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

    const validateNumber = (value) => {
        if (value.trim() === "") {
            return "Mobile number is required";
        } else if (!/^\d{10}$/.test(value)) {
            return "Contact Number must be a 10-digit number";
        } else {
            return "";
        }
    };

    const validateAltNumber = (value) => {
        if (value.trim() === "") {
            return "Alternative Number is required";
        } else if (!/^\d{10}$/.test(value)) {
            return "Contact Number must be a 10-digit number";
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
            id: validateId(formData.id),
            name: validateName(formData.name),
            password: validatePassword(formData.password),
            email: validateEmail(formData.email),
            number: validateNumber(formData.number),
            alterNum: validateAltNumber(formData.alterNum),
            address: validateAddress(formData.address),
            designation: validateDes(formData.designation),
            joiningDate: validateJoinDate(formData.joiningDate),
            birthDate: validateBirDate(formData.birthDate),
            gender: validateGender(formData.gender),
            bloodGroup: validateBGroup(formData.bloodGroup),
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
        } else if (name === "password") {
            setErrors({ ...errors, [name]: validatePassword(value) });
        } else if (name === "email") {
            setErrors({ ...errors, [name]: validateEmail(value) });
        } else if (name === "number") {
            setErrors({ ...errors, [name]: validateNumber(value) });
        } else if (name === "alterNum") {
            setErrors({ ...errors, [name]: validateAltNumber(value) });
        } else if (name === "address") {
            setErrors({ ...errors, [name]: validateAddress(value) });
        } else if (name === "designation") {
            setErrors({ ...errors, [name]: validateDes(value) });
        } else if (name === "joiningDate") {
            setErrors({ ...errors, [name]: validateJoinDate(value) });
        } else if (name === "birthDate") {
            setErrors({ ...errors, [name]: validateBirDate(value) });
        } else if (name === "gender") {
            setErrors({ ...errors, [name]: validateGender(value) });
        } else if (name === "bloodGroup") {
            setErrors({ ...errors, [name]: validateBGroup(value) });
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
        handleInputBlur,
        handleInputChange,
        handleImageChange,
    };
};
