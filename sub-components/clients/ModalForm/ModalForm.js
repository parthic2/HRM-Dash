import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addClient,
  editClient,
  editClientId,
  clientData,
  isEditModalOpen,
  setIsEditModalOpen
}) => {
  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Clients</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editClientId ? 'Edit Client' : 'Add Client'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            addClient={addClient}
            editClient={editClient}
            editClientId={editClientId}
            clientData={clientData}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;