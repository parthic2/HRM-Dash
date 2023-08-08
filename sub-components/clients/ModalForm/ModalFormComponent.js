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
      name: "",
      email: "",
      number: "",
      address: "",
      organization: "",
      joiningDate: "",
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
            <label
              htmlFor="name"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Name
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Name"
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
              htmlFor="email"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Email
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-6">
            <label
              htmlFor="organization"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Organization
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
                placeholder="Organization"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
              />
              {errors.organization && <div className="invalid-feedback">{errors.organization}</div>}
            </div>
          </div>
          <div className="col-sm-6">
            <label
              htmlFor="number"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Mobile No.
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.number ? 'is-invalid' : ''}`}
                placeholder="Mobile Number"
                id="number"
                name="number"
                maxLength="10"
                value={formData.number}
                onChange={handleInputChange}
              />
              {errors.number && <div className="invalid-feedback">{errors.number}</div>}
            </div>
          </div>
        </Row>

        {!editClientId ? (
          <Row className="mb-3">
            <div className="col-sm-6">
              <label
                htmlFor="website"
                className="col-sm-6 col-form-label
                    form-label"
              >
                Website
              </label>
              <div className="col-md-12 col-12">
                <input
                  type="text"
                  className={`form-control ${errors.website ? 'is-invalid' : ''}`}
                  placeholder="Website"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
                {errors.website && <div className="invalid-feedback">{errors.website}</div>}
              </div>
            </div>
            <div className="col-sm-6">
              <label
                htmlFor="country"
                className="col-sm-6 col-form-label
                    form-label"
              >
                Country
              </label>
              <div className="col-md-12 col-12">
                <input
                  type="text"
                  className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                  placeholder="Country"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
                {errors.country && <div className="invalid-feedback">{errors.country}</div>}
              </div>
            </div>
          </Row>
        ) : ""}

        {!editClientId ? (
          <Row className="mb-3">
            <div className="col-sm-6">
              <label
                htmlFor="joiningDate"
                className="col-sm-6 col-form-label
                    form-label"
              >
                Joining Date
              </label>
              <div className="col-md-12 col-12">
                <input
                  type="date"
                  className={`form-control ${errors.joiningDate ? 'is-invalid' : ''}`}
                  placeholder="Joining Date"
                  id="joiningDate"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleInputChange}
                />
                {errors.joiningDate && <div className="invalid-feedback">{errors.joiningDate}</div>}
              </div>
            </div>
            <div className="col-sm-6">
              <label
                htmlFor="gender"
                className="col-sm-6 col-form-label
                    form-label"
              >
                Gender
              </label>
              <div className="col-md-12 col-12">
                <Form.Control
                  as={FormSelect}
                  className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                  placeholder="Select Gender"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  options={genderOptions}
                />
                {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
              </div>
            </div>
          </Row>
        ) : ""}

        <Row className="mb-3">
          <div className="col-sm-12">
            <label
              htmlFor="address"
              className="col-sm-6 col-form-label
                    form-label"
            >
              Address
            </label>
            <div className="col-md-12 col-12">
              <input
                type="text"
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                placeholder="Address"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
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
              Upload Client Profile Photo
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
