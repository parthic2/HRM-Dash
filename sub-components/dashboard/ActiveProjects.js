import Link from 'next/link';
import { Col, Row, Card, Table } from 'react-bootstrap';
import ProjectsData from 'data/projects/projects';

const statusColorMap = {
  Pending: "warning",
  Active: 'success',
  Closed: 'danger',
};

const ActiveProjects = () => {
  return (
    <Row className="mt-6">
      <Col md={12} xs={12}>
        <Card>
          <Card.Header className="bg-white  py-4">
            <h4 className="mb-0">Active Projects</h4>
          </Card.Header>
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Project name</th>
                <th>Client name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {ProjectsData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-1">
                          <Link href="#" className="text-inherit">{item.projectName}</Link></h5>
                      </div>
                    </td>
                    <td className="align-middle">{item.clientName}</td>
                    <td className="align-middle">{item.startDate}</td>
                    <td className="align-middle">{item.endDate}</td>
                    <td className="align-middle">
                      <span className={`badge bg-${statusColorMap[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <Card.Footer className="bg-white text-center">
            <Link href="/pages/projects" className="link-primary">View All Projects</Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  )
}

export default ActiveProjects;