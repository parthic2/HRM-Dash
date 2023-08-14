import { totalProjectName } from 'data/options/options';
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FormSelect } from 'widgets';

const ConfirmationModal = ({ showConfirm, setShowConfirm, onSaveProject, onCancelConfirm, projectName, handleChange, isTimerRunning }) => {
  return (
    <Modal
      style={{ paddingLeft: "0px" }}
      size="md"
      show={showConfirm}
      onHide={() => setShowConfirm(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="popup">
          <div className="popup-content">
            {!isTimerRunning && (
              <Form.Control
                className="form-control mb-4"
                placeholder="Project Name"
                id="name"
                name="name"
                value={projectName}
                onChange={handleChange}
                as={FormSelect}
                options={totalProjectName}
              />
            )}

            {isTimerRunning && (
              <>
                <p>Are you sure you want to stop the timer and save the data?</p>
                <Button variant="primary" type="button" onClick={onSaveProject}>
                  Save
                </Button>
                <Button variant="light" style={{ marginLeft: "10px" }} onClick={onCancelConfirm}>
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmationModal;