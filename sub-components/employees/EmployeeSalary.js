import Link from 'next/link';
import { Col, Card, Table, Image } from 'react-bootstrap';
import EmployeesData from 'data/employees/employees';
import React from 'react';
import ModalForm from './salaryModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useEmpSalaryData from 'hooks/useEmpSalaryData';

const AllEmployeeSalary = () => {
  const { employeeData, editEmployeeEmail, addEmpSalary, editEmpSalary, deleteEmpSalary, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick } = useEmpSalaryData(EmployeesData);

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addEmpSalary={addEmpSalary}
        employeeData={employeeData}
        editEmpSalary={editEmpSalary}
        editEmployeeEmail={editEmployeeEmail}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">Employee Salary</h4>
        </Card.Header>
        {employeeData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Employee name</th>
                <th>Designation</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Joining Date</th>
                <th>Salary</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employeeData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className={`icon-shape icon-md border p-4 rounded-1`}>
                            {item.image ? <Image src={URL.createObjectURL(item.image)} alt="" width={35} /> : ""}
                          </div>
                        </div>
                        <div className="ms-3 lh-1">
                          <h5 className=" mb-1">
                            <Link href="#" className="text-inherit">{item.name}</Link></h5>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">{item.designation}</td>
                    <td className="align-middle">{item.number}</td>
                    <td className="align-middle">{item.email}</td>
                    <td className="align-middle">{item.joiningDate}</td>
                    <td className="align-middle">₹ {item.salary}</td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteEmpSalary(item.email)}
                        onEdit={() => handleEditButtonClick(item.email)}
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

export default AllEmployeeSalary;