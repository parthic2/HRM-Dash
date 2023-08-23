import { Autocomplete, TextField } from '@mui/material';
import EmployeesData from 'data/employees/employees';
import React, { useState } from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { DropFiles } from 'widgets';

const ModalFormComponent = ({
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
  const [announcementIdError, setAnnouncementIdError] = useState('');
  const [announcementTextError, setAnnouncementTextError] = useState('');
  const [announcementDetailsError, setAnnouncementDetailsError] = useState('');
  const [selectedEmployeesError, setSelectedEmployeesError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!announcementId || !announcementText || !announcementDetails || selectedEmployeeNames.length === 0) {
      setAnnouncementIdError(!announcementId ? "Announcement ID is required" : "");
      setAnnouncementTextError(!announcementText ? "Announcement name is required" : "");
      setAnnouncementDetailsError(!announcementDetails ? "Announcement Details is required" : "");
      setSelectedEmployeesError(selectedEmployeeNames.length === 0 ? "Please select at least one employee" : "");
      return;
    }

    if (editAnnouncementIndex !== null) {
      const updatedAnnouncements = [...announcements];
      updatedAnnouncements[editAnnouncementIndex] = {
        id: announcementId,
        announcement: announcementText,
        details: announcementDetails,
        employees: selectedEmployeeNames,
      };
      setAnnouncements(updatedAnnouncements);
      setEditAnnouncementIndex(null);
    } else {
      const newAnnouncement = {
        id: announcementId,
        announcement: announcementText,
        details: announcementDetails,
        employees: selectedEmployeeNames,
      };
      setAnnouncements([...announcements, newAnnouncement]);
    }

    setSelectedEmployees([]);
    setSelectedEmployeeNames([]);
    setIsEditModalOpen(false);
    setAnnouncementId('');
    setAnnouncementText('');
    setAnnouncementDetails('');
  };

  const handleSelectAll = () => {
    setSelectedEmployees(EmployeesData);
    setSelectedEmployeeNames(EmployeesData.map(employee => employee.name));
  };

  return (
    <Col md={12} xs={12}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Announcement ID</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${announcementIdError ? 'is-invalid' : ''}`}
              placeholder="Announcement ID"
              id="id"
              name="id"
              value={announcementId}
              onChange={(e) => setAnnouncementId(e.target.value)}
              onBlur={() => setAnnouncementIdError(!announcementId ? " Announcement ID is required" : "")}
            />
            <div className="text-danger">{announcementIdError}</div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Announcement</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${announcementTextError ? 'is-invalid' : ''}`}
              placeholder="Announcement"
              id="announcement"
              name="announcement"
              value={announcementText}
              onChange={(e) => setAnnouncementText(e.target.value)}
              onBlur={() => setAnnouncementTextError(!announcementText ? "Announcement name is required" : "")}
            />
            <div className="text-danger">{announcementTextError}</div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Announcement Details</Form.Label>
            <Form.Control
              type="text"
              className={`form-control ${announcementDetailsError ? 'is-invalid' : ''}`}
              placeholder="Announcement Details"
              id="details"
              name="details"
              value={announcementDetails}
              onChange={(e) => setAnnouncementDetails(e.target.value)}
              onBlur={() => setAnnouncementDetailsError(!announcementDetails ? "Announcement Details is required" : "")}
            />
            <div className="text-danger">{announcementDetailsError}</div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">
              Select Employee
            </Form.Label>
            <Autocomplete
              multiple
              options={[{ name: 'Select All' }, ...EmployeesData]}
              getOptionLabel={(option) => option.name}
              value={selectedEmployees}
              onChange={(event, newValue) => {
                if (newValue.length === EmployeesData.length + 1 && newValue.some((item) => item.name === 'Select All')) {
                  setSelectAllSelected(true);
                  handleSelectAll();
                } else {
                  setSelectAllSelected(false);
                  setSelectedEmployees(newValue);
                  setSelectedEmployeeNames(newValue.map(employee => employee.name));
                }
              }}
              filterSelectedOptions
              onBlur={() => setSelectedEmployeesError(selectedEmployeeNames.length === 0 ? "Please select at least one employee" : "")}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Select Employee"
                  className={`form-control ${selectedEmployeesError ? 'is-invalid' : ''}`}
                />
              )}
            />
            <div className="text-danger">{selectedEmployeesError}</div>
          </div>
        </Row>
        <Row className="mb-3">
          <div className="col-sm-12">
            <Form.Label className="col-sm-6">Announcement Document</Form.Label>
            <div className="col-md-12 col-12">
              <div
                className="dropzone mb-3 py-10 border-dashed"
              >
                <DropFiles />
              </div>
            </div>
          </div>
        </Row>

        <Button variant="primary" type="submit">
          Send
        </Button>

        <Button variant="light" style={{ marginLeft: "10px" }} onClick={() => setIsEditModalOpen(false)}>
          Cancel
        </Button>
      </Form>
    </Col>
  );
};

export default ModalFormComponent;