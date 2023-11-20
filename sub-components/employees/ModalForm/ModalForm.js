import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addEmployee,
  editEmployee,
  editEmployeeEmail,
  employeeData,
  isEditModalOpen,
  setIsEditModalOpen,
  maxId
}) => {
  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Employees</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editEmployeeEmail ? 'Edit Employee' : 'Add Employee'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            editEmployeeEmail={editEmployeeEmail}
            employeeData={employeeData}
            addEmployee={addEmployee}
            editEmployee={editEmployee}
            setIsEditModalOpen={setIsEditModalOpen}
            maxId={maxId}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;