import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { MoreVertical } from 'react-feather';

const ActionMenu = ({ onDelete, onEdit }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle as={CustomToggle}>
                <MoreVertical size="15px" className="text-muted" />
            </Dropdown.Toggle>
            <Dropdown.Menu align={'end'}>
                <Dropdown.Item eventKey="1" onClick={onEdit}>
                    Edit
                </Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={onDelete}>
                    Delete
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    (<Link
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="text-muted text-primary-hover">
        {children}
    </Link>)
));

CustomToggle.displayName = 'CustomToggle';

export default ActionMenu;