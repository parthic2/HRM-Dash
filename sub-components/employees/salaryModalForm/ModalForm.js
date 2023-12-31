import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addEmpSalary,
  editEmpSalary,
  editEmployeeEmail,
  employeeData,
  isEditModalOpen,
  setIsEditModalOpen
}) => {
  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Employee Salary</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editEmployeeEmail ? 'Edit Employee Salary' : 'Add Employee Salary'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            editEmployeeEmail={editEmployeeEmail}
            employeeData={employeeData}
            addEmpSalary={addEmpSalary}
            editEmpSalary={editEmpSalary}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;