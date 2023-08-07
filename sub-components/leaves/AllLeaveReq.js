// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Image, Dropdown } from 'react-bootstrap';
// import required data files
import React, { useState } from 'react';
import { MoreVertical } from 'react-feather';
import LeaveReqData from 'data/leave/leaveReq';
import ReqModalForm from './ReqModalForm';

const statusColorMap = {
  Pending: "warning",
  Approved: 'success',
  Rejected: 'danger',
};

const AllLeaveReq = () => {
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

  const [leaveData, setLeaveData] = useState(LeaveReqData); // State to hold form data
  const [editLeaveId, setEditLeaveId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEditButtonClick = (id) => {
    setEditLeaveId(id);
    setIsEditModalOpen(true);
  };

  const addLeaveReq = (newLeave) => {
    setLeaveData([...leaveData, newLeave]);
  };

  const editLeaveReq = (editedLeave) => {
    const updatedData = leaveData.map((leave) =>
      leave.id === editedLeave.id ? editedLeave : leave
    );
    setLeaveData(updatedData);
    setEditLeaveId(null);
  };

  const deleteEmployee = (id) => {
    const updatedData = leaveData.filter((leave) => leave.id !== id);
    setLeaveData(updatedData);
  };

  return (
    <Col md={12} xs={12}>
      <ReqModalForm
        addLeaveReq={addLeaveReq}
        leaveData={leaveData}
        editLeaveReq={editLeaveReq}
        editLeaveId={editLeaveId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">All Leave Request</h4>
        </Card.Header>
        {leaveData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Apply Date</th>
                <th>Status</th>
                <th>Leave From</th>
                <th>Leave To</th>
                <th>Leave Type</th>
                <th>Remark</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.id}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className={`icon-shape icon-md border p-4 rounded-1`}>
                            <Image src={item.employeeImg} alt="" width={35} />

                            {item.image ? <Image src={URL.createObjectURL(item.image)} alt="" width={35} /> : ""}
                          </div>
                        </div>
                        <div className="ms-3 lh-1">
                          <h5 className=" mb-1">
                            <Link href="#" className="text-inherit">{item.name}</Link></h5>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">{item.applyDate}</td>
                    <td className="align-middle">
                      <span className={`badge bg-${statusColorMap[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="align-middle">{item.fromDate}</td>
                    <td className="align-middle">{item.toDate}</td>
                    <td className="align-middle">{item.leaveType}</td>
                    <td className="align-middle">{item.remark}</td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteEmployee(item.id)}
                        onEdit={() => handleEditButtonClick(item.id)}
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

export default AllLeaveReq;