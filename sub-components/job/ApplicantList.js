// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Dropdown } from 'react-bootstrap';

// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import ApplicantData from 'data/job/applicant';

const AllApplicantList = () => {
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
      {/* <ModalForm /> */}
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">Applicant List</h4>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Job Title</th>
              <th>Department</th>
              <th>Interview Date</th>
              <th>Interview Time</th>
              <th>Reporting To</th>
              <th>Qualification</th>
              <th>Resume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ApplicantData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <h5 className="mb-1">
                        <Link href="#" className="text-inherit">{item.name}</Link></h5>
                    </div>
                  </td>
                  <td className="align-middle">{item.jobTitle}</td>
                  <td className="align-middle">{item.department}</td>
                  <td className="align-middle">{item.interviewDate}</td>
                  <td className="align-middle">{item.interviewTime}</td>
                  <td className="align-middle">{item.reporting}</td>
                  <td className="align-middle">{item.requiredQua}</td>
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

export default AllApplicantList;