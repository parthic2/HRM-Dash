// import node module libraries
import Link from 'next/link';
import { Col, Card, Table, Image, Dropdown } from 'react-bootstrap';

// import required data files
import React from 'react';
import { MoreVertical } from 'react-feather';
import ModalForm from './ModalForm';
import ClientData from 'data/clients/clients';

const AllClients = () => {
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
          <h4 className="mb-0">All Clients</h4>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Client ID</th>
              <th>Client Name</th>
              <th>Organization</th>
              <th>Mobile No.</th>
              <th>Email</th>
              <th>Address</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ClientData.map((item, index) => {
              return (
                <tr key={index}>
                <td className="align-middle">{item.clientId}</td>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className={`icon-shape icon-md border p-4 rounded-1`}>
                          <Image src={item.clientImg} alt="" width={35} />
                        </div>
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className=" mb-1">
                          <Link href="#" className="text-inherit">{item.clientName}</Link></h5>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">{item.organization}</td>
                  <td className="align-middle">
                    <span>{item.mobile}</span>
                  </td>
                  <td className="align-middle">
                    <span>{item.email}</span>
                  </td>
                  <td className="align-middle">
                    <span>{item.address}</span>
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

export default AllClients;