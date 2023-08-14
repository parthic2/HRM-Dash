import React from "react";
import { Card, Table, Image } from 'react-bootstrap';
import TeamsData from "data/dashboard/TeamsData";

const Teams = () => {
  return (
    <Card>
      <Card.Header className="bg-white py-4">
        <h4 className="mb-0">Teams </h4>
      </Card.Header>
      <Table responsive className="text-nowrap">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Last Activity</th>
          </tr>
        </thead>
        <tbody>
          {TeamsData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="align-middle">
                  <div className="d-flex align-items-center">
                    <div>
                      <Image src={item.image} alt="" className="avatar-md avatar rounded-circle" />
                    </div>
                    <div className="ms-3 lh-1">
                      <h5 className=" mb-1">{item.name}</h5>
                      <p className="mb-0">{item.email}</p>
                    </div>
                  </div>
                </td>
                <td className="align-middle">{item.role}</td>
                <td className="align-middle">{item.lastActivity}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Card>
  )
}

export default Teams