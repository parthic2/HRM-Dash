import { Col, Modal } from 'react-bootstrap';
import React from 'react';
import ModalFormComponent from './ModalFormComponent';

const ModalForm = ({
  isEditModalOpen,
  setIsEditModalOpen,
  announcements,
  setAnnouncements,
  setSelectAllSelected,
  announcementId,
  setAnnouncementId,
  announcementText,
  setAnnouncementText,
  announcementDetails,
  setAnnouncementDetails,
  editAnnouncementIndex,
  setEditAnnouncementIndex,
  selectedEmployeeNames,
  setSelectedEmployeeNames,
  selectedEmployees,
  setSelectedEmployees
}) => {
  return (
    <Col md={12} xs={12}>
      <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Announcement</div>
      <Modal
        style={{ paddingLeft: "0px" }}
        size="lg"
        show={isEditModalOpen}
        onHide={() => setIsEditModalOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {editAnnouncementIndex !== null ? 'Edit Announcement' : 'Add Announcement'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalFormComponent
            setIsEditModalOpen={setIsEditModalOpen}
            announcements={announcements}
            setAnnouncements={setAnnouncements}
            setSelectAllSelected={setSelectAllSelected}
            announcementId={announcementId}
            setAnnouncementId={setAnnouncementId}
            announcementText={announcementText}
            setAnnouncementText={setAnnouncementText}
            announcementDetails={announcementDetails}
            setAnnouncementDetails={setAnnouncementDetails}
            editAnnouncementIndex={editAnnouncementIndex}
            setEditAnnouncementIndex={setEditAnnouncementIndex}
            selectedEmployeeNames={selectedEmployeeNames}
            setSelectedEmployeeNames={setSelectedEmployeeNames}
            selectedEmployees={selectedEmployees}
            setSelectedEmployees={setSelectedEmployees}
          />
        </Modal.Body>
      </Modal>
    </Col>
  )
}

export default ModalForm;