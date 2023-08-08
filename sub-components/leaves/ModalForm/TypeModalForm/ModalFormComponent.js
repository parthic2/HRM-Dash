import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { FormSelect } from 'widgets';
import { useModalFormLogic } from './ModalFormLogic';
import { statusOptions } from 'data/options/options';

const ModalFormComponent = ({
  addLeaveType,
  editLeave,
  editLeaveName,
  leaveData,
  setIsEditModalOpen
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
    handleInputChange,
  } = useModalFormLogic(leaveData, editLeaveName);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editLeaveName) {
      editLeave({ ...formData, name: editLeaveName });
    } else {
      addLeaveType(formData);
    }

    setFormData({
      name: "",
      type: "",
      status: ""
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editLeaveName; // Check if editLeaveName exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="name"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Leave Name
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Leave Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="type"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Leave Type
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                placeholder="Leave Type"
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              />
              {errors.type && <div className="invalid-feedback">{errors.type}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="status"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Status
            </label>
            <div className="col-md-12 col-12">
              <Form.Control
                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                as={FormSelect}
                placeholder="Select Status"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                options={statusOptions}
              />
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
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