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
  setIsEditModalOpen,
  maxId
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
      user_name: "",
      password: "",
      email: "",
      phone_no: "",
      alternative_phone: "",
      address: "",
      designation: "",
      joining_date: "",
      birth_date: "",
      gender: "",
      status: "",
      role: "",
      blood_group: "",
      gov_doc: null, // Clear the image after submission
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editEmployeeEmail; // Check if editEmployeeEmail exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Employee ID</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Employee ID"
              id="id"
              name="id"
              value={isInEditMode ? formData.id : maxId + 1} // Use maxId + 1 for new employees
              readOnly
            />
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Name</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.user_name ? 'is-invalid' : ''}`}
              placeholder="Name"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
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
              className={`form-control ${errors.phone_no ? 'is-invalid' : ''}`}
              placeholder="Mobile Number"
              id="phone_no"
              name="phone_no"
              maxLength="10"
              value={formData.phone_no}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.phone_no && <div className="invalid-feedback">{errors.phone_no}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Alternative Number</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.alternative_phone ? 'is-invalid' : ''}`}
                placeholder="Alternative Number"
                id="alternative_phone"
                name="alternative_phone"
                maxLength="10"
                value={formData.alternative_phone}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.alternative_phone && <div className="invalid-feedback">{errors.alternative_phone}</div>}
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
                className={`form-control ${errors.birth_date ? 'is-invalid' : ''}`}
                placeholder="Birth Date"
                id="birth_date"
                name="birth_date"
                value={formData.birth_date}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.birth_date && <div className="invalid-feedback">{errors.birth_date}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Joining Date</Form.Label>
            <Form.Control
              type="date"
              className={`form-control ${errors.joining_date ? 'is-invalid' : ''}`}
              placeholder="Birth Date"
              id="joining_date"
              name="joining_date"
              value={formData.joining_date}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.joining_date && <div className="invalid-feedback">{errors.joining_date}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Blood Group</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.blood_group ? 'is-invalid' : ''}`}
                placeholder="Blood Group"
                id="blood_group"
                name="blood_group"
                value={formData.blood_group}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.blood_group && <div className="invalid-feedback">{errors.blood_group}</div>}
            </div>
          </div>

          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Gender</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                placeholder="Select Gender"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
          </div>

          {/* {!editEmployeeEmail ?
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
            } */}
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Role</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                placeholder="Role"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.role && <div className="invalid-feedback">{errors.role}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Status</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                placeholder="Status"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Government Document</Form.Label>
            <div className="col-md-12 col-12">
              <div
                id="gov_doc"
                name="gov_doc"
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