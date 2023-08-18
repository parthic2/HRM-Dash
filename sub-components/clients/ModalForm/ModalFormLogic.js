import { useState, useEffect } from 'react';

export const useModalFormLogic = (clientData, editClientId) => {
    const initialFormValue = {
        name: "",
        email: "",
        number: "",
        address: "",
        organization: "",
        joiningDate: "",
        website: "",
        country: "",
        gender: "",
        image: null // To store the selected image
    }

    const [formData, setFormData] = useState(initialFormValue);
    const [errors, setErrors] = useState(initialFormValue);

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            valid = false;
        } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
            newErrors.name = "Name should contain only characters.";
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
            newErrors.number = "Contact Number must be a 10-digit number.";
            valid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
            valid = false;
        }

        if (!formData.organization.trim()) {
            newErrors.organization = 'Organization is required';
            valid = false;
        }

        if (!formData.joiningDate.trim()) {
            newErrors.joiningDate = 'Joining date is required';
            valid = false;
        }

        if (!formData.website.trim()) {
            newErrors.website = 'Website is required';
            valid = false;
        }

        if (!formData.country.trim()) {
            newErrors.country = 'Country is required';
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
        const selectedClient = clientData.find((client) => client.id === editClientId);
        if (selectedClient) {
            setFormData(selectedClient);
        } else {
            setFormData({
                name: "",
                email: "",
                number: "",
                address: "",
                organization: "",
                joiningDate: "",
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
        handleInputChange,
        handleImageChange,
    };
};
