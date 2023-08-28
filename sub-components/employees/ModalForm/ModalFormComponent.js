import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles, FormSelect } from 'widgets';
import { genderOptions } from 'data/options/options';
import { useModalFormLogic } from './ModalFormLogic';

const ModalFormComponent = ({
  editEmployeeEmail,
  employeeData,
  addEmployee,
  editEmployee,
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
      editEmployee({ ...formData, email: editEmployeeEmail });
    } else {
      addEmployee(formData);
    }
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
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editEmployeeEmail; // Check if editEmployeeEmail exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Employee ID</Form.Label>
            {/* {editEmployeeEmail ? (
              <Form.Control
                type="text"
                className="form-control"
                value={formData.id}
                readOnly
              />
            ) : ( */}
            <Form.Control
              type="text"
              className={`form-control ${errors.id ? 'is-invalid' : ''}`}
              placeholder="Employee ID"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {/* )} */}
            {errors.id && <div className="invalid-feedback">{errors.id}</div>}
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Name</Form.Label>
            <Form.Control
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
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Password</Form.Label>
            <div className="input-group">
              <Form.Control
                type={formData.showPassword ? 'text' : 'password'}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    showPassword: !formData.showPassword
                  })
                }
              >
                {formData.showPassword ? <i className="fe fe-eye-off" /> : <i className="fe fe-eye" />}
              </button>
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Designation</Form.Label>
            <div className="input-group">
              <Form.Control
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
            <Form.Label className="col-sm-6">Mobile No.</Form.Label>
            <Form.Control
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
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Alternative Number</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.alterNum ? 'is-invalid' : ''}`}
                placeholder="Alternative Number"
                id="alterNum"
                name="alterNum"
                maxLength="10"
                value={formData.alterNum}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.alterNum && <div className="invalid-feedback">{errors.alterNum}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Address</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.address ? 'is-invalid' : ''}`}
              placeholder="Address"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Birth Date</Form.Label>
            <div className="input-group">
              <Form.Control
                type="date"
                className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
                placeholder="Birth Date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Joining Date</Form.Label>
            <Form.Control
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
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Blood Group</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.bloodGroup ? 'is-invalid' : ''}`}
                placeholder="Blood Group"
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.bloodGroup && <div className="invalid-feedback">{errors.bloodGroup}</div>}
            </div>
          </div>

          {!editEmployeeEmail ?
            <div className="col-sm-6">
              <Form.Label className="col-sm-6">Gender</Form.Label>
              <Form.Control
                as={FormSelect}
                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                placeholder="Select Gender"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                options={genderOptions}
              />
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div> : ""
          }
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Government Document</Form.Label>
            <div className="col-md-12 col-12">
              <div
                id="image"
                name="image"
                className="dropzone mb-3 py-10 border-dashed"
              >
                <DropFiles handleImageChange={handleImageChange} />
              </div>
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