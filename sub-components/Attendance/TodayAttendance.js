// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Image, Dropdown } from 'react-bootstrap';

// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import TodayAttendances from 'data/attendance/todayAttendance';

const TodayAttendance = () => {
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
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">Today Attendance</h4>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Employee name</th>
              <th>Employee Id</th>
              <th>Department</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {TodayAttendances.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className={`icon-shape icon-md border p-4 rounded-1`}>
                          <Image src={item.employeeImg} alt="" width={35} />
                        </div>
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className=" mb-1">
                          <Link href="/pages/employeeAttendances" className="text-inherit">{item.employeeName}</Link></h5>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">{item.employeeId}</td>
                  <td className="align-middle">{item.department}</td>
                  <td className="align-middle">
                    <span>{item.checkIn}</span>
                  </td>
                  <td className="align-middle">
                    <span>{item.checkOut}</span>
                  </td>
                  <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg}`}>{item.status}</span></td>
                  <td className="align-middle">
                    <ActionMenu />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Card>
    </Col>
  )
}

export default TodayAttendance;