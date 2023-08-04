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
      <div className="btn btn-white mb-5" onClick={() => setLgShow(true)}>Add Department</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Department
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
                  Department Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Department Name"
                    id="name"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="head"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Head Of Department
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Head Of Department"
                    id="head"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="phone"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Phone No.
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    id="phone"
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
                  htmlFor="sDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Starting Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Starting Date"
                    id="sDate"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="totalEmp"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Total Employee
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Total Employee"
                    id="totalEmp"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="more"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  More About Department
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="More About Department"
                    id="more"
                    required
                  />
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