// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';
// import required data files
import React, { useEffect, useState } from 'react';
import { DropFiles, FormSelect } from 'widgets';

const ReqModalForm = ({
  addLeaveReq,
  leaveData,
  editLeaveReq,
  editLeaveId,
  isEditModalOpen,
  setIsEditModalOpen,
}) => {
  const leaveOptions = [
    { value: "Family Leave", label: "Family Leave" },
    { value: "Emergency Leave", label: "Emergency Leave" },
    { value: "Annual Leave", label: "Annual Leave" },
    { value: "Casual Leave", label: "Casual Leave" },
    { value: "Maternity Leave", label: "Maternity Leave" },
    { value: "Sick Leave", label: "Sick Leave" },
    { value: "Work From Home Leave", label: "Work From Home Leave" },
  ];

  const statusOptions = [
    { value: "Pending", label: "Pending" },
    { value: "Approved", label: "Approved" },
    { value: "Rejected", label: "Rejected" }
  ];

  const [formData, setFormData] = useState({
    name: "",
    id: "",
    applyDate: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    status: "",
    remark: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    id: "",
    applyDate: "",
    leaveType: "",
    fromDate: "",
    toDate: "",
    status: "",
    remark: ""
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

    if (!formData.id.trim()) {
      newErrors.id = 'ID is required';
      valid = false;
    }

    if (!formData.applyDate.trim()) {
      newErrors.applyDate = 'Apply date is required';
      valid = false;
    }

    if (!formData.leaveType.trim()) {
      newErrors.leaveType = 'Leave type is required';
      valid = false;
    }

    if (!formData.fromDate.trim()) {
      newErrors.fromDate = 'From date is required';
      valid = false;
    }

    if (!formData.toDate.trim()) {
      newErrors.toDate = 'To date is required';
      valid = false;
    }

    if (!formData.status.trim()) {
      newErrors.status = 'Status is required';
      valid = false;
    }

    if (!formData.remark.trim()) {
      newErrors.remark = 'Remark is required';
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

  const handleImageChange = (files) => {
    setFormData({
      ...formData,
      image: files[0] // Store the selected image
    });
  };

  useEffect(() => {
    const selectedLeave = leaveData.find((leave) => leave.id === editLeaveId);
    if (selectedLeave) {
      setFormData(selectedLeave);
    } else {
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
    }
  }, [editLeaveId]);

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
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Leave Request</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editLeaveId ? 'Edit Leave Request' : 'Add Leave Request'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} autoComplete="off">
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="name"
                  className="col-sm-4 col-form-label
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
                  className="col-sm-4 col-form-label
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
                  className="col-sm-4 col-form-label
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
                  className="col-sm-4 col-form-label
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
                  className="col-sm-4 col-form-label
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
                  className="col-sm-4 col-form-label
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
                  className="col-sm-4 col-form-label
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
                    options={statusOptions}
                  />
                  {errors.status && <div className="invalid-feedback">{errors.status}</div>}
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="remark"
                  className="col-sm-4 col-form-label
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
                  className="col-sm-4 col-form-label
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
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ReqModalForm;