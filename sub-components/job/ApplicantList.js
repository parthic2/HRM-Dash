import Link from 'next/link';
import { Col, Card, Table } from 'react-bootstrap';
import React from 'react';
import ActionMenu from 'common/ActionMenu';
import ModalForm from './AppliModalForm/ModalForm';
import useApplicantData from 'hooks/useApplicantData';

const AllApplicantList = () => {
  const { applicantData, editAppliId, addApplicant, editApplicant, deleteApplicant, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick } = useApplicantData();

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addApplicant={addApplicant}
        applicantData={applicantData}
        editApplicant={editApplicant}
        editAppliId={editAppliId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">Applicant List</h4>
        </Card.Header>
        {applicantData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Applicant ID</th>
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
              {applicantData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.id}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-1">
                          <Link href="#" className="text-inherit">{item.name}</Link></h5>
                      </div>
                    </td>
                    <td className="align-middle">{item.title}</td>
                    <td className="align-middle">{item.department}</td>
                    <td className="align-middle">{item.interviewDate}</td>
                    <td className="align-middle">{item.interviewTime}</td>
                    <td className="align-middle">{item.reportingTo}</td>
                    <td className="align-middle">{item.qualification}</td>
                    <td className="align-middle"></td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteApplicant(item.id)}
                        onEdit={() => handleEditButtonClick(item.id)}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table >
        )}
      </Card >
    </Col >
  )
}

export default AllApplicantList;