import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addDepartment,
  department,
  editDepartment,
  editDepartmentName,
  isEditModalOpen,
  setIsEditModalOpen
}) => {

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Department</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editDepartmentName ? 'Edit Department' : 'Add Department'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            addDepartment={addDepartment}
            department={department}
            editDepartment={editDepartment}
            editDepartmentName={editDepartmentName}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;