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
      <Form onSubmit={handleFormSubmit}>
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="name"
              className="col-sm-6 col-form-label form-label"
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
              className="col-sm-6 col-form-label form-label"
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
              htmlFor="leaveType"
              className="col-sm-6 col-form-label form-label"
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
                options={leaveOptions}
                value={formData.leaveType}
                onChange={handleInputChange}
              />
              {errors.leaveType && <div className="invalid-feedback">{errors.leaveType}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="doj"
              className="col-sm-6 col-form-label form-label"
            >
              Date Of Joining
            </label>
            <div className="col-md-12 col-12">
              <input
                type="date"
                className={`form-control ${errors.doj ? 'is-invalid' : ''}`}
                placeholder="Date Of Joining"
                id="doj"
                name="doj"
                value={formData.doj}
                onChange={handleInputChange}
              />
              {errors.doj && <div className="invalid-feedback">{errors.doj}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="entitled"
              className="col-sm-6 col-form-label form-label"
            >
              Entitled
            </label>
            <div className="col-md-12 col-12">
              <input
                type="number"
                className={`form-control ${errors.entitled ? 'is-invalid' : ''}`}
                placeholder="Entitled"
                id="entitled"
                name="entitled"
                value={formData.entitled}
                onChange={handleInputChange}
              />
              {errors.entitled && <div className="invalid-feedback">{errors.entitled}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="utilized"
              className="col-sm-6 col-form-label form-label"
            >
              Utilized
            </label>
            <div className="col-md-12 col-12">
              <input
                type="number"
                className={`form-control ${errors.utilized ? 'is-invalid' : ''}`}
                placeholder="Utilized"
                id="utilized"
                name="utilized"
                value={formData.utilized}
                onChange={handleInputChange}
              />
              {errors.utilized && <div className="invalid-feedback">{errors.utilized}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="balanced"
              className="col-sm-6 col-form-label form-label"
            >
              Balanced
            </label>
            <div className="col-md-12 col-12">
              <input
                type="number"
                className={`form-control ${errors.balanced ? 'is-invalid' : ''}`}
                placeholder="Balanced"
                id="balanced"
                name="balanced"
                value={formData.balanced}
                onChange={handleInputChange}
              />
              {errors.balanced && <div className="invalid-feedback">{errors.balanced}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="forward"
              className="col-sm-6 col-form-label form-label"
            >
              Carried Forward
            </label>
            <div className="col-md-12 col-12">
              <input
                type="number"
                className={`form-control ${errors.forward ? 'is-invalid' : ''}`}
                placeholder="Carried Forward"
                id="forward"
                name="forward"
                value={formData.forward}
                onChange={handleInputChange}
              />
              {errors.forward && <div className="invalid-feedback">{errors.forward}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="image"
              className="col-sm-6 col-form-label form-label"
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