import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addLeaveType,
  editLeave,
  editLeaveName,
  leaveData,
  isEditModalOpen,
  setIsEditModalOpen
}) => {

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Leave Type</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editLeaveName ? 'Edit Leave Type' : 'Add Leave Type'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            addLeaveType={addLeaveType}
            editLeave={editLeave}
            editLeaveName={editLeaveName}
            leaveData={leaveData}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;