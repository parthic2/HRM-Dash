// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Image, Dropdown } from 'react-bootstrap';

// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import LeaveBalanceData from 'data/leave/leaveBalance';

const AllLeaveBalance = () => {
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
          <h4 className="mb-0">Leave Balance</h4>
        </Card.Header>
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
            {LeaveBalanceData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">{item.employeeId}</td>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className={`icon-shape icon-md border p-4 rounded-1`}>
                          <Image src={item.employeeImg} alt="" width={35} />
                        </div>
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className=" mb-1">
                          <Link href="#" className="text-inherit">{item.employeeName}</Link></h5>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">{item.leaveType}</td>
                  <td className="align-middle">
                    <span>{item.doj}</span>
                  </td>
                  <td className="align-middle">
                    <span>{item.entitled}</span>
                  </td>
                  <td className="align-middle">
                    <span>{item.utilized}</span>
                  </td>
                  <td className="align-middle">
                    <span>{item.balanced}</span>
                  </td>
                  <td className="align-middle">
                    <span>{item.forward}</span>
                  </td>
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

export default AllLeaveBalance;