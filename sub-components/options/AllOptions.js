import React, { useState } from "react";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import DashboardMenu from "routes/DashboardRoutes";

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const AllOptions = () => {
  const routeTitles = DashboardMenu.map(menuItem => menuItem.title);

  const [checked, setChecked] = useState([]);
  const [left, setLeft] = useState(routeTitles.map((_, index) => index)); // Initialize left list with indices
  const [right, setRight] = useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) =>
    intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card>
      <Card.Header>
        <input
          type="checkbox"
          onClick={handleToggleAll(items)}
          checked={numberOfChecked(items) === items.length && items.length !== 0}
          // indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
          disabled={items.length === 0}
          readOnly
        />
        {title}
      </Card.Header>
      <ListGroup>
        {items.map((value) => {
          return (
            <ListGroupItem
              key={value}
              onClick={handleToggle(value)}
            >
              <input
                type="checkbox"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                readOnly
              />
              {routeTitles[value]}
            </ListGroupItem>
          );
        })}
        <ListGroupItem />
      </ListGroup>
    </Card>
  );

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-5">
            {customList('HR', left)}
          </div>
          <Col sm={1} className="">
            <button
              variant="contained"
              size="medium"
              color="success"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
            >
              &gt;
            </button>
            <button
              variant="contained"
              color="success"
              size="medium"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
            >
              &lt;
            </button>
          </Col>
          <div className="col-sm-5">
            {customList('Employee', right)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllOptions;
