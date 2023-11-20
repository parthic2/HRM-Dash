import Link from 'next/link';
import { Col, Card, Table, Image, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import ReqModalForm from './ModalForm/ReqModalForm/ReqModalForm';
import ActionMenu from 'common/ActionMenu';
import useLeaveReqData from 'hooks/useLeaveReqData';

const statusColorMap = {
  Pending: "warning",
  Approved: 'success',
  Rejected: 'danger',
};

const AllLeaveReq = () => {
  const { leaveData, editLeaveId, addLeaveReq, editLeaveReq, deleteLeaveReq, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick,maxId } = useLeaveReqData();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Col md={12} xs={12}>
      <ReqModalForm
        addLeaveReq={addLeaveReq}
        leaveData={leaveData}
        editLeaveReq={editLeaveReq}
        editLeaveId={editLeaveId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        maxId={maxId}
      />
      <Card>
      <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
          <h4 className="mb-0">All Leave Request</h4>
          <div>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
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
              {leaveData
                .filter((item) =>
                  Object.values(item).some(
                    (value) =>
                      value &&
                      typeof value === 'string' &&
                      value.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                )
                .map((item, index) => {
                  return (
                    <tr key={index}>
                    <td className="align-middle">{item.id}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className={`icon-shape icon-md border p-4 rounded-1`}>
                            {/* <Image src={item.employeeImg} alt="" width={35} />
                            {item.image ? <Image src={URL.createObjectURL(item.image)} alt="" width={35} /> : ""} */}
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
                        onDelete={() => deleteLeaveReq(item.id)}
                        onEdit={() => handleEditButtonClick(item.id)}
                      />
                    </td>
                  </tr>
                  );
                })}
            </tbody>
          </Table>
        )}
      </Card>
    </Col>
  )
}

export default AllLeaveReq;