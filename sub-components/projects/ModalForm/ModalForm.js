import { Col, Modal } from 'react-bootstrap';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  addProject,
  projectData,
  editProject,
  editProjectId,
  isEditModalOpen,
  setIsEditModalOpen
}) => {

  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Projects</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add Projects
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            addProject={addProject}
            projectData={projectData}
            editProject={editProject}
            editProjectId={editProjectId}
            setIsEditModalOpen={setIsEditModalOpen}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;