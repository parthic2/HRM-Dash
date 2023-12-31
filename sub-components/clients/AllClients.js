import Link from 'next/link';
import { Col, Card, Table, Image, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import ModalForm from './ModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useClientData from 'hooks/useClientData';

const AllClients = () => {
  const { clientData, editClientId, addClient, editClient, deleteClient, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick, maxId } = useClientData();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addClient={addClient}
        clientData={clientData}
        editClient={editClient}
        editClientId={editClientId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        maxId={maxId}
      />
      <Card>
        <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
          <h4 className="mb-0">All Clients</h4>
          <div>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </Card.Header>
        {clientData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Client ID</th>
                <th>Client Name</th>
                <th>Organization</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Website</th>
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clientData
                .filter((item) =>
                  Object.values(item).some(
                    (value) =>
                      value &&
                      typeof value === 'string' &&
                      value.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                )
                .map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="align-middle">{item.id}</td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <div>
                            <div className={`icon-shape icon-md border p-4 rounded-1`}>
                              {/* <Image src={item.clientImg} alt="" width={35} />

                            {item.image ? <Image src={URL.createObjectURL(item.image)} alt="" width={35} /> : ""} */}
                            </div>
                          </div>
                          <div className="ms-3 lh-1">
                            <h5 className=" mb-1">
                              <Link href="#" className="text-inherit">{item.name}</Link></h5>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{item.organization}</td>
                      <td className="align-middle">{item.number}</td>
                      <td className="align-middle">{item.email}</td>
                      <td className="align-middle">{item.website}</td>
                      <td className="align-middle">{item.address}</td>
                      <td className="align-middle">
                        <ActionMenu
                          onDelete={() => deleteClient(item.id)}
                          onEdit={() => handleEditButtonClick(item.id)}
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        )}
      </Card>
    </Col>
  )
}

export default AllClients;