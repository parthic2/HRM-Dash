import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles, FormSelect } from 'widgets';
import { attStatusOptions, deptOptions } from 'data/options/options';
import { useModalFormLogic } from './ModalFormLogic';

const ModalFormComponent = ({
  editAttId,
  attendanceData,
  addAttendance,
  editAttendance,
  setIsEditModalOpen
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
    handleInputChange,
    handleImageChange,
  } = useModalFormLogic(attendanceData, editAttId);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editAttId) {
      editAttendance({ ...formData, id: editAttId });
    } else {
      addAttendance(formData);
    }
    setFormData({
      name: "",
      employeeId: "",
      department: "",
      checkIn: "",
      checkOut: "",
      status: "",
      image: null, // Clear the image after submission
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editAttId; // Check if editAttId exists

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
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="employeeId"
              className="col-sm-6 col-form-label  form-label"
            >
              Employee ID
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.employeeId ? 'is-invalid' : ''}`}
                placeholder="Employee ID"
                id="employeeId"
                name="employeeId"
                value={formData.employeeId}
                onChange={handleInputChange}
              />
              {errors.employeeId && <div className="invalid-feedback">{errors.employeeId}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="department"
              className="col-sm-6 col-form-label form-label"
            >
              Department
            </label>
            <div className="col-md-12 col-12">
              <Form.Control
                className={`form-control ${errors.department ? 'is-invalid' : ''}`}
                as={FormSelect}
                placeholder="Select Department"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                options={deptOptions}
              />
              {errors.department && <div className="invalid-feedback">{errors.department}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="status"
              className="col-sm-6 col-form-label form-label"
            >
              Status
            </label>
            <div className="col-md-12 col-12">
              <Form.Control
                as={FormSelect}
                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                placeholder="Select status"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                options={attStatusOptions}
              />
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          {formData.status !== 'Leave' && (
            <>
              <div className="col-sm-6">
                <label
                  htmlFor="checkOut"
                  className="col-sm-6 col-form-label form-label"
                >
                  Check Out
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="time"
                    className="form-control"
                    // className={`form-control ${errors.checkOut ? 'is-invalid' : ''}`}
                    placeholder="Check Out"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                  />
                  {/* {errors.checkOut && <div className="invalid-feedback">{errors.checkOut}</div>} */}
                </div>
              </div>

              <div className="col-sm-6">
                <label
                  htmlFor="checkIn"
                  className="col-sm-6 col-form-label form-label"
                >
                  Check In
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="time"
                    className="form-control"
                    // className={`form-control ${errors.checkIn ? 'is-invalid' : ''}`}
                    placeholder="Check In"
                    id="checkIn"
                    name="checkIn"
                    maxLength="10"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                  />
                  {/* {errors.checkIn && <div className="invalid-feedback">{errors.checkIn}</div>} */}
                </div>
              </div>
            </>
          )}
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
