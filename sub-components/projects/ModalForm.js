// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';

// import required data files
import React, { useState } from 'react';
import { DropFiles, FormSelect } from 'widgets';

const ModalForm = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setLgShow(true)}>Add Projects</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Projects
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* row */}
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="pName"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Project Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Project Name"
                    id="pName"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="cName"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Client Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Client Name"
                    id="cName"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="cEmail"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Client Email
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Client Email"
                    id="cEmail"
                    required
                  />
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
                    className="form-control"
                    placeholder="Start Date"
                    id="startDate"
                    required
                  />
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
                    className="form-control"
                    placeholder="End Date"
                    id="endDate"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="member"
                  className="col-sm-6 col-form-label
                    form-label"
                >
                  Team Member
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Team Member"
                    id="member"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
                <label
                  htmlFor="jDate"
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