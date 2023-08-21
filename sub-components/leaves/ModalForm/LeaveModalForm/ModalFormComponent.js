import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles, FormSelect } from 'widgets';
import { useModalFormLogic } from './ModalFormLogic';
import { leaveOptions } from 'data/options/options';

const ModalFormComponent = ({
  addLeaveBal,
  leaveData,
  editLeaveBal,
  editLeaveId,
  setIsEditModalOpen,
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
      editLeaveBal({ ...formData, id: editLeaveId });
    } else {
      addLeaveBal(formData);
    }
    setFormData({
      name: "",
      id: "",
      doj: "",
      leaveType: "",
      entitled: "",
      utilized: "",
      balanced: "",
      forward: "",
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editLeaveId; // Check if editLeaveId exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete='off'>
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Employee ID</Form.Label>
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
            {errors.id && <div className="invalid-feedback">{errors.id}</div>}
          </div>
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
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Leave Type</Form.Label>
            <Form.Control
              className={`form-control ${errors.leaveType ? 'is-invalid' : ''}`}
              as={FormSelect}
              placeholder="Select Leave Type"
              id="leaveType"
              name="leaveType"
              options={leaveOptions}
              value={formData.leaveType}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.leaveType && <div className="invalid-feedback">{errors.leaveType}</div>}
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Date Of Joining</Form.Label>
            <Form.Control
              type="date"
              className={`form-control ${errors.doj ? 'is-invalid' : ''}`}
              placeholder="Date Of Joining"
              id="doj"
              name="doj"
              value={formData.doj}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.doj && <div className="invalid-feedback">{errors.doj}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Entitled</Form.Label>
            <div className="input-group">
              <Form.Control
                type="number"
                className={`form-control ${errors.entitled ? 'is-invalid' : ''}`}
                placeholder="Entitled"
                id="entitled"
                name="entitled"
                value={formData.entitled}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.entitled && <div className="invalid-feedback">{errors.entitled}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Utilized</Form.Label>
            <Form.Control
              type="number"
              className={`form-control ${errors.utilized ? 'is-invalid' : ''}`}
              placeholder="Utilized"
              id="utilized"
              name="utilized"
              value={formData.utilized}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.utilized && <div className="invalid-feedback">{errors.utilized}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Balanced</Form.Label>
            <div className="input-group">
              <Form.Control
                type="number"
                className={`form-control ${errors.balanced ? 'is-invalid' : ''}`}
                placeholder="Balanced"
                id="balanced"
                name="balanced"
                value={formData.balanced}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.balanced && <div className="invalid-feedback">{errors.balanced}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Carried Forward</Form.Label>
            <Form.Control
              type="number"
              className={`form-control ${errors.forward ? 'is-invalid' : ''}`}
              placeholder="Carried Forward"
              id="forward"
              name="forward"
              value={formData.forward}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.forward && <div className="invalid-feedback">{errors.forward}</div>}
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