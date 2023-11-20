import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles, FormSelect } from 'widgets';
import { useModalFormLogic } from './ModalFormLogic';
import { leaveOptions, reqStatusOptions } from 'data/options/options';

const ModalFormComponent = ({
  addLeaveReq,
  leaveData,
  editLeaveReq,
  editLeaveId,
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
    handleImageChange
  } = useModalFormLogic(leaveData, editLeaveId);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editLeaveId) {
      editLeaveReq({ ...formData, id: editLeaveId });
    } else {
      addLeaveReq(formData);
    }
    setFormData({
      name: "",
      applyDate: "",
      leaveType: "",
      fromDate: "",
      toDate: "",
      status: "",
      remark: ""
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editLeaveId; // Check if editLeaveId exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Employee Name</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Employee Name"
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
            <Form.Label className="col-sm-6">Apply Date</Form.Label>
            <Form.Control
              type="date"
              className={`form-control ${errors.applyDate ? 'is-invalid' : ''}`}
              placeholder="Apply Date"
              id="applyDate"
              name="applyDate"
              value={formData.applyDate}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.applyDate && <div className="invalid-feedback">{errors.applyDate}</div>}
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Leave Type</Form.Label>
            <Form.Control
              className={`form-control ${errors.leaveType ? 'is-invalid' : ''}`}
              as={FormSelect}
              placeholder="Select Leave Type"
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              options={leaveOptions}
            />
            {errors.leaveType && <div className="invalid-feedback">{errors.leaveType}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">From Date</Form.Label>
            <div className="input-group">
              <Form.Control
                type="date"
                className={`form-control ${errors.fromDate ? 'is-invalid' : ''}`}
                placeholder="From Date"
                id="fromDate"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.fromDate && <div className="invalid-feedback">{errors.fromDate}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">To Date</Form.Label>
            <Form.Control
              type="date"
              className={`form-control ${errors.toDate ? 'is-invalid' : ''}`}
              placeholder="To Date"
              id="toDate"
              name="toDate"
              value={formData.toDate}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.toDate && <div className="invalid-feedback">{errors.toDate}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Status</Form.Label>
            <div className="input-group">
              <Form.Control
                as={FormSelect}
                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                placeholder="Select Status"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                options={reqStatusOptions}
              />
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Remark</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.remark ? 'is-invalid' : ''}`}
              placeholder="Remark"
              id="remark"
              name="remark"
              value={formData.remark}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.remark && <div className="invalid-feedback">{errors.remark}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Employee Profile</Form.Label>
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