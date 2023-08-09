import Link from 'next/link';
import { Col, Card, Table, Image } from 'react-bootstrap';
import React from 'react';
import TodayAttendances from 'data/attendance/todayAttendance';
import ActionMenu from 'common/ActionMenu';
import ModalForm from './ModalForm/ModalForm';
import useAttendanceData from 'hooks/useAttendanceData';

const statusColorMap = {
  Present: 'success',
  Leave: 'danger',
};

const TodayAttendance = () => {
  const { attendanceData, editAttId, addAttendance, editAttendance, deleteAttendance, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick } = useAttendanceData(TodayAttendances);

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addAttendance={addAttendance}
        attendanceData={attendanceData}
        editAttendance={editAttendance}
        editAttId={editAttId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white  py-4">
          <h4 className="mb-0">Today Attendance</h4>
        </Card.Header>
        <Table responsive className="text-nowrap mb-0">
          <thead className="table-light">
            <tr>
              <th>Employee name</th>
              <th>Employee Id</th>
              <th>Department</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="align-middle">
                    <div className="d-flex align-items-center">
                      <div>
                        <div className={`icon-shape icon-md border p-4 rounded-1`}>
                          {item.image ? <Image src={URL.createObjectURL(item.image)} alt="" width={35} /> : ""}
                        </div>
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className=" mb-1">
                          <Link href="/pages/employeeAttendances" className="text-inherit">{item.name}</Link></h5>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle">{item.employeeId}</td>
                  <td className="align-middle">{item.department}</td>
                  <td className="align-middle">{item.checkIn}</td>
                  <td className="align-middle">{item.checkOut}</td>
                  <td className="align-middle">
                    <span className={`badge bg-${statusColorMap[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="align-middle">
                    <ActionMenu
                      onDelete={() => deleteAttendance(item.id)}
                      onEdit={() => handleEditButtonClick(item.id)}
                    />
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

export default TodayAttendance;