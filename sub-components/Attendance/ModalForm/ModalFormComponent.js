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
        <Row className="mb-3">
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
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Employee ID</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Employee ID"
              id="id"
              name="id"
              value={isInEditMode ? formData.id : maxId + 1}
              readOnly
            />
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Department</Form.Label>
            <Form.Control
              className={`form-control ${errors.department ? 'is-invalid' : ''}`}
              as={FormSelect}
              placeholder="Select Department"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              options={deptOptions}
            />
            {errors.department && <div className="invalid-feedback">{errors.department}</div>}
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Status</Form.Label>
            <Form.Control
              as={FormSelect}
              className={`form-control ${errors.status ? 'is-invalid' : ''}`}
              placeholder="Select status"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              options={attStatusOptions}
            />
            {errors.status && <div className="invalid-feedback">{errors.status}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          {formData.status !== 'Leave' && (
            <>
              <div className="col-sm-6">
                <Form.Label className="col-sm-6">Check In</Form.Label>
                <Form.Control
                  type="time"
                  className="form-control"
                  placeholder="Check In"
                  id="checkIn"
                  name="checkIn"
                  maxLength="10"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6">
                <Form.Label className="col-sm-6">Check Out</Form.Label>
                <div className="input-group">
                  <Form.Control
                    type="time"
                    className="form-control"
                    placeholder="Check Out"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </>
          )}
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Profile</Form.Label>
            <div className="col-md-12 col-12">
              <div
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
