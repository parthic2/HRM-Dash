import ActionMenu from 'common/ActionMenu';
import React from 'react';
import { Card, Col, Table } from 'react-bootstrap';
import ModalForm from './ModalForm/ModalForm';
import useAnnounceData from 'hooks/useAnnounceData';

const Announce = () => {
  const { isEditModalOpen, setIsEditModalOpen, announcements, setAnnouncements, selectAllSelected, setSelectAllSelected, announcementId, setAnnouncementId, announcementText, setAnnouncementText, announcementDetails, setAnnouncementDetails, editAnnouncementIndex, setEditAnnouncementIndex, selectedEmployeeNames, setSelectedEmployeeNames, selectedEmployees, setSelectedEmployees, handleEdit, handleDelete } = useAnnounceData();

  const userInfo = JSON.parse(localStorage.getItem('user'));
  console.log(userInfo.role);

  return (
    <Col md={12} xs={12}>
      {userInfo.role === "employee" ? "" : (
        <ModalForm
          isEditModalOpen={isEditModalOpen}
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
      )}
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">Announcement</h4>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Announcement ID</th>
              <th>Announcement Name</th>
              <th>Announcement Document</th>
              <th>Announcement Detail</th>
              <th>Employee name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((announcement, index) => (
              <tr key={index}>
                <td className="align-middle">{announcement.id}</td>
                <td className="align-middle">{announcement.announcement}</td>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                    <div className={`icon-shape icon-md border p-4 rounded-1`}>
                      {announcement.image ? <Image src={URL.createObjectURL(announcement.image)} alt="" width={35} /> : ""}
                    </div>
                  </div>
                </td>
                <td className="align-middle">{announcement.details}</td>
                <td className="align-middle">
                  {selectAllSelected
                    ? 'Select All'
                    : announcement.employees.join(', ')
                  }
                </td>
                <td className="align-middle">
                  <ActionMenu
                    onEdit={() => handleEdit(index)}
                    onDelete={() => handleDelete(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Col>
  )
}

export default Announce;