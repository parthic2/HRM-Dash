import { useState, useEffect } from 'react';

export const useModalFormLogic = (leaveData, editLeaveId) => {
  const initialFormValue = {
    name: "",
    id: "",
    applyDate: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    status: "",
    remark: "",
    image: null // To store the selected image
  }

  const [formData, setFormData] = useState(initialFormValue);
  const [errors, setErrors] = useState(initialFormValue);

  const validateName = (value) => {
    if (value.trim() === "") {
      return "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      return "Name should contain only characters";
    } else {
      return "";
    }
  };

  const validateId = (value) => {
    if (value.trim() === "") {
      return "ID is required";
    } else {
      return "";
    }
  };

  const validateAppDate = (value) => {
    if (value.trim() === "") {
      return "Apply date is required";
    } else {
      return "";
    }
  };

  const validateType = (value) => {
    if (value === "" || value === "select leave type") {
      return "Leave type is required";
    } else {
      return "";
    }
  };

  const validateFromDate = (value) => {
    if (value.trim() === "") {
      return "From date is required";
    } else {
      return "";
    }
  };

  const validateToDate = (value) => {
    if (value.trim() === "") {
      return "To date is required";
    } else {
      return "";
    }
  };

  const validateStatus = (value) => {
    if (value === "" || value === "select status") {
      return "Status is required";
    } else {
      return "";
    }
  };

  const validateRemark = (value) => {
    if (value.trim() === "") {
      return "Remark is required";
    } else {
      return "";
    }
  };

  const validateForm = () => {
    // Validate all form fields and set the error messages
    const newErrors = {
      id: validateId(formData.id),
      name: validateName(formData.name),
      applyDate: validateAppDate(formData.applyDate),
      leaveType: validateType(formData.leaveType),
      fromDate: validateFromDate(formData.fromDate),
      toDate: validateToDate(formData.toDate),
      status: validateStatus(formData.status),
      remark: validateRemark(formData.remark)
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
    } else if (name === "applyDate") {
      setErrors({ ...errors, [name]: validateAppDate(value) });
    } else if (name === "leaveType") {
      setErrors({ ...errors, [name]: validateType(value) });
    } else if (name === "fromDate") {
      setErrors({ ...errors, [name]: validateFromDate(value) });
    } else if (name === "toDate") {
      setErrors({ ...errors, [name]: validateToDate(value) });
    } else if (name === "status") {
      setErrors({ ...errors, [name]: validateStatus(value) });
    } else if (name === "remark") {
      setErrors({ ...errors, [name]: validateRemark(value) });
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
    const selectedLeave = leaveData.find((leave) => leave.id === editLeaveId);
    if (selectedLeave) {
      setFormData(selectedLeave);
    } else {
      setFormData({
        name: "",
        id: "",
        applyDate: "",
        leaveType: "",
        fromDate: "",
        toDate: "",
        status: "",
        remark: "",
        image: null, // Clear the image after submission
      });
    }
  }, [editLeaveId]);

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
