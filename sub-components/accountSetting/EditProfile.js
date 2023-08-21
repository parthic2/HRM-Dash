import { useEffect, useState } from "react";
import { Col, Row, Form, Card, Button, Image } from "react-bootstrap";
import { DropFiles } from "widgets";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState("/images/avatar/avatar-5.jpg");
  const [selectedImage, setSelectedImage] = useState(null);

  const userData = JSON.parse(localStorage.getItem('userData'));

  const onImageChange = (newImage) => {
    setSelectedImage(newImage[0].preview); // Set the selected image when user selects an image
  };

  const handleImageChange = () => {
    if (selectedImage) {
      setProfileImage(selectedImage); // Update the profile image with the selected image
      setSelectedImage(null); // Clear the selected image after updating the profile image
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null); // You can set it to a default image or null based on your needs.
  };

  return (
    <Row>
      <Col xl={6} lg={6} md={12} xs={12} className="mt-4">
        <Card>
          <Card.Body>
            <Row className="align-items-center">
              <div>
                <div className="mb-6">
                  <h4 className="mb-1">Details</h4>
                </div>
                <Form>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Employee ID">
                      ID
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Employee ID"
                        readOnly
                        value={userData?.id}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Name">
                      Name
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Name"
                        readOnly
                        value={userData?.username}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Email">
                      Email
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Email"
                        readOnly
                        value={userData?.email}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Designation">
                      Designation
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Designation"
                        readOnly
                        value={userData?.des}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Mobile">
                      Mobile No.
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Mobile"
                        readOnly
                        value={userData?.number}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Address">
                      Address
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Address"
                        readOnly
                        value={userData?.address}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Birth Date">
                      Birth Date
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Birth Date"
                        readOnly
                        value={userData?.bDate}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Joining Date">
                      Joining Date
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Joining Date"
                        readOnly
                        value={userData?.jDate}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Form.Label className="col-sm-4" htmlFor="Blood Group">
                      Blood Group
                    </Form.Label>
                    <Col md={8} xs={12}>
                      <Form.Control
                        type="text"
                        id="Blood Group"
                        readOnly
                        value={userData?.blood}
                      />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={6} lg={6} md={12} xs={12} className="mt-4">
        <Card>
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">Edit Profile</h4>
            </div>
            <Row className="align-items-center mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Profile</h5>
              </Col>
              <Col md={9}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image
                      src={profileImage}
                      className="rounded-circle avatar avatar-lg"
                      alt=""
                    />
                  </div>
                  <div>
                    <Button variant="outline-white" onClick={handleRemoveImage}>
                      Remove
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">Cover photo</h5>
              </Col>
              <Col md={9}>
                <div>
                  <Form
                    action="#"
                    className="dropzone mb-3 py-10 border-dashed"
                  >
                    <DropFiles handleImageChange={onImageChange} />
                  </Form>
                  <Button variant="outline-white" onClick={handleImageChange}>
                    Change
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default EditProfile;