import { useState, useEffect } from 'react';

export const useModalFormLogic = (leaveData, editLeaveId) => {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    applyDate: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    status: "",
    remark: "",
    image: null // To store the selected image
  });

  const [errors, setErrors] = useState({
    name: "",
    id: "",
    applyDate: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    status: "",
    remark: ""
  });

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

    if (!formData.id.trim()) {
      newErrors.id = 'ID is required';
      valid = false;
    }

    if (!formData.applyDate.trim()) {
      newErrors.applyDate = 'Apply date is required';
      valid = false;
    }

    if (!formData.leaveType.trim()) {
      newErrors.leaveType = 'Leave type is required';
      valid = false;
    }

    if (!formData.fromDate.trim()) {
      newErrors.fromDate = 'From date is required';
      valid = false;
    }

    if (!formData.toDate.trim()) {
      newErrors.toDate = 'To date is required';
      valid = false;
    }

    if (!formData.status.trim()) {
      newErrors.status = 'Status is required';
      valid = false;
    }

    if (!formData.remark.trim()) {
      newErrors.remark = 'Remark is required';
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
    handleInputChange,
    handleImageChange,
  };
};
