// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';

// import required data files
import React, { useEffect, useState } from 'react';
import { FormSelect } from 'widgets';

const ModalForm = ({
  addLeaveType,
  editLeave,
  editLeaveName,
  leaveData,
  isEditModalOpen,
  setIsEditModalOpen
}) => {
  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Deactive", label: "Deactive" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    type: "",
    status: ""
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only characters.";
      valid = false;
    }

    if (!formData.type.trim()) {
      newErrors.type = 'Leave type is required';
      valid = false;
    }

    if (!formData.status.trim()) {
      newErrors.status = 'Leave status is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const selectedLeave = leaveData.find((leave) => leave.name === editLeaveName);
    if (selectedLeave) {
      setFormData(selectedLeave);
    } else {
      setFormData({
        name: "",
        type: "",
        status: ""
      });
    }
  }, [editLeaveName]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editLeaveName) {
      editLeave({ ...formData, name: editLeaveName });
    } else {
      addLeaveType(formData);
    }

    setFormData({
      name: "",
      type: "",
      status: ""
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editLeaveName; // Check if editLeaveName exists

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Leave Type</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editLeaveName ? 'Edit Leave Type' : 'Add Leave Type'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} autoComplete="off">
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="name"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Leave Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Leave Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="type"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Leave Type
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                    placeholder="Leave Type"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                  />
                  {errors.type && <div className="invalid-feedback">{errors.type}</div>}
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="status"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Status
                </label>
                <div className="col-md-12 col-12">
                  <Form.Control
                    className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                    as={FormSelect}
                    placeholder="Select Status"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    options={statusOptions}
                  />
                  {errors.status && <div className="invalid-feedback">{errors.status}</div>}
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
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;