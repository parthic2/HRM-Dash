import { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import {
  ListGroup,
  Accordion,
  Card,
  Badge,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
// import simple bar scrolling used for notification item scrolling
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { DashboardMenu } from "routes/DashboardRoutes";

const NavbarVertical = (props) => {
  const location = useRouter();

  const [filteredMenu, setFilteredMenu] = useState([]); // Initialize filteredMenu state

  useEffect(() => {
    // This code will run on the client side
    const user = JSON.parse(localStorage.getItem('user'));
    const userRole = user ? user.role : "user";

    // Filter menu items based on user role
    const filtered = DashboardMenu.filter((menuItem) => {
      if (menuItem.roles && menuItem.roles.includes(userRole)) {
        return true;
      }
      return false;
    });

    setFilteredMenu(filtered); // Update the filteredMenu state
  }, []); // Empty dependency array ensures this runs after component mounts

  const CustomToggle = ({ children, eventKey, icon }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <li className="nav-item">
        <Link
          href=""
          className="nav-link "
          onClick={decoratedOnClick}
          data-bs-toggle="collapse"
          data-bs-target="#navDashboard"
          aria-expanded={isCurrentEventKey ? true : false}
          aria-controls="navDashboard"
        >
          {icon ? <i className={`nav-icon fe fe-${icon} me-2`}></i> : ""}{" "}
          {children}
        </Link>
      </li>
    );
  };

  const generateLink = (item) => {
    return (
      <Link
        href={item.link}
        className={`nav-link ${location.pathname === item.link ? "active" : ""
          }`}
        onClick={(e) =>
          isMobile ? props.onClick(!props.showMenu) : props.showMenu
        }
      >
        {item.name}
        {""}
        {item.badge ? (
          <Badge
            className="ms-1"
            bg={item.badgecolor ? item.badgecolor : "primary"}
          >
            {item.badge}
          </Badge>
        ) : (
          ""
        )}
      </Link>
    );
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Fragment>
      <SimpleBar style={{ maxHeight: "100vh" }}>
        <div className="nav-scroller">
          <Link href="/" className="navbar-brand">
            {/* <Image src="/images/brand/logo/logo.svg" alt="" /> */}
            <h1 style={{ color: "white" }}>HRM</h1>
          </Link>
        </div>
        {/* Dashboard Menu */}
        <Accordion
          defaultActiveKey="0"
          as="ul"
          className="navbar-nav flex-column"
        >
          {filteredMenu.map(function (menu, index) {
            if (menu.children) {
              return (
                <Fragment key={index}>
                  {/* main menu / root menu level / root items */}
                  <CustomToggle eventKey={index} icon={menu.icon}>
                    {menu.title}
                    {menu.badge ? (
                      <Badge
                        className="ms-1"
                        bg={menu.badgecolor ? menu.badgecolor : "primary"}
                      >
                        {menu.badge}
                      </Badge>
                    ) : (
                      ""
                    )}
                  </CustomToggle>
                  <Accordion.Collapse
                    eventKey={index}
                    as="li"
                    bsPrefix="nav-item"
                  >
                    <ListGroup
                      as="ul"
                      bsPrefix=""
                      className="nav flex-column"
                    >
                      {menu.children.map(function (
                        menuLevel1Item,
                        menuLevel1Index
                      ) {
                        if (!menuLevel1Item.children) {
                          return (
                            <ListGroup.Item
                              as="li"
                              bsPrefix="nav-item"
                              key={menuLevel1Index}
                            >
                              {/* first level menu items */}
                              {generateLink(menuLevel1Item)}
                              {/* end of first level menu items */}
                            </ListGroup.Item>
                          );
                        }
                      })}
                    </ListGroup>
                  </Accordion.Collapse>
                  {/* end of main menu / menu level 1 / root items */}
                </Fragment>
              );
            } else {
              return (
                <Card bsPrefix="nav-item" key={index}>
                  {/* menu item without any children items like Documentation and Changelog items*/}
                  <Link
                    href={menu.link}
                    className={`nav-link ${location.pathname === menu.link ? "active" : ""
                      }`}
                  >
                    {typeof menu.icon === "string" ? (
                      <i className={`nav-icon fe fe-${menu.icon} me-2`}></i>
                    ) : (
                      menu.icon
                    )}
                    {menu.title}
                    {menu.badge ? (
                      <Badge
                        className="ms-1"
                        bg={menu.badgecolor ? menu.badgecolor : "primary"}
                      >
                        {menu.badge}
                      </Badge>
                    ) : (
                      ""
                    )}
                  </Link>
                  {/* end of menu item without any childern items */}
                </Card>
              );
            }
          })}
        </Accordion>
        {/* end of Dashboard Menu */}
      </SimpleBar>
    </Fragment>
  );
};

export default NavbarVertical;
