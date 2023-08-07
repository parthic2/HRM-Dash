// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';
// import required data files
import React, { useEffect, useState } from 'react';

const ModalForm = ({
  addDepartment,
  department,
  editDepartment,
  editDepartmentName,
  isEditModalOpen,
  setIsEditModalOpen
}) => {
  const [formData, setFormData] = useState({
    name: "",
    headName: "",
    number: "",
    email: "",
    startingDate: "",
    totalEmp: "",
    about: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    headName: "",
    number: "",
    email: "",
    startingDate: "",
    totalEmp: "",
    about: "",
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

    if (!formData.headName.trim()) {
      newErrors.headName = 'Name is required';
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.headName)) {
      newErrors.headName = "Name should contain only characters.";
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

    if (!formData.startingDate.trim()) {
      newErrors.startingDate = 'Starting date is required';
      valid = false;
    }

    if (!formData.totalEmp.trim()) {
      newErrors.totalEmp = 'Total employee is required';
      valid = false;
    }

    if (!formData.about.trim()) {
      newErrors.about = 'About is required';
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
    const selectedDepartment = department.find((dept) => dept.name === editDepartmentName);
    if (selectedDepartment) {
      setFormData(selectedDepartment);
    } else {
      setFormData({
        name: "",
        headName: "",
        number: "",
        email: "",
        startingDate: "",
        totalEmp: "",
        about: "",
      });
    }
  }, [editDepartmentName]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editDepartmentName) {
      editDepartment({ ...formData, name: editDepartmentName });
    } else {
      addDepartment(formData);
    }
    setFormData({
      name: "",
      headName: "",
      number: "",
      email: "",
      startingDate: "",
      totalEmp: "",
      about: "",
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editDepartmentName; // Check if editDepartmentName exists

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Department</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editDepartmentName ? 'Edit Department' : 'Add Department'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} autoComplete="off">
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="name"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Department Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Department Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="headName"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Head Of Department
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.headName ? 'is-invalid' : ''}`}
                    placeholder="Head Of Department"
                    id="headName"
                    name="headName"
                    value={formData.headName}
                    onChange={handleInputChange}
                  />
                  {errors.headName && <div className="invalid-feedback">{errors.headName}</div>}
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="number"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Phone No.
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                    placeholder="Phone Number"
                    id="number"
                    name="number"
                    maxLength="10"
                    value={formData.number}
                    onChange={handleInputChange}
                  />
                  {errors.number && <div className="invalid-feedback">{errors.number}</div>}
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="email"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Email
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              {!editDepartmentName ? (
                <div className="col-sm-6">
                  <label
                    htmlFor="startingDate"
                    className="col-sm-6 col-form-label
                    form-label"
                  >
                    Starting Date
                  </label>
                  <div className="col-md-12 col-12">
                    <input
                      type="date"
                      className={`form-control ${errors.startingDate ? 'is-invalid' : ''}`}
                      placeholder="Starting Date"
                      id="startingDate"
                      name="startingDate"
                      value={formData.startingDate}
                      onChange={handleInputChange}
                    />
                    {errors.startingDate && <div className="invalid-feedback">{errors.startingDate}</div>}
                  </div>
                </div>
              ) : ""}
              <div className="col-sm-6">
                <label
                  htmlFor="totalEmp"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Total Employee
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="number"
                    className={`form-control ${errors.totalEmp ? 'is-invalid' : ''}`}
                    placeholder="Total Employee"
                    id="totalEmp"
                    name="totalEmp"
                    value={formData.totalEmp}
                    onChange={handleInputChange}
                  />
                  {errors.totalEmp && <div className="invalid-feedback">{errors.totalEmp}</div>}
                </div>
              </div>
            </Row>

            {!editDepartmentName ? (
              <Row className="mb-3">
                <div className="col-sm-12">
                  <label
                    htmlFor="about"
                    className="col-sm-6 col-form-label
                    form-label"
                  >
                    More About Department
                  </label>
                  <div className="col-md-12 col-12">
                    <input
                      type="text"
                      className={`form-control ${errors.about ? 'is-invalid' : ''}`}
                      placeholder="More About Department"
                      id="about"
                      name="about"
                      value={formData.about}
                      onChange={handleInputChange}
                    />
                    {errors.about && <div className="invalid-feedback">{errors.about}</div>}
                  </div>
                </div>
              </Row>
            ) : ""}

            {isInEditMode ? (
              <Button variant="primary" type="submit">
                Update
              </Button>
            ) : (
              <Button variant="primary" type="submit">
                Save
              </Button>
            )}

            <Button variant="light" style={{ marginLeft: "10px" }} onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;