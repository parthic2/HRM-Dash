// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';

// import required data files
import React, { useState } from 'react';
import { FormSelect } from 'widgets';

const ModalForm = () => {
  const statusOptions = [
    { value: "Active", label: "Active" },
    { value: "Deactive", label: "Deactive" }
  ];

  const [lgShow, setLgShow] = useState(false);

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setLgShow(true)}>Add Job</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Job
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="title"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Job Title
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job Title"
                    id="title"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="posType"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Position Type
                </label>
                <div className="col-md-12 col-12">
                  <Form.Control
                    as={FormSelect}
                    placeholder="Select Position Type"
                    id="posType"
                    options={statusOptions}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="department"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Department
                </label>
                <div className="col-md-12 col-12">
                  <Form.Control
                    as={FormSelect}
                    placeholder="Select Department"
                    id="department"
                    options={statusOptions}
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="noPos"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  No Of Position
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="No Of Position"
                    id="noPos"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="intDate"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Interview Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Interview Date"
                    id="intDate"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="location"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Location
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    id="location"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="report"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Reporting To
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Reporting To"
                    id="report"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="qualification"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Desired Qualifications
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Desired Qualifications"
                    id="qualification"
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