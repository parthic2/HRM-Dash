import { useState, useEffect } from 'react';

export const useModalFormLogic = (clientData, editClientId) => {
    const initialFormValue = {
        id: "",
        name: "",
        email: "",
        number: "",
        address: "",
        organization: "",
        website: "",
        country: "",
        gender: "",
        image: null // To store the selected image
    }

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    // Validation function for each field
    const validateId = (value) => {
        if (value === "") {
            return "Client Id is required";
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

    const validateAddress = (value) => {
        if (value.trim() === "") {
            return "Address is required";
        } else {
            return "";
        }
    };

    const validateOrg = (value) => {
        if (value.trim() === "") {
            return "Organization is required";
        } else {
            return "";
        }
    };

    const validateWebsite = (value) => {
        if (value === "") {
            return "Website is required";
        } else {
            return "";
        }
    };
    const validateCountry = (value) => {
        if (value === "") {
            return "Country is required";
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
            email: validateEmail(formData.email),
            number: validateNumber(formData.number),
            address: validateAddress(formData.address),
            organization: validateOrg(formData.organization),
            website: validateWebsite(formData.website),
            country: validateCountry(formData.country),
            gender: validateGender(formData.gender),
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
        } else if (name === "email") {
            setErrors({ ...errors, [name]: validateEmail(value) });
        } else if (name === "number") {
            setErrors({ ...errors, [name]: validateNumber(value) });
        } else if (name === "address") {
            setErrors({ ...errors, [name]: validateAddress(value) });
        } else if (name === "organization") {
            setErrors({ ...errors, [name]: validateOrg(value) });
        } else if (name === "website") {
            setErrors({ ...errors, [name]: validateWebsite(value) });
        } else if (name === "country") {
            setErrors({ ...errors, [name]: validateCountry(value) });
        } else if (name === "gender") {
            setErrors({ ...errors, [name]: validateGender(value) });
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
        const selectedClient = clientData.find((client) => client.id === editClientId);
        if (selectedClient) {
            setFormData(selectedClient);
        } else {
            setFormData({
                id: "",
                name: "",
                email: "",
                number: "",
                address: "",
                organization: "",
                website: "",
                country: "",
                image: null // Clear the image after submission
            });
        }
    }, [editClientId]);

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
