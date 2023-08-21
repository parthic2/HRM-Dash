import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { useModalFormLogic } from './ModalFormLogic';

const ModalFormComponent = ({
  addDepartment,
  department,
  editDepartment,
  editDepartmentName,
  setIsEditModalOpen
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
    handleInputBlur,
    handleInputChange,
  } = useModalFormLogic(department, editDepartmentName);

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
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Department Name</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Department Name"
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
            <Form.Label className="col-sm-6">Head Of Department</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.headName ? 'is-invalid' : ''}`}
              placeholder="Head Of Department"
              id="headName"
              name="headName"
              value={formData.headName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.headName && <div className="invalid-feedback">{errors.headName}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Phone No.</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                placeholder="Phone Number"
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
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Email</Form.Label>
            <Form.Control
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
        </Row>
        <Row className="mb-3">
          {!editDepartmentName ? (
            <div className="col-sm-6">
              <Form.Label className="col-sm-6">Starting Date</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="date"
                  className={`form-control ${errors.startingDate ? 'is-invalid' : ''}`}
                  placeholder="Starting Date"
                  id="startingDate"
                  name="startingDate"
                  value={formData.startingDate}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
                />
                {errors.startingDate && <div className="invalid-feedback">{errors.startingDate}</div>}
              </div>
            </div>
          ) : ""}
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Total Employee</Form.Label>
            <Form.Control
              type="number"
              className={`form-control ${errors.totalEmp ? 'is-invalid' : ''}`}
              placeholder="Total Employee"
              id="totalEmp"
              name="totalEmp"
              value={formData.totalEmp}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.totalEmp && <div className="invalid-feedback">{errors.totalEmp}</div>}
          </div>
        </Row>

        {!editDepartmentName ? (
          <Row className="mb-3">
            <div className="col-sm-12">
              <Form.Label className="col-sm-6">More About Department</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  className={`form-control ${errors.about ? 'is-invalid' : ''}`}
                  placeholder="More About Department"
                  id="about"
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  onBlur={handleInputBlur}
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
    </Col>
  );
};

export default ModalFormComponent;