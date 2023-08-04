// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Image, Dropdown, ProgressBar } from 'react-bootstrap';
// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import ModalForm from './ModalForm';
import ProjectsData from 'data/projects/projects';

const AllProjects = () => {
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
          <h4 className="mb-0">Active Projects</h4>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Project name</th>
              <th>Client name</th>
              <th>DeadLine</th>
              <th>Members</th>
              <th>Status</th>
              <th>Progress</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ProjectsData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <h5 className=" mb-1">
                        <Link href="#" className="text-inherit">{item.projectName}</Link></h5>
                    </div>
                  </td>
                  <td className="align-middle">{item.clientName}</td>
                  <td className="align-middle">{item.deadLine}</td>
                  <td className="align-middle">
                    <div className="avatar-group">
                      {item.members.map((avatar, avatarIndex) => {
                        return (
                          <span className="avatar avatar-sm" key={avatarIndex}>
                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                          </span>
                        )
                      })}
                    </div>
                  </td>
                  <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg}`}>{item.status}</span></td>
                  <td className="align-middle text-dark">
                    <div className="float-start me-3">{item.progress}%</div>
                    <div className="mt-2">
                      <ProgressBar now={item.progress} style={{ height: '5px' }} />
                    </div>
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

export default AllProjects;