// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Dropdown } from 'react-bootstrap';
// import required data files
import React, { useState } from 'react';
import { MoreVertical } from 'react-feather';
import ModalForm from './ModalForm';
import leaveTypeData from 'data/leave/leaveType';

const statusColorMap = {
  Active: "success",
  Deactive: 'warning',
};

const AllLeaveType = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    (<Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="text-muted text-primary-hover">
      {children}
    </Link>)
  ));

  CustomToggle.displayName = 'CustomToggle';

  const ActionMenu = ({ onDelete, onEdit }) => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-muted" />
        </Dropdown.Toggle>
        <Dropdown.Menu align={'end'}>
          <Dropdown.Item eventKey="1" onClick={onEdit}>
            Edit
          </Dropdown.Item>
          <Dropdown.Item eventKey="2" onClick={onDelete}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  const [leaveData, setLeaveData] = useState(leaveTypeData); // State to hold form data
  const [editLeaveName, setEditLeaveName] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditButtonClick = (name) => {
    setEditLeaveName(name);
    setIsEditModalOpen(true);
  };

  const addLeaveType = (newLeave) => {
    setLeaveData([...leaveData, newLeave]);
  };

  const editLeave = (editedLeave) => {
    const updatedData = leaveData.map((leave) =>
      leave.name === editedLeave.name ? editedLeave : leave
    );
    setLeaveData(updatedData);
    setEditLeaveName(null);
  };

  const deleteLeaveType = (name) => {
    const updatedData = leaveData.filter((leave) => leave.name !== name);
    setLeaveData(updatedData);
  };

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addLeaveType={addLeaveType}
        leaveData={leaveData}
        editLeave={editLeave}
        editLeaveName={editLeaveName}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">All Leave Type</h4>
        </Card.Header>
        {leaveData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Leave name</th>
                <th>Leave Type</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <h5 className=" mb-1">
                          <Link href="#" className="text-inherit">{item.name}</Link></h5>
                      </div>
                    </td>
                    <td className="align-middle">{item.type}</td>
                    <td className="align-middle">
                      <span className={`badge bg-${statusColorMap[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteLeaveType(item.name)}
                        onEdit={() => handleEditButtonClick(item.name)}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        )}
      </Card>
    </Col>
  )
}

export default AllLeaveType;