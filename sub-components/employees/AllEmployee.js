// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Image, Dropdown } from 'react-bootstrap';

// import required data files
import EmployeesData from 'data/employees/employees';
import React, { useState } from 'react';
import { MoreVertical } from 'react-feather';
import ModalForm from './ModalForm';

const AllEmployee = () => {
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

  const [employeeData, setEmployeeData] = useState(EmployeesData); // State to hold form data
  const [editEmployeeEmail, setEditEmployeeEmail] = useState(null);

  const addEmployee = (newEmployee) => {
    setEmployeeData([...employeeData, newEmployee]);
  };

  const editEmployee = (editedEmployee) => {
    const updatedData = employeeData.map((employee) =>
      employee.email === editedEmployee.email ? editedEmployee : employee
    );
    setEmployeeData(updatedData);
    setEditEmployeeEmail(null);
  };

  const deleteEmployee = (email) => {
    const updatedData = employeeData.filter((employee) => employee.email !== email);
    setEmployeeData(updatedData);
  };

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addEmployee={addEmployee}
        employeeData={employeeData}
        editEmployee={editEmployee}
        editEmployeeEmail={editEmployeeEmail}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">All Employees</h4>
        </Card.Header>
        {employeeData.length === 0 ? (
          <p>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Employee name</th>
                <th>Designation</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Birth Date</th>
                <th>Address</th>
                <th>Joining Date</th>
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
                    <td className="align-middle">{item.birthDate}</td>
                    <td className="align-middle">{item.address}</td>
                    <td className="align-middle">{item.joiningDate}</td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteEmployee(item.email)}
                        onEdit={() => setEditEmployeeEmail(item.email)}
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

export default AllEmployee;