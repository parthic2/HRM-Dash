import { Col, Modal } from 'react-bootstrap';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addLeaveBal,
  leaveData,
  editLeaveBal,
  editLeaveId,
  isEditModalOpen,
  setIsEditModalOpen,
  maxId
}) => {
  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Employee Leave Balance</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Employee Leave Balance
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            addLeaveBal={addLeaveBal}
            leaveData={leaveData}
            editLeaveBal={editLeaveBal}
            editLeaveId={editLeaveId}
            setIsEditModalOpen={setIsEditModalOpen}
            maxId={maxId}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;