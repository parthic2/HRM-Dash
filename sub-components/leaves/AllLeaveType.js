import Link from 'next/link';
import { Col, Card, Table } from 'react-bootstrap';
import React from 'react';
import ModalForm from './ModalForm/TypeModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useLeaveTypeData from 'hooks/useLeaveTypeData';

const statusColorMap = {
  Active: "success",
  Deactive: 'warning',
};

const AllLeaveType = () => {
  const { leaveData, editLeaveName, addLeaveType, editLeave, deleteLeaveType, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick } = useLeaveTypeData();

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