import { Switch } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardMenu from 'routes/DashboardRoutes';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const AllOptions = () => {
  // const [hrEnabledRoutes, setHrEnabledRoutes] = useState([]);
  // const [userEnabledRoutes, setUserEnabledRoutes] = useState([]);

  // const handleToggleChange = (menuItemTitle, role) => {
  //   if (role === 'hr') {
  //     setHrEnabledRoutes(prevRoutes =>
  //       prevRoutes.includes(menuItemTitle)
  //         ? prevRoutes.filter(item => item !== menuItemTitle)
  //         : [...prevRoutes, menuItemTitle]
  //     );
  //   } else if (role === 'user') {
  //     setUserEnabledRoutes(prevRoutes =>
  //       prevRoutes.includes(menuItemTitle)
  //         ? prevRoutes.filter(item => item !== menuItemTitle)
  //         : [...prevRoutes, menuItemTitle]
  //     );
  //   }
  // };

  const handleToggleChange = (menuItemTitle, role) => {
    console.log({ menuItemTitle, role });

    const storedOptions = JSON.parse(localStorage.getItem(`${role}EnabledRoutes`)) || [];

    if (storedOptions.includes(menuItemTitle)) {
      const updatedOptions = storedOptions.filter(item => item !== menuItemTitle);
      localStorage.setItem(`${role}EnabledRoutes`, JSON.stringify(updatedOptions));
    } else {
      const updatedOptions = [...storedOptions, menuItemTitle];
      localStorage.setItem(`${role}EnabledRoutes`, JSON.stringify(updatedOptions));
    }

    // Force a re-render
    // window.location.reload();
  };

  return (
    <div>
      <Row className="my-6">
        <Col xl={6} lg={6} md={12} xs={12} className="mb-6 mb-xl-0">
          <h3>HR Options</h3>
          <ul>
            {DashboardMenu.map(menuItem => (
              <li key={menuItem.id}>
                <label className="iphone-switch">
                  <Switch
                    {...label}
                    checked={localStorage.getItem('hrEnabledRoutes')?.includes(menuItem.title)}
                    onChange={() => handleToggleChange(menuItem.title, 'hr')}
                  />
                  <span className="title">{menuItem.title}</span>
                </label>
              </li>
            ))}
          </ul>
        </Col>
        <Col xl={6} lg={6} md={12} xs={12}>
          <h3>User Options</h3>
          <ul>
            {DashboardMenu.map(menuItem => (
              <li key={menuItem.id}>
                <label className="iphone-switch">
                  <Switch
                    {...label}
                    checked={localStorage.getItem('userEnabledRoutes')?.includes(menuItem.title)}
                    onChange={() => handleToggleChange(menuItem.title, 'user')}
                  />
                  <span className="title">{menuItem.title}</span>
                </label>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default AllOptions;
