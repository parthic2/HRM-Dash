import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { useModalFormLogic } from './ModalFormLogic';
import { deptOptions } from 'data/options/options';
import { FormSelect } from 'widgets';

const ModalFormComponent = ({
  addApplicant,
  applicantData,
  editApplicant,
  editAppliId,
  setIsEditModalOpen
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
    handleInputBlur,
    handleInputChange,
  } = useModalFormLogic(applicantData, editAppliId);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editAppliId) {
      editApplicant({ ...formData, id: editAppliId });
    } else {
      addApplicant(formData);
    }
    setFormData({
      name: "",
      title: "",
      department: "",
      interviewDate: "",
      interviewTime: "",
      reportingTo: "",
      qualification: ""
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editAppliId; // Check if editAppliId exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Name</Form.Label>
            <div className="input-group">
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
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Job Title</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.title ? 'is-invalid' : ''}`}
              placeholder="Job Title"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.title && <div className="invalid-feedback">{errors.title}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Department</Form.Label>
            <div className="input-group">
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
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Interview Date</Form.Label>
            <Form.Control
              type="date"
              className={`form-control ${errors.interviewDate ? 'is-invalid' : ''}`}
              placeholder="Interview Date"
              id="interviewDate"
              name="interviewDate"
              value={formData.interviewDate}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.interviewDate && <div className="invalid-feedback">{errors.interviewDate}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Interview Time</Form.Label>
            <div className="input-group">
              <Form.Control
                type="time"
                className={`form-control ${errors.interviewTime ? 'is-invalid' : ''}`}
                placeholder="Interview Time"
                id="interviewTime"
                name="interviewTime"
                value={formData.interviewTime}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.interviewTime && <div className="invalid-feedback">{errors.interviewTime}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Reporting To</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.reportingTo ? 'is-invalid' : ''}`}
              placeholder="Reporting To"
              id="reportingTo"
              name="reportingTo"
              value={formData.reportingTo}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.reportingTo && <div className="invalid-feedback">{errors.reportingTo}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Desired Qualifications</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.qualification ? 'is-invalid' : ''}`}
                placeholder="Desired Qualifications"
                id="qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.qualification && <div className="invalid-feedback">{errors.qualification}</div>}
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