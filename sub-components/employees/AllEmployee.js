import Link from 'next/link';
import { Col, Card, Table, Form, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import ActionMenu from 'common/ActionMenu';
import ModalForm from './ModalForm/ModalForm';
import useEmployeeData from 'hooks/useEmployeeData';

const AllEmployee = () => {
  const { employeeData, isEditModalOpen, setIsEditModalOpen, editEmployeeEmail, handleEditButtonClick, deleteEmployee } = useEmployeeData();
const [searchQuery, setSearchQuery] = useState("");

return (
  <Col md={12} xs={12}>
    <ModalForm
      isEditModalOpen={isEditModalOpen}
      setIsEditModalOpen={setIsEditModalOpen}
      editEmployeeEmail={editEmployeeEmail}
    />
    <Card>
      <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
        <h4 className="mb-0">All Employees</h4>
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
      {employeeData.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
      ) : (
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Employee ID</th>
              <th>Employee name</th>
              <th>Password</th>
              <th>Designation</th>
              <th>Mobile Number</th>
              <th>Alternative Number</th>
              <th>Email</th>
              <th>Birth Date</th>
              <th>Address</th>
              <th>Joining Date</th>
              <th>Blood Group</th>
              <th>Role</th>
              <th>Status</th>
              <th>Document</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employeeData
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
                      <Link href="#" className="text-inherit">{item.user_name}</Link>
                    </td>
                    <td className="align-middle">{item.password}</td>
                    <td className="align-middle">{item.designation}</td>
                    <td className="align-middle">{item.phone_no}</td>
                    <td className="align-middle">{item.alternative_phone}</td>
                    <td className="align-middle">{item.email}</td>
                    <td className="align-middle">{item.birth_date}</td>
                    <td className="align-middle">{item.address}</td>
                    <td className="align-middle">{item.joining_date}</td>
                    <td className="align-middle">{item.blood_group}</td>
                    <td className="align-middle">{item.role}</td>
                    <td className="align-middle">{item.status}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <div className={`icon-shape icon-md border p-4 rounded-1`}>
                          {item.gov_doc && <Image src={URL.createObjectURL(item.gov_doc.preview)} alt="Gov Doc" width={35} />}
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteEmployee(item.email)}
                        onEdit={() => handleEditButtonClick(item.email)}
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

export default AllEmployee;