// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Dropdown } from 'react-bootstrap';

// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import leaveTypeData from 'data/leave/leaveType';
import Accounts from 'data/accounts/accounts';

const AllIncome = () => {
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
          <h4 className="mb-0">All Income</h4>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Invoice No.</th>
              <th>Date</th>
              <th>Client Name</th>
              <th>Project Name</th>
              <th>Payment Type</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Accounts.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <h5 className="mb-1">
                        <Link href="#" className="text-inherit">{item.invoice}</Link></h5>
                    </div>
                  </td>
                  <td className="align-middle">{item.date}</td>
                  <td className="align-middle">{item.clientName}</td>
                  <td className="align-middle">{item.projectName}</td>
                  <td className="align-middle">{item.paymentType}</td>
                  <td className="align-middle">{item.amount}</td>
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

export default AllIncome;