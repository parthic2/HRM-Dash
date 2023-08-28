import Link from 'next/link';
import { Col, Card, Table, ProgressBar } from 'react-bootstrap';
import ModalForm from './ModalForm/ModalForm';
import ActionMenu from 'common/ActionMenu';
import useProjectData from 'hooks/useProjectData';

const statusColorMap = {
  Pending: "warning",
  Active: 'success',
  Closed: 'danger',
};

const AllProjects = () => {
  const { projectData, editProjectId, addProject, editProject, deleteProject, isEditModalOpen, setIsEditModalOpen, handleEditButtonClick } = useProjectData();

  return (
    <Col md={12} xs={12}>
      <ModalForm
        addProject={addProject}
        projectData={projectData}
        editProject={editProject}
        editProjectId={editProjectId}
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
      <Card>
        <Card.Header className="bg-white py-4">
          <h4 className="mb-0">Active Projects</h4>
        </Card.Header>
        {projectData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Project ID</th>
                <th>Project name</th>
                <th>Client name</th>
                <th>Client Email</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Members</th>
                <th>Status</th>
                <th>Progress</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.id}</td>
                    <td className="align-middle">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-1">
                          <Link href="#" className="text-inherit">{item.projectName}</Link></h5>
                      </div>
                    </td>
                    <td className="align-middle">{item.clientName}</td>
                    <td className="align-middle">{item.clientEmail}</td>
                    <td className="align-middle">{item.startDate}</td>
                    <td className="align-middle">{item.endDate}</td>
                    <td className="align-middle">{item.members}</td>
                    {/* <td className="align-middle">
                      <div className="avatar-group">
                        {item.image ? <Image src={URL.createObjectURL(item.image)} alt="" width={35} className="rounded-circle" /> : ""}
                        {item.members.map((avatar, avatarIndex) => {
                        return (
                          <span className="avatar avatar-sm" index={avatarIndex}>
                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                          </span>
                        )
                      })}
                      </div>
                    </td> */}
                    <td className="align-middle">
                      <span className={`badge bg-${statusColorMap[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="align-middle text-dark">
                      <div className="me-3">{item.progress}%</div>
                      <div className="mt-2">
                        <ProgressBar now={item.progress} style={{ height: '5px' }} />
                      </div>
                    </td>
                    <td className="align-middle">
                      <ActionMenu
                        onDelete={() => deleteProject(item.id)}
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

export default AllProjects;