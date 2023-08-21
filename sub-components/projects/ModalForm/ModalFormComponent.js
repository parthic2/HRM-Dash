import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles, FormSelect } from 'widgets';
import { useModalFormLogic } from './ModalFormLogic';
import { proStatusOptions } from 'data/options/options';

const ModalFormComponent = ({
  addProject,
  projectData,
  editProject,
  editProjectId,
  setIsEditModalOpen
}) => {

  const {
    formData,
    setFormData,
    errors,
    validateForm,
    handleInputBlur,
    handleInputChange,
    handleImageChange,
  } = useModalFormLogic(projectData, editProjectId);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editProjectId) {
      editProject({ ...formData, id: editProjectId });
    } else {
      addProject(formData);
    }

    setFormData({
      projectName: "",
      clientName: "",
      clientEmail: "",
      startDate: "",
      endDate: "",
      members: "",
      status: "",
      progress: "",
      image: [] // Clear the image after submission
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editProjectId; // Check if editProjectId exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Project Name</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
              placeholder="Project Name"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Client Name</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.clientName ? 'is-invalid' : ''}`}
              placeholder="Client Name"
              id="clientName"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.clientName && <div className="invalid-feedback">{errors.clientName}</div>}
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Client Email</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.clientEmail ? 'is-invalid' : ''}`}
              placeholder="Client Email"
              id="clientEmail"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.clientEmail && <div className="invalid-feedback">{errors.clientEmail}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Start Date</Form.Label>
            <div className="input-group">
              <Form.Control
                type="date"
                className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                placeholder="Start Date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">End Date</Form.Label>
            <Form.Control
              type="date"
              className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
              placeholder="End Date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Status</Form.Label>
            <div className="input-group">
              <Form.Control
                as={FormSelect}
                className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                placeholder="Select status"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                options={proStatusOptions}
              />
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Progress</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.progress ? 'is-invalid' : ''}`}
              placeholder="Progress"
              id="progress"
              name="progress"
              value={formData.progress}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.progress && <div className="invalid-feedback">{errors.progress}</div>}
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Team Member</Form.Label>
            <div className="input-group">
              <Form.Control
                type="number"
                className={`form-control ${errors.members ? 'is-invalid' : ''}`}
                placeholder="Team Member"
                id="members"
                name="members"
                value={formData.members}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.members && <div className="invalid-feedback">{errors.members}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Upload Project Documents</Form.Label>
            <div className="col-md-12 col-12">
              <div className="dropzone mb-3 py-10 border-dashed">
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
  )
}

export default ModalFormComponent