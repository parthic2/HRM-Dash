// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';

// import required data files
import React, { useState } from 'react';
import { DropFiles, FormSelect } from 'widgets';

const ModalForm = () => {
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

  const [lgShow, setLgShow] = useState(false);

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setLgShow(true)}>Add Clients</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Client
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="organization"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Organization
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Organization"
                    id="organization"
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
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="website"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Website
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website"
                    id="website"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="country"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Country
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    id="country"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="jDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Joining Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Joining Date"
                    id="jDate"
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
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="jDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Upload Client Profile Photo
                </label>
                <div className="col-md-12 col-12">
                  <Form
                    action="#"
                    className="dropzone mb-3 py-10 border-dashed"
                  >
                    <DropFiles />
                  </Form>
                </div>
              </div>
            </Row>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="light" style={{ marginLeft: "10px" }}>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;