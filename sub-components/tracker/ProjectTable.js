import React from 'react';
import { Card, Table } from 'react-bootstrap';

const ProjectTable = ({ savedProjects }) => {
  return (
    <Card>
      <Table responsive className="text-nowrap mb-0">
        <thead className="table-light">
          <tr>
            <th>Date</th>
            <th>Project Name</th>
            <th>Start Time</th>
            <th>Pause Time</th>
            <th>Stop Time</th>
            <th>Hours</th>
            <th>Minutes</th>
            <th>Seconds</th>
          </tr>
        </thead>
        <tbody>
          {savedProjects.map((project, index) => (
            <tr key={index}>
              <td>{project.date}</td>
              <td className="align-middle">{project.projectName}</td>
              <td className="align-middle">{project.startTime}</td>
              <td className="align-middle">{project.pauseTime || "-"}</td>
              <td className="align-middle">{project.stopTime}</td>
              <td className="align-middle">{project.hours} hours</td>
              <td className="align-middle">{project.minutes} minutes</td>
              <td className="align-middle">{project.seconds} seconds</td>
            </tr>
          ))
          }
        </tbody>
      </Table>
    </Card>
  );
};

export default ProjectTable;