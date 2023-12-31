import Link from 'next/link';
import { Col, Card, Table, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import ModalForm from './ModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useReqData from 'hooks/useReqData';

const AllRequirement = () => {
  const { reqData, editReqId, addRequirement, editRequirement, deleteRequirement, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick, maxId } = useReqData();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addRequirement={addRequirement}
        reqData={reqData}
        editRequirement={editRequirement}
        editReqId={editReqId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        maxId={maxId}
      />
      <Card>
        <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
          <h4 className="mb-0">All Requirements</h4>
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
        {reqData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Job ID</th>
                <th>Job Title</th>
                <th>Position</th>
                <th>Department</th>
                <th>No Of Position</th>
                <th>Interview Date</th>
                <th>Reporting To</th>
                <th>Required Qualification</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reqData
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
                          <h5 className="mb-1">
                            <Link href="#" className="text-inherit">{item.title}</Link></h5>
                        </div>
                      </td>
                      <td className="align-middle">{item.posType}</td>
                      <td className="align-middle">{item.department}</td>
                      <td className="align-middle">{item.noPos}</td>
                      <td className="align-middle">{item.interviewDate}</td>
                      <td className="align-middle">{item.reportingTo}</td>
                      <td className="align-middle">{item.qualification}</td>
                      <td className="align-middle">{item.location}</td>
                      <td className="align-middle">
                        <ActionMenu
                          onDelete={() => deleteRequirement(item.id)}
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

export default AllRequirement;