import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles, FormSelect } from 'widgets';
import { genderOptions } from 'data/options/options';
import { useModalFormLogic } from './ModalFormLogic';

const ModalFormComponent = ({
  addClient,
  editClient,
  editClientId,
  clientData,
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
  } = useModalFormLogic(clientData, editClientId);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editClientId) {
      editClient({ ...formData, id: editClientId });
    } else {
      addClient(formData);
    }

    setFormData({
      id: "",
      name: "",
      email: "",
      number: "",
      address: "",
      organization: "",
      website: "",
      country: "",
      image: null // Clear the image after submission
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editClientId; // Check if editClientId exists

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleFormSubmit} autoComplete="off">
        {/* row */}
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Client ID</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.id ? 'is-invalid' : ''}`}
              placeholder="Client ID"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.id && <div className="invalid-feedback">{errors.id}</div>}
          </div>
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
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Email</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              placeholder="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Organization</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
              placeholder="Organization"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.organization && <div className="invalid-feedback">{errors.organization}</div>}
          </div>
        </Row>

        <Row className="mb-3">
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Mobile No.</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${errors.number ? 'is-invalid' : ''}`}
              placeholder="Mobile Number"
              id="number"
              name="number"
              maxLength="10"
              value={formData.number}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            {errors.number && <div className="invalid-feedback">{errors.number}</div>}
          </div>
          <div className="col-sm-6">
            <Form.Label className="col-sm-6">Website</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.website ? 'is-invalid' : ''}`}
                placeholder="Website"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.website && <div className="invalid-feedback">{errors.website}</div>}
            </div>
          </div>
        </Row>

        {!editClientId ? (
          <Row className="mb-3">
            <div className="col-sm-6">
              <Form.Label className="col-sm-6">Country</Form.Label>
              <Form.Control
                type="text"
                className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                placeholder="Country"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.country && <div className="invalid-feedback">{errors.country}</div>}
            </div>
            <div className="col-sm-6">
              <Form.Label className="col-sm-6">Gender</Form.Label>
              <Form.Control
                as={FormSelect}
                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                placeholder="Select Gender"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                options={genderOptions}
              />
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>
          </Row>
        ) : ""}

        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Address</Form.Label>
            <div className="input-group">
              <Form.Control
                type="text"
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                placeholder="Address"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Upload Client Profile Photo</Form.Label>
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
