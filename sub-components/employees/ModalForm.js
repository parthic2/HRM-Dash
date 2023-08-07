// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';
// import required data files
import React, { useEffect, useState } from 'react';
import { DropFiles, FormSelect } from 'widgets';

const ModalForm = ({
  addEmployee,
  editEmployee,
  editEmployeeEmail,
  employeeData,
  isEditModalOpen,
  setIsEditModalOpen
}) => {
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    designation: "",
    joiningDate: "",
    birthDate: "",
    gender: "",
    image: null // To store the selected image
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    designation: '',
    joiningDate: '',
    birthDate: '',
    gender: ""
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
        name: "",
        email: "",
        number: "",
        address: "",
        designation: "",
        joiningDate: "",
        birthDate: "",
        image: null, // Clear the image after submission
      });
    }
  }, [editEmployeeEmail]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editEmployeeEmail) {
      editEmployee({ ...formData, email: editEmployeeEmail });
    } else {
      addEmployee(formData);
    }
    setFormData({
      name: "",
      email: "",
      number: "",
      address: "",
      designation: "",
      joiningDate: "",
      birthDate: "",
      image: null, // Clear the image after submission
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editEmployeeEmail; // Check if editEmployeeEmail exists

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Employees</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editEmployeeEmail ? 'Edit Employee' : 'Add Employee'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} autoComplete="off">
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="name"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Name"
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
                  htmlFor="email"
                  className="col-sm-4 col-form-label
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
              <div className="col-sm-6">
                <label
                  htmlFor="designation"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Designation
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                    placeholder="Designation"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                  />
                  {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="number"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Mobile No.
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                    placeholder="Mobile Number"
                    id="number"
                    name="number"
                    maxLength="10"
                    value={formData.number}
                    onChange={handleInputChange}
                  />
                  {errors.number && <div className="invalid-feedback">{errors.number}</div>}
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="address"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Address
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                    placeholder="Address"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="birthDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Birth Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
                    placeholder="Birth Date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                  />
                  {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="joiningDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Joining Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className={`form-control ${errors.joiningDate ? 'is-invalid' : ''}`}
                    placeholder="Birth Date"
                    id="joiningDate"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                  />
                  {errors.joiningDate && <div className="invalid-feedback">{errors.joiningDate}</div>}
                </div>
              </div>
              {!editEmployeeEmail ?
                <div className="col-sm-6">
                  <label
                    htmlFor="gender"
                    className="col-sm-4 col-form-label
                    form-label"
                  >
                    Gender
                  </label>
                  <div className="col-md-12 col-12">
                    <Form.Control
                      as={FormSelect}
                      className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                      placeholder="Select Gender"
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      options={genderOptions}
                    />
                    {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                  </div>
                </div> : ""
              }
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="image"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Profile
                </label>
                <div className="col-md-12 col-12">
                  <Form
                    action="#"
                    className="dropzone mb-3 py-10 border-dashed"
                  >
                    <DropFiles handleImageChange={handleImageChange} />
                  </Form>
                </div>
              </div>
            </Row>

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