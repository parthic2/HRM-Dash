import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardMenu from 'routes/DashboardRoutes';

const AllOptions = () => {
  const routeTitles = DashboardMenu.map(menuItem => menuItem.title);

  // Initialize the state with the elements for each column
  const [leftColumnElements, setLeftColumnElements] = useState(routeTitles);
  const [rightColumnElements, setRightColumnElements] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null); // Store the currently dragged item

  // Function to handle drag start
  const handleDragStart = (e, title, fromColumn) => {
    setDraggedItem({ title, fromColumn });
  };

  // Function to handle drag over
  const handleDragOver = e => {
    e.preventDefault();
  };

  // Function to handle drop
  const handleDrop = (e, targetColumn) => {
    e.preventDefault();

    if (draggedItem) {
      const { title, fromColumn } = draggedItem;

      if (fromColumn === 'left') {
        setLeftColumnElements(prevLeftElements => prevLeftElements.filter(item => item !== title));
        setRightColumnElements(prevRightElements => [...prevRightElements, title]);
      } else {
        setRightColumnElements(prevRightElements => prevRightElements.filter(item => item !== title));
        setLeftColumnElements(prevLeftElements => [...prevLeftElements, title]);
      }

      setDraggedItem(null);
    }
  };

  return (
    <div>
      <Row className="my-6">
        <Col xl={4} lg={12} md={12} xs={12} className="mb-6 mb-xl-0">
          <h2>HR</h2>
          <ul>
            {leftColumnElements.map((title, index) => (
              <li
                key={index}
                draggable
                onDragStart={e => handleDragStart(e, title, 'left')}
                onDragOver={handleDragOver}
                onDrop={e => handleDrop(e, 'left')}
              >
                {title}
              </li>
            ))}
          </ul>
        </Col>
        {/* card  */}
        <Col xl={8} lg={12} md={12} xs={12}>
          <h2>Employee</h2>
          <ul>
            {rightColumnElements.map((title, index) => (
              <li
                key={index}
                draggable
                onDragStart={e => handleDragStart(e, title, 'right')}
                onDragOver={handleDragOver}
                onDrop={e => handleDrop(e, 'right')}
              >
                {title}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default AllOptions;

