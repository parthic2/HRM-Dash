import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addRequirement,
  reqData,
  editRequirement,
  editReqId,
  isEditModalOpen,
  setIsEditModalOpen,
  maxId
}) => {
  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Job</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editReqId ? 'Edit Job' : 'Add Job'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            addRequirement={addRequirement}
            reqData={reqData}
            editRequirement={editRequirement}
            editReqId={editReqId}
            setIsEditModalOpen={setIsEditModalOpen}
            maxId={maxId}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;