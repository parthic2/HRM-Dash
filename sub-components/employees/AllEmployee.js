import Link from 'next/link';
import { Col, Card, Table, Modal, Form, Button, Row, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import ActionMenu from 'common/ActionMenu';
import { DropFiles, FormSelect } from 'widgets';
// import { genderOptions } from 'data/options/options';
import axios from 'axios';

const AllEmployee = () => {
  const [employeeData, setEmployeeData] = useState(JSON.parse(localStorage.getItem('employees')) || []);
  const [editEmployeeEmail, setEditEmployeeEmail] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [maxId, setMaxId] = useState(0);
  const authToken = JSON.parse(localStorage.getItem('login-details'));

  useEffect(() => {
    // Calculate the maximum ID from the existing data
    const maxExistingId = employeeData.reduce((maxId, employee) => Math.max(maxId, employee.id), 0);
    setMaxId(maxExistingId);
  }, [employeeData]);

  const handleEditButtonClick = (email) => {
    setEditEmployeeEmail(email);
    setIsEditModalOpen(true);
  };

  const addEmployee = async (newEmployee) => {
    try {
      // Extract the "gov_doc" field from newEmployee
      // const { gov_doc, ...employeeDataWithoutDoc } = newEmployee;

      // Make a POST request to the API endpoint with the authorization token in the headers
      const response = await axios.post(
        "https://hrm.stackholic.io/api/employee/store",
        {
          ...newEmployee
          // ...employeeDataWithoutDoc,
          // gov_doc: gov_doc ? gov_doc.preview : null, // Include the "path" in the request payload
        },
        {
          headers: {
            Authorization: `Bearer ${authToken.token}`,
          },
        }
      );

      console.log(response.data);

      const newId = maxId + 1;
      const addedEmployee = response.data;
      const updatedData = [...employeeData, addedEmployee];
      setEmployeeData(updatedData);
      setMaxId(newId);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error Adding Employee:", error);
    }
  };

  const editEmployee = (editedEmployee) => {
    const updatedData = employeeData.map((employee) =>
      employee.email === editedEmployee.email ? editedEmployee : employee
    );
    setEmployeeData(updatedData);
    setEditEmployeeEmail(null);
    localStorage.setItem('employees', JSON.stringify(updatedData));
  };

  const deleteEmployee = (email) => {
    const updatedData = employeeData.filter((employee) => employee.email !== email);
    setEmployeeData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));
  };

  const [searchQuery, setSearchQuery] = useState("");

  const initialFormValue = {
    user_name: "",
    password: "",
    email: "",
    phone_no: "",
    alternative_phone: "",
    address: "",
    designation: "",
    joining_date: "",
    birth_date: "",
    gender: "",
    blood_group: "",
    role: "",
    status: "",
    showPassword: false,
    gov_doc: null // To store the selected image
  };

  const [formData, setFormData] = useState(initialFormValue);
  const [errors, setErrors] = useState(initialFormValue);

  // Validation function for each field
  const validateName = (value) => {
    if (value.trim() === "") {
      return "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(value)) {
      return "Name should contain only characters";
    } else {
      return "";
    }
  };

  const validatePassword = (value) => {
    if (value.trim() === "") {
      return "Password is required"
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)) {
      return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    } else {
      return "";
    }
  }

  const validateEmail = (value) => {
    if (value.trim() === "") {
      return "Email Address is required";
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/.test(value)) {
      return "Invalid email address";
    } else {
      return "";
    }
  };

  const validateNumber = (value) => {
    if (value.trim() === "") {
      return "Mobile number is required";
    } else if (!/^\d{10}$/.test(value)) {
      return "Mobile Number must be a 10-digit number";
    } else {
      return "";
    }
  };

  const validateAltNumber = (value) => {
    if (value.trim() === "") {
      return "Alternative Number is required";
    } else if (!/^\d{10}$/.test(value)) {
      return "Alternative Contact Number must be a 10-digit number";
    } else {
      return "";
    }
  };

  const validateAddress = (value) => {
    if (value.trim() === "") {
      return "Address is required";
    } else {
      return "";
    }
  };

  const validateDes = (value) => {
    if (value.trim() === "") {
      return "Designation is required";
    } else {
      return "";
    }
  };

  const validateJoinDate = (value) => {
    if (value.trim() === "") {
      return "Joining date is required";
    } else {
      return "";
    }
  };

  const validateBirDate = (value) => {
    if (value.trim() === "") {
      return "Birth date is required";
    } else {
      return "";
    }
  };

  const validateBGroup = (value) => {
    if (value.trim() === "") {
      return "Blood Group is required";
    } else {
      return "";
    }
  };

  const validateGender = (value) => {
    if (value === "" || value === "select gender") {
      return "Gender is required";
    } else {
      return "";
    }
  };

  const validateRole = (value) => {
    if (value.trim() === "") {
      return "Role is required";
    } else {
      return "";
    }
  };

  const validateStatus = (value) => {
    if (value.trim() === "") {
      return "Status is required";
    } else {
      return "";
    }
  };

  const validateForm = () => {
    // Validate all form fields and set the error messages
    const newErrors = {
      user_name: validateName(formData.user_name),
      password: validatePassword(formData.password),
      email: validateEmail(formData.email),
      phone_no: validateNumber(formData.phone_no),
      alternative_phone: validateAltNumber(formData.alternative_phone),
      address: validateAddress(formData.address),
      designation: validateDes(formData.designation),
      joining_date: validateJoinDate(formData.joining_date),
      birth_date: validateBirDate(formData.birth_date),
      gender: validateGender(formData.gender),
      blood_group: validateBGroup(formData.blood_group),
      role: validateRole(formData.role),
      status: validateStatus(formData.status),
    };

    setErrors(newErrors);

    // Check if the form is valid by checking if there are no error messages
    return !Object.values(newErrors).some((error) => error !== "");
  };

  // Handle onBlur event for each input field
  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate the current field and set the error message
    if (name === "user_name") {
      setErrors({ ...errors, [name]: validateName(value) });
    } else if (name === "password") {
      setErrors({ ...errors, [name]: validatePassword(value) });
    } else if (name === "email") {
      setErrors({ ...errors, [name]: validateEmail(value) });
    } else if (name === "phone_no") {
      setErrors({ ...errors, [name]: validateNumber(value) });
    } else if (name === "alternative_phone") {
      setErrors({ ...errors, [name]: validateAltNumber(value) });
    } else if (name === "address") {
      setErrors({ ...errors, [name]: validateAddress(value) });
    } else if (name === "designation") {
      setErrors({ ...errors, [name]: validateDes(value) });
    } else if (name === "joining_date") {
      setErrors({ ...errors, [name]: validateJoinDate(value) });
    } else if (name === "birth_date") {
      setErrors({ ...errors, [name]: validateBirDate(value) });
    } else if (name === "gender") {
      setErrors({ ...errors, [name]: validateGender(value) });
    } else if (name === "blood_group") {
      setErrors({ ...errors, [name]: validateBGroup(value) });
    } else if (name === "role") {
      setErrors({ ...errors, [name]: validateRole(value) });
    } else if (name === "status") {
      setErrors({ ...errors, [name]: validateStatus(value) });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (files) => {
    setFormData({
      ...formData,
      gov_doc: files[0] // Store the selected image
    });
  };

  useEffect(() => {
    const selectedEmployee = employeeData.find((employee) => employee.email === editEmployeeEmail);
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    } else {
      setFormData({
        ...initialFormValue
      });
    }
  }, [editEmployeeEmail]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // If the form is not valid, don't submit
    }

    if (editEmployeeEmail) {
      editEmployee({ ...formData, email: editEmployeeEmail });
    } else {
      addEmployee(formData);
    }
    setFormData({
      user_name: "",
      password: "",
      email: "",
      phone_no: "",
      alternative_phone: "",
      address: "",
      designation: "",
      joining_date: "",
      birth_date: "",
      gender: "",
      blood_group: "",
      role: "",
      status: "",
      gov_doc: null, // Clear the image after submission
    });
    setIsEditModalOpen(false);
  };

  const isInEditMode = !!editEmployeeEmail; // Check if editEmployeeEmail exists

  return (
    <Col md={12} xs={12}>
      <Col md={12} xs={12}>
        <div className="btn btn-white mb-5" onClick={() => setIsEditModalOpen(true)}>Add Employees</div>
        <Modal
          style={{ paddingLeft: "0px" }}
          size="lg"
          show={isEditModalOpen}
          onHide={() => setIsEditModalOpen(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {editEmployeeEmail ? 'Edit Employee' : 'Add Employee'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col md={12} xs={12}>
              <Form onSubmit={handleFormSubmit} autoComplete="off">
                <Row className="mb-3">
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Employee ID</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Employee ID"
                      id="id"
                      name="id"
                      value={isInEditMode ? formData.id : maxId + 1} // Use maxId + 1 for new employees
                      readOnly
                    />
                  </div>
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Name</Form.Label>
                    <Form.Control
                      type="text"
                      className={`form-control ${errors.user_name ? 'is-invalid' : ''}`}
                      placeholder="Name"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                    />
                    {errors.user_name && <div className="invalid-feedback">{errors.user_name}</div>}
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Password</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type={formData.showPassword ? 'text' : 'password'}
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            showPassword: !formData.showPassword
                          })
                        }
                      >
                        {formData.showPassword ? <i className="fe fe-eye-off" /> : <i className="fe fe-eye" />}
                      </button>
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Email</Form.Label>
                    <Form.Control
                      type="text"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Designation</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        className={`form-control ${errors.designation ? 'is-invalid' : ''}`}
                        placeholder="Designation"
                        id="designation"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.designation && <div className="invalid-feedback">{errors.designation}</div>}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Mobile No.</Form.Label>
                    <Form.Control
                      type="text"
                      className={`form-control ${errors.phone_no ? 'is-invalid' : ''}`}
                      placeholder="Mobile Number"
                      id="phone_no"
                      name="phone_no"
                      maxLength="10"
                      value={formData.phone_no}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                    />
                    {errors.phone_no && <div className="invalid-feedback">{errors.phone_no}</div>}
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Alternative Number</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        className={`form-control ${errors.alternative_phone ? 'is-invalid' : ''}`}
                        placeholder="Alternative Number"
                        id="alternative_phone"
                        name="alternative_phone"
                        maxLength="10"
                        value={formData.alternative_phone}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.alternative_phone && <div className="invalid-feedback">{errors.alternative_phone}</div>}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Address</Form.Label>
                    <Form.Control
                      type="text"
                      className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                      placeholder="Address"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Birth Date</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="date"
                        className={`form-control ${errors.birth_date ? 'is-invalid' : ''}`}
                        placeholder="Birth Date"
                        id="birth_date"
                        name="birth_date"
                        value={formData.birth_date}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.birth_date && <div className="invalid-feedback">{errors.birth_date}</div>}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Joining Date</Form.Label>
                    <Form.Control
                      type="date"
                      className={`form-control ${errors.joining_date ? 'is-invalid' : ''}`}
                      placeholder="Joining Date"
                      id="joining_date"
                      name="joining_date"
                      value={formData.joining_date}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                    />
                    {errors.joining_date && <div className="invalid-feedback">{errors.joining_date}</div>}
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Blood Group</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        className={`form-control ${errors.blood_group ? 'is-invalid' : ''}`}
                        placeholder="Blood Group"
                        id="blood_group"
                        name="blood_group"
                        value={formData.blood_group}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.blood_group && <div className="invalid-feedback">{errors.blood_group}</div>}
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Gender</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                        placeholder="Select Gender"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                    </div>
                  </div>

                  {/* {!editEmployeeEmail ?
            <div className="col-sm-6">
              <Form.Label className="col-sm-6">Gender</Form.Label>
              <Form.Control
                as={FormSelect}
                className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
                placeholder="Select Gender"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                options={genderOptions}
              />
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div> : ""
            } */}
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Role</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        className={`form-control ${errors.role ? 'is-invalid' : ''}`}
                        placeholder="Role"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <Form.Label className="col-sm-6">Status</Form.Label>
                    <div className="input-group">
                      <Form.Control
                        type="text"
                        className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                        placeholder="Status"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                      />
                      {errors.status && <div className="invalid-feedback">{errors.status}</div>}
                    </div>
                  </div>
                </Row>
                <Row className="mb-3">
                  <div className="col-sm-12">
                    <Form.Label className="col-sm-6">Government Document</Form.Label>
                    <div className="col-md-12 col-12">
                      <div
                        id="gov_doc"
                        name="gov_doc"
                        className="dropzone mb-3 py-10 border-dashed"
                      >
                        <DropFiles handleImageChange={handleImageChange} />
                      </div>
                    </div>
                  </div>
                </Row>

                {isInEditMode ? (
                  <Button variant="primary" type="submit">
                    Update
                  </Button>
                ) : (
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                )}

                <Button variant="light" style={{ marginLeft: "10px" }} onClick={() => setIsEditModalOpen(false)}>
                  Cancel
                </Button>
              </Form>
            </Col>
          </Modal.Body>
        </Modal>
      </Col>
      <Card>
        <Card.Header className="bg-white py-4 d-flex justify-content-between align-items-center">
          <h4 className="mb-0">All Employees</h4>
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
        {employeeData.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>No Data Found!</p>
        ) : (
          <Table responsive className="text-nowrap mb-0">
            <thead className="table-light">
              <tr>
                <th>Employee ID</th>
                <th>Employee name</th>
                <th>Password</th>
                <th>Designation</th>
                <th>Mobile Number</th>
                <th>Alternative Number</th>
                <th>Email</th>
                <th>Birth Date</th>
                <th>Address</th>
                <th>Joining Date</th>
                <th>Blood Group</th>
                <th>Role</th>
                <th>Document</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employeeData
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
                        <Link href="#" className="text-inherit">{item.user_name}</Link>
                      </td>
                      <td className="align-middle">{item.password}</td>
                      <td className="align-middle">{item.designation}</td>
                      <td className="align-middle">{item.phone_no}</td>
                      <td className="align-middle">{item.alternative_phone}</td>
                      <td className="align-middle">{item.email}</td>
                      <td className="align-middle">{item.birth_date}</td>
                      <td className="align-middle">{item.address}</td>
                      <td className="align-middle">{item.joining_date}</td>
                      <td className="align-middle">{item.blood_group}</td>
                      <td className="align-middle">{item.role}</td>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <div className={`icon-shape icon-md border p-4 rounded-1`}>
                            {item.gov_doc && <Image src={URL.createObjectURL(item.gov_doc.preview)} alt="Gov Doc" width={35} />}
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <ActionMenu
                          onDelete={() => deleteEmployee(item.email)}
                          onEdit={() => handleEditButtonClick(item.email)}
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

export default AllEmployee;