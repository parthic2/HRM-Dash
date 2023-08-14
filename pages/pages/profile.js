import { Col, Row, Container } from 'react-bootstrap';
import {
  AboutMe,
  ActivityFeed,
  MyTeam,
  ProfileHeader,
  ProjectsContributions,
  RecentFromBlog
} from 'sub-components';

const Profile = () => {
  return (
    <Container fluid className="p-6">
      {/* Profile Header  */}
      <ProfileHeader />

      {/* content */}
      <div className="py-6">
        <Row>

          {/* About Me */}
          <AboutMe />

          {/* Projects Contributions */}
          <ProjectsContributions />

          {/* Recent From Blog */}
          <RecentFromBlog />

          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">

            {/* My Team */}
            <MyTeam />

            {/* Activity Feed */}
            <ActivityFeed />

          </Col>
        </Row>
      </div>

    </Container>
  )
}

export default Profile