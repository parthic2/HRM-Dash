// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';
// import required data files
import React, { useEffect, useState } from 'react';
import { DropFiles, FormSelect } from 'widgets';

const ModalForm = ({ addEmployee, editEmployee, editEmployeeEmail, employeeData }) => {
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

  const [lgShow, setLgShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    designation: "",
    joiningDate: "",
    birthDate: "",
    image: null // To store the selected image
  });

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
    const selectedEmployee = employeeData.find((employee) => employee.email === editEmployeeEmail);
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    } else {
      setFormData({
        name: "",
        email: "",
        number: "",
        address: "",
        designation: "",
        joiningDate: "",
        birthDate: "",
        image: null, // Clear the image after submission
      });
    }
  }, [editEmployeeEmail]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editEmployeeEmail) {
      editEmployee({ ...formData, email: editEmployeeEmail });
    } else {
      addEmployee(formData);
    }
    setFormData({
      name: "",
      email: "",
      number: "",
      address: "",
      designation: "",
      joiningDate: "",
      birthDate: "",
      image: null, // Clear the image after submission
    });
    setLgShow(false);
  };

  const isInEditMode = !!editEmployeeEmail; // Check if editEmployeeEmail exists

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setLgShow(true)}>Add Employees</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Employees
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="name"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="email"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Email
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="designation"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Designation
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Designation"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="number"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Mobile No.
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="address"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Address
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="birthDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Birth Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Birth Date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="joiningDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Joining Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Birth Date"
                    id="joiningDate"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="gender"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Gender
                </label>
                <div className="col-md-12 col-12">
                  <Form.Control
                    as={FormSelect}
                    placeholder="Select Gender"
                    id="gender"
                    options={genderOptions}
                  />
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
                  Profile
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
            <Button variant="light" style={{ marginLeft: "10px" }} onClick={() => setLgShow(false)}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;