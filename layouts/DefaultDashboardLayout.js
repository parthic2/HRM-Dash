import { useEffect, useState } from 'react';
import NavbarVertical from './navbars/NavbarVertical';
import NavbarTop from './navbars/NavbarTop';

const DefaultDashboardLayout = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const [, setUserRole] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("login-details"));
    // console.log(data.email);
    // Assuming you have a 'role' property in your login details
    setUserRole(data?.role);
    setBackgroundColor(getUserRoleColor(data?.role));
  }, []);

  return (
    <div id="db-wrapper" style={{ backgroundColor: backgroundColor }} className={`${showMenu ? '' : 'toggled'}`}>
      <div className="navbar-vertical navbar">
        <NavbarVertical
          showMenu={showMenu}
          onClick={(value) => setShowMenu(value)}
        />
      </div>
      <div id="page-content">
        <div className="header">
          <NavbarTop
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: ToggleMenu
            }}
          />
        </div>
        {props.children}
      </div>
    </div>
  );

  function getUserRoleColor(role) {
    console.log(role)
    // Assign specific colors based on roles
    switch (role) {
      case 'Admin':
        return '#edede9';
      case 'HR':
        return '#e5e5e5';
      case 'Employee':
        return '#e9ecef';
      default:
        // You can provide a default color for other roles if needed
        return '#f1f5f9';
    }
  }
};

export default DefaultDashboardLayout;