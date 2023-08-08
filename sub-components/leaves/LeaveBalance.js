import Link from 'next/link';
import { Col, Card, Table, Image } from 'react-bootstrap';
import LeaveBalanceData from 'data/leave/leaveBalance';
import React from 'react';
import ModalForm from './ModalForm/LeaveModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useLeaveBalData from 'hooks/useLeaveBalData';

const AllLeaveBalance = () => {
  const { leaveData, editLeaveId, addLeaveBal, editLeaveBal, deleteLeaveBal, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick } = useLeaveBalData(LeaveBalanceData);

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addLeaveBal={addLeaveBal}
        leaveData={leaveData}
        editLeaveBal={editLeaveBal}
        editLeaveId={editLeaveId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">Leave Balance</h4>
        </Card.Header>
        {leaveData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Leave Type</th>
                <th>Date of Joining</th>
                <th>Entitled</th>
                <th>Utilized</th>
                <th>Balanced</th>
                <th>Carried Forward</th>
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
                    <td className="align-middle">{item.leaveType}</td>
                    <td className="align-middle">{item.doj}</td>
                    <td className="align-middle">{item.entitled}</td>
                    <td className="align-middle">{item.utilized}</td>
                    <td className="align-middle">{item.balanced}</td>
                    <td className="align-middle">{item.forward}</td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteLeaveBal(item.id)}
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

export default AllLeaveBalance;