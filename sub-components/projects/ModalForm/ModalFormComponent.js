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
            <label
              htmlFor="projectName"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Project Name
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.projectName ? 'is-invalid' : ''}`}
                placeholder="Project Name"
                id="projectName"
                name="projectName"
                value={formData.projectName}
                onChange={handleInputChange}
              />
              {errors.projectName && <div className="invalid-feedback">{errors.projectName}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="clientName"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Client Name
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.clientName ? 'is-invalid' : ''}`}
                placeholder="Client Name"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleInputChange}
              />
              {errors.clientName && <div className="invalid-feedback">{errors.clientName}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="clientEmail"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Client Email
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.clientEmail ? 'is-invalid' : ''}`}
                placeholder="Client Email"
                id="clientEmail"
                name="clientEmail"
                value={formData.clientEmail}
                onChange={handleInputChange}
              />
              {errors.clientEmail && <div className="invalid-feedback">{errors.clientEmail}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="startDate"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Start Date
            </label>
            <div className="col-md-12 col-12">
              <input
                type="date"
                className={`form-control ${errors.startDate ? 'is-invalid' : ''}`}
                placeholder="Start Date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
              {errors.startDate && <div className="invalid-feedback">{errors.startDate}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="endDate"
              className="col-sm-6 col-form-label
                    form-label"
            >
              End Date
            </label>
            <div className="col-md-12 col-12">
              <input
                type="date"
                className={`form-control ${errors.endDate ? 'is-invalid' : ''}`}
                placeholder="End Date"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              />
              {errors.endDate && <div className="invalid-feedback">{errors.endDate}</div>}
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
                placeholder="Select status"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                options={proStatusOptions}
              />
              {errors.status && <div className="invalid-feedback">{errors.status}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="progress"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Progress
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.progress ? 'is-invalid' : ''}`}
                placeholder="Progress"
                id="progress"
                name="progress"
                value={formData.progress}
                onChange={handleInputChange}
              />
              {errors.progress && <div className="invalid-feedback">{errors.progress}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="members"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Team Member
            </label>
            <div className="col-md-12 col-12">
              <input
                type="number"
                className={`form-control ${errors.members ? 'is-invalid' : ''}`}
                placeholder="Team Member"
                id="members"
                name="members"
                value={formData.members}
                onChange={handleInputChange}
              />
              {errors.members && <div className="invalid-feedback">{errors.members}</div>}
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
              Upload Project Documents
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
  )
}

export default ModalFormComponent