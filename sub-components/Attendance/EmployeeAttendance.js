// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Dropdown, Image, Row } from 'react-bootstrap';

// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import employeeAttendances from 'data/attendance/employeeAttendance';

const EmployeeAttendance = () => {
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
      <Card className="mb-5">
        <Card.Body>
          <Image src="/images/avatar/avatar-1.jpg" alt="" className="avatar-md avatar rounded-circle mb-5" />
          <Row>
            <Col xl={3} lg={6} md={6} xs={12} className="mb-5">
              <h6 className="text-uppercase fs-5 ls-2">Anita Parmar</h6>
              <p className="mb-0">Software Developer</p>
            </Col>
            <Col xl={3} lg={6} md={6} xs={12} className="mb-5">
              <h6 className="text-uppercase fs-5 ls-2">Employee ID</h6>
              <p className="mb-0">1001</p>
            </Col>
            <Col xl={3} lg={6} md={6} xs={12} className="mb-5">
              <h6 className="text-uppercase fs-5 ls-2">Joining Date</h6>
              <p className="mb-0">08-02-20</p>
            </Col>
            <Col xl={3} lg={6} md={6} xs={12}>
              <h6 className="text-uppercase fs-5 ls-2">Department</h6>
              <p className="mb-0">Front End Developer</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header className="bg-white py-4">
          <Row>
            <Col xl={3} lg={6} md={6} xs={12}>
              <h6 className="average-time">08:00</h6>
              <p className="average-hrs">Average Working Hours</p>
            </Col>
            <Col xl={3} lg={6} md={6} xs={12}>
              <h6 className="average-time">10:30 AM</h6>
              <p className="average-hrs">Average In Time</p>
            </Col>
            <Col xl={3} lg={6} md={6} xs={12}>
              <h6 className="average-time">07:30</h6>
              <p className="average-hrs">Average Out Time</p>
            </Col>
            <Col xl={3} lg={6} md={6} xs={12}>
              <h6 className="average-time">01:00</h6>
              <p className="average-hrs">Average Break Time</p>
            </Col>
          </Row>
        </Card.Header>

        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Working Hours</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employeeAttendances.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <h5 className=" mb-1">
                        <Link href="#" className="text-inherit">{item.date}</Link></h5>
                    </div>
                  </td>
                  <td className="align-middle">{item.checkIn}</td>
                  <td className="align-middle">{item.checkOut}</td>
                  <td className="align-middle">
                    <span>{item.workingHrs}</span>
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

export default EmployeeAttendance;