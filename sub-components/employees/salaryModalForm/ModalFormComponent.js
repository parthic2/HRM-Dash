import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles } from 'widgets';
import { useModalFormLogic } from './ModalFormLogic';

const ModalFormComponent = ({
  editEmployeeEmail,
  employeeData,
  addEmpSalary,
  editEmpSalary,
  setIsEditModalOpen
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
    handleInputBlur,
    handleInputChange,
    handleImageChange,
  } = useModalFormLogic(employeeData, editEmployeeEmail);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editEmployeeEmail) {
      editEmpSalary({ ...formData, email: editEmployeeEmail });
    } else {
      addEmpSalary(formData);
    }
    setFormData({
      name: "",
      email: "",
      number: "",
      designation: "",
      joiningDate: "",
      salary: "",
      image: null, // Clear the image after submission
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editEmployeeEmail; // Check if editEmployeeEmail exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="name"
              className="col-sm-6 col-form-label form-label"
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
                onBlur={handleInputBlur}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="email"
              className="col-sm-6 col-form-label form-label"
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
                onBlur={handleInputBlur}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="designation"
              className="col-sm-6 col-form-label form-label"
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
                onBlur={handleInputBlur}
              />
              {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="number"
              className="col-sm-6 col-form-label form-label"
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
                onBlur={handleInputBlur}
              />
              {errors.number && <div className="invalid-feedback">{errors.number}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="joiningDate"
              className="col-sm-6 col-form-label form-label"
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
                onBlur={handleInputBlur}
              />
              {errors.joiningDate && <div className="invalid-feedback">{errors.joiningDate}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="salary"
              className="col-sm-6 col-form-label form-label"
            >
              Salary
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.salary ? 'is-invalid' : ''}`}
                placeholder="Employee Salary"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="image"
              className="col-sm-6 col-form-label form-label"
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
    </Col>
  );
};

export default ModalFormComponent;
