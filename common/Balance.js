import { leaveOptions } from 'data/options/options';
import React from 'react';
import { Form } from 'react-bootstrap';
import { FormSelect } from 'widgets';

const Balance = () => {
    return (
        <div className="d-flex mb-5">
            <div>
                <span>Total Leave</span>
                <div>13</div>
            </div>
            <div style={{ marginLeft: "20px" }}>
                <span>Approved Leave</span>
                <div>1</div>
            </div>
            <div style={{ marginLeft: "20px" }}>
                <span>Rejected Leave</span>
                <div>0</div>
            </div>
            <div style={{ marginLeft: "20px" }}>
                Leave Type
                <Form.Control
                    className="form-control"
                    as={FormSelect}
                    placeholder="Select Leave Type"
                    id="leaveType"
                    name="leaveType"
                    options={leaveOptions}
                />
            </div>
        </div>
    )
}

export default Balance;