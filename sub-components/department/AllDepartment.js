import Link from 'next/link';
import { Col, Card, Table } from 'react-bootstrap';
import React from 'react';
import ModalForm from './ModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useDepartmentData from 'hooks/useDepartmentData';

const AllDepartment = () => {
  const { department, editDepartmentName, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick, addDepartment, editDepartment, deleteDepartment } = useDepartmentData();

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addDepartment={addDepartment}
        department={department}
        editDepartment={editDepartment}
        editDepartmentName={editDepartmentName}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">All Department</h4>
        </Card.Header>
        {department.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Department name</th>
                <th>Head of Department</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Total Employees</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {department.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <h5 className=" mb-1">
                          <Link href="#" className="text-inherit">{item.name}</Link></h5>
                      </div>
                    </td>
                    <td className="align-middle">{item.headName}</td>
                    <td className="align-middle">{item.number}</td>
                    <td className="align-middle">{item.email}</td>
                    <td className="align-middle">{item.totalEmp}</td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteDepartment(item.name)}
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

export default AllDepartment;