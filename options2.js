import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardMenu from 'routes/DashboardRoutes';

const AllOptions = () => {
  const routeTitles = DashboardMenu.map(menuItem => menuItem.title);

  // Initialize the state with the elements for each column
  const [leftColumnElements, setLeftColumnElements] = useState(routeTitles);
  const [rightColumnElements, setRightColumnElements] = useState([]);
  const [dashboardSwitch, setDashboardSwitch] = useState(false); // Dashboard switch state
  const [employeeSwitch, setEmployeeSwitch] = useState(false); // Employee switch state

  // Function to move an element from left column to right column
  const switchElementColumn = (element, fromColumn) => {
    if (fromColumn === 'left') {
      setLeftColumnElements(prevLeftElements => prevLeftElements.filter(title => title !== element));
      setRightColumnElements(prevRightElements => [...prevRightElements, element]);
    } else {
      setRightColumnElements(prevRightElements => prevRightElements.filter(title => title !== element));
      setLeftColumnElements(prevLeftElements => [...prevLeftElements, element]);
    }
  };

  return (
    <div>
      <Row className="my-6">
        <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
          <h2>HR</h2>
          {/* <label className={`toggle-switch ${dashboardSwitch ? 'on' : 'off'}`}>
            <input
              type="checkbox"
              checked={dashboardSwitch}
              onChange={() => setDashboardSwitch(!dashboardSwitch)}
            />
            <div className="slider round"></div>
          </label> */}
          <ul>
            {leftColumnElements.map((title, index) => (
              <li key={index}>
                {title}
                <label className="toggle-switch on">
                  <input
                    type="checkbox"
                    checked={leftColumnElements.includes(title)}
                    onChange={() => switchElementColumn(title, 'left')}
                  />
                  <div className="slider round"></div>
                </label>
              </li>
            ))}
          </ul>
        </Col>
        {/* card  */}
        <Col xl={8} lg={12} md={12} xs={12}>
          <h2>Employee</h2>
          {/* <label className={`toggle-switch ${employeeSwitch ? 'on' : 'off'}`}>
            <input
              type="checkbox"
              checked={employeeSwitch}
              onChange={() => setEmployeeSwitch(!employeeSwitch)}
            />
            <div className="slider round"></div>
          </label> */}
          <ul>
            {rightColumnElements.map((title, index) => (
              <li key={index}>
                {title}
                <label className="toggle-switch on">
                  <input
                    type="checkbox"
                    checked={rightColumnElements.includes(title)}
                    onChange={() => switchElementColumn(title, 'right')}
                  />
                  <div className="slider round"></div>
                </label>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default AllOptions;
