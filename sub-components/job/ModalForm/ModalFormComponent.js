import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { useModalFormLogic } from './ModalFormLogic';
import { deptOptions, positionOptions } from 'data/options/options';
import { FormSelect } from 'widgets';

const ModalFormComponent = ({
  addRequirement,
  reqData,
  editRequirement,
  editReqId,
  setIsEditModalOpen
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
    handleInputBlur,
    handleInputChange,
  } = useModalFormLogic(reqData, editReqId);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editReqId) {
      editRequirement({ ...formData, id: editReqId });
    } else {
      addRequirement(formData);
    }
    setFormData({
      title: "",
      posType: "",
      department: "",
      noPos: "",
      interviewDate: "",
      location: "",
      reportingTo: "",
      qualification: ""
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editReqId; // Check if editReqId exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="title"
              className="col-sm-6 col-form-label form-label"
            >
              Job Title
            </label>
            <div className="col-md-12 col-12">
              <input
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
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="posType"
              className="col-sm-6 col-form-label form-label"
            >
              Position Type
            </label>
            <div className="col-md-12 col-12">
              <Form.Control
                className={`form-control ${errors.posType ? 'is-invalid' : ''}`}
                as={FormSelect}
                placeholder="Select Position Type"
                id="posType"
                name="posType"
                value={formData.posType}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                options={positionOptions}
              />
              {errors.posType && <div className="invalid-feedback">{errors.posType}</div>}
            </div>
          </div>
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
                onBlur={handleInputBlur}
                options={deptOptions}
              />
              {errors.department && <div className="invalid-feedback">{errors.department}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="noPos"
              className="col-sm-6 col-form-label form-label"
            >
              No Of Position
            </label>
            <div className="col-md-12 col-12">
              <input
                type="number"
                className={`form-control ${errors.noPos ? 'is-invalid' : ''}`}
                placeholder="No Of Position"
                id="noPos"
                name="noPos"
                value={formData.noPos}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.noPos && <div className="invalid-feedback">{errors.noPos}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="interviewDate"
              className="col-sm-6 col-form-label form-label"
            >
              Interview Date
            </label>
            <div className="col-md-12 col-12">
              <input
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
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="location"
              className="col-sm-6 col-form-label form-label"
            >
              Location
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                placeholder="Location"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.location && <div className="invalid-feedback">{errors.location}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="reportingTo"
              className="col-sm-6 col-form-label form-label"
            >
              Reporting To
            </label>
            <div className="col-md-12 col-12">
              <input
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
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="qualification"
              className="col-sm-6 col-form-label form-label"
            >
              Desired Qualifications
            </label>
            <div className="col-md-12 col-12">
              <input
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