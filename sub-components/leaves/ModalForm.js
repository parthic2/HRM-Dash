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
      <div className="btn btn-white mb-5" onClick={() => setLgShow(true)}>Add Leave Type</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Leave Type
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="name"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Leave Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Leave Name"
                    id="name"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="type"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Leave Type
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Leave Type"
                    id="type"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
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
                    placeholder="Select Status"
                    id="status"
                    options={statusOptions}
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