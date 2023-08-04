// import node module libraries
import { Col, Modal, Form, Button, Row } from 'react-bootstrap';

// import required data files
import React, { useState } from 'react';
import { FormSelect } from 'widgets';

const ReqModalForm = () => {
  const leaveOptions = [
    { value: "Family Leave", label: "Family Leave" },
    { value: "Emergency Leave", label: "Emergency Leave" },
    { value: "Annual Leave", label: "Annual Leave" },
    { value: "Casual Leave", label: "Casual Leave" },
    { value: "Maternity Leave", label: "Maternity Leave" },
    { value: "Sick Leave", label: "Sick Leave" },
    { value: "Work From Home Leave", label: "Work From Home Leave" },
  ];

  const [lgShow, setLgShow] = useState(false);

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setLgShow(true)}>Add Leave Request</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Leave Request
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
                  Employee Name
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Employee Name"
                    id="name"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="eId"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Employee ID
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Employee ID"
                    id="eId"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="aDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Apply Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Apply Date"
                    id="aDate"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="type"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  Leave Type
                </label>
                <div className="col-md-12 col-12">
                  <Form.Control
                    as={FormSelect}
                    placeholder="Select Leave Type"
                    id="type"
                    options={leaveOptions}
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-6">
                <label
                  htmlFor="fDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  From Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="From Date"
                    id="fDate"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="tDate"
                  className="col-sm-4 col-form-label
                    form-label"
                >
                  To Date
                </label>
                <div className="col-md-12 col-12">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="To Date"
                    id="tDate"
                    required
                  />
                </div>
              </div>
            </Row>
            <Row className="mb-3">
              <div className="col-sm-12">
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
                    className="form-control"
                    placeholder="Remark"
                    id="remark"
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

export default ReqModalForm;