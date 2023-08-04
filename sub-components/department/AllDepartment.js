// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Dropdown } from 'react-bootstrap';

// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import departmentData from 'data/department/department';
import ModalForm from './ModalForm';

const AllDepartment = () => {
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

  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-muted" />
        </Dropdown.Toggle>
        <Dropdown.Menu align={'end'}>
          <Dropdown.Item eventKey="1">
            Edit
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Col md={12} xs={12}>
      <ModalForm />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">All Department</h4>
        </Card.Header>
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
            {departmentData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <h5 className=" mb-1">
                        <Link href="#" className="text-inherit">{item.departName}</Link></h5>
                    </div>
                  </td>
                  <td className="align-middle">{item.headName}</td>
                  <td className="align-middle">{item.mobile}</td>
                  <td className="align-middle">{item.email}</td>
                  <td className="align-middle">{item.totalEmp}</td>
                  <td className="align-middle"><ActionMenu /></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Card>
    </Col>
  )
}

export default AllDepartment;