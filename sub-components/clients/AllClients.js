import Link from 'next/link';
import { Col, Card, Table, Image } from 'react-bootstrap';
import React from 'react';
import ModalForm from './ModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useClientData from 'hooks/useClientData';
import ClientData from 'data/clients/clients';

const AllClients = () => {
  const { clientData, editClientId, addClient, editClient, deleteClient, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick } = useClientData(ClientData);

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addClient={addClient}
        clientData={clientData}
        editClient={editClient}
        editClientId={editClientId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">All Clients</h4>
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
                <th>Address</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {clientData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.clientId}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className={`icon-shape icon-md border p-4 rounded-1`}>
                            <Image src={item.clientImg} alt="" width={35} />

                            {item.image ? <Image src={URL.createObjectURL(item.image)} alt="" width={35} /> : ""}
                          </div>
                        </div>
                        <div className="ms-3 lh-1">
                          <h5 className=" mb-1">
                            <Link href="#" className="text-inherit">{item.name}</Link></h5>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">{item.organization}</td>
                    <td className="align-middle">{item.number}
                    </td>
                    <td className="align-middle">{item.email}
                    </td>
                    <td className="align-middle">{item.address}
                    </td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteClient(item.id)}
                        onEdit={() => handleEditButtonClick(item.id)}
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

export default AllClients;