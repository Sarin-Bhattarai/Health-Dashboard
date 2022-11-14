import React from "react";
import "./form.css";
import moment from "moment";
import { AiOutlineUpload } from "react-icons/ai";
import { Col, Form, Row, Input, DatePicker, Upload, Button, Radio } from "antd";
const { TextArea } = Input;

const AppointmentForm = () => {
  return (
    <Row>
      <Col span={24}>
        <div className="form-card">
          <h6>Basic Inforamtion</h6>

          <Form layout="vertical" className="doc-form">
            <Row className="input-row">
              <Form.Item label="Full Name" name="full name">
                <Input className="add-input" />
              </Form.Item>
              <Form.Item label="Phone Number" name="phone number">
                <Input className="add-input" />
              </Form.Item>
            </Row>
            <Row className="input-row">
              <Form.Item label="Email Address" name="email">
                <Input className="add-input" />
              </Form.Item>
              <Form.Item label="Gender" name="gender">
                <Radio>Male</Radio>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Radio>Female</Radio>
              </Form.Item>
            </Row>
            <Row className="input-row">
              <Form.Item label="Appointment Date" name="appoint date">
                <DatePicker className="add-input" />
              </Form.Item>
              <Form.Item label="Appointment Time" name="appoint time">
                <DatePicker
                  format={(value) =>
                    moment(value).format("MMMM Do YYYY, h:mm:ss a")
                  }
                  className="add-input"
                />
              </Form.Item>
            </Row>
            <Row className="input-row">
              <Form.Item label="Select Reason" name="select reason">
                <select
                  style={{
                    width: "36rem",
                    height: "40px",
                    marginBottom: "15px",
                    border: "1px solid #d3d3d3",
                    padding: "8px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  <option>Select Reason</option>
                  <option>Surgery</option>
                  <option>Dentist Checkup</option>
                  <option>Body Checkup</option>
                  <option>Other Service</option>
                </select>
              </Form.Item>
              <Form.Item label="Select Doctor" name="select doctor">
                <select
                  style={{
                    width: "36rem",
                    height: "40px",
                    marginBottom: "15px",
                    border: "1px solid #d3d3d3",
                    padding: "8px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  <option>Select Doctor</option>
                  <option>Dr.Alex</option>
                  <option>Dr.Peter</option>
                  <option>Dr.Mahi</option>
                  <option>Dr.Cyan</option>
                </select>
              </Form.Item>
            </Row>
            <Row className="input-row">
              <Form.Item label="Add Note" name="note">
                <TextArea className="add-text" rows={4} />
              </Form.Item>
            </Row>
            <Button className="form-btn">Submit</Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default AppointmentForm;
