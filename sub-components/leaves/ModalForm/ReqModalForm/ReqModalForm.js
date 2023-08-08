import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ReqModalForm = ({
  addLeaveReq,
  leaveData,
  editLeaveReq,
  editLeaveId,
  isEditModalOpen,
  setIsEditModalOpen,
}) => {
  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Leave Request</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editLeaveId ? 'Edit Leave Request' : 'Add Leave Request'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            addLeaveReq={addLeaveReq}
            leaveData={leaveData}
            editLeaveReq={editLeaveReq}
            editLeaveId={editLeaveId}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ReqModalForm;