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
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
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
      id: "",
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
            <label
              htmlFor="name"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Employee Name
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Employee Name"
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
              htmlFor="id"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Employee ID
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.id ? 'is-invalid' : ''}`}
                placeholder="Employee ID"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleInputChange}
              />
              {errors.id && <div className="invalid-feedback">{errors.id}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="applyDate"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Apply Date
            </label>
            <div className="col-md-12 col-12">
              <input
                type="date"
                className={`form-control ${errors.applyDate ? 'is-invalid' : ''}`}
                placeholder="Apply Date"
                id="applyDate"
                name="applyDate"
                value={formData.applyDate}
                onChange={handleInputChange}
              />
              {errors.applyDate && <div className="invalid-feedback">{errors.applyDate}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="leaveType"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Leave Type
            </label>
            <div className="col-md-12 col-12">
              <Form.Control
                className={`form-control ${errors.leaveType ? 'is-invalid' : ''}`}
                as={FormSelect}
                placeholder="Select Leave Type"
                id="leaveType"
                name="leaveType"
                value={formData.leaveType}
                onChange={handleInputChange}
                options={leaveOptions}
              />
              {errors.leaveType && <div className="invalid-feedback">{errors.leaveType}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="fromDate"
              className="col-sm-6 col-form-label
                    form-label"
            >
              From Date
            </label>
            <div className="col-md-12 col-12">
              <input
                type="date"
                className={`form-control ${errors.fromDate ? 'is-invalid' : ''}`}
                placeholder="From Date"
                id="fromDate"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleInputChange}
              />
              {errors.fromDate && <div className="invalid-feedback">{errors.fromDate}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="toDate"
              className="col-sm-6 col-form-label
                    form-label"
            >
              To Date
            </label>
            <div className="col-md-12 col-12">
              <input
                type="date"
                className={`form-control ${errors.toDate ? 'is-invalid' : ''}`}
                placeholder="To Date"
                id="toDate"
                name="toDate"
                value={formData.toDate}
                onChange={handleInputChange}
              />
              {errors.toDate && <div className="invalid-feedback">{errors.toDate}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="status"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Status
            </label>
            <div className="col-md-12 col-12">
              <Form.Control
                as={FormSelect}
                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                placeholder="Select Status"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                options={reqStatusOptions}
              />
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="remark"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Remark
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.remark ? 'is-invalid' : ''}`}
                placeholder="Remark"
                id="remark"
                name="remark"
                value={formData.remark}
                onChange={handleInputChange}
              />
              {errors.remark && <div className="invalid-feedback">{errors.remark}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="image"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Employee Profile
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