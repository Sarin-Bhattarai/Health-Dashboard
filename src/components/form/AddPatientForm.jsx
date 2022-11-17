import "./form.css";
import React from "react";
import moment from "moment";
import { AiOutlineUpload } from "react-icons/ai";
import { Col, Form, Row, Input, DatePicker, Upload, Button, Radio } from "antd";
const { TextArea } = Input;

const AddPatientForm = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <div className="form-card">
            <h6>Patients Basic Inforamtion</h6>
            <Form layout="vertical" className="doc-form">
              <Row className="input-row">
                <Form.Item label="First Name" name="first name">
                  <Input className="add-input" />
                </Form.Item>
                <Form.Item label="Last Name" name="last name">
                  <Input className="add-input" />
                </Form.Item>
              </Row>
              <Row className="input-row">
                <Form.Item label="Phone Number" name="phone number">
                  <Input className="add-input" />
                </Form.Item>
                <Form.Item label="Email Address" name="email">
                  <Input className="add-input" />
                </Form.Item>
              </Row>
              <Row className="input-row">
                <Form.Item label="Admit Date" name="join date">
                  <DatePicker className="add-input" />
                </Form.Item>
                <Form.Item label="Join Time" name="join time">
                  <DatePicker
                    format={(value) =>
                      moment(value).format("MMMM Do YYYY, h:mm:ss a")
                    }
                    className="add-input"
                  />
                </Form.Item>
              </Row>
              <Row className="input-row">
                <Form.Item label="Document Upload" name="file">
                  <Upload>
                    <Button className="add-input" icon={<AiOutlineUpload />}>
                      &nbsp; Click to Upload
                    </Button>
                  </Upload>
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
                <Form.Item label="Add Note" name="note">
                  <TextArea className="add-text" rows={4} />
                </Form.Item>
              </Row>
              <Button className="form-btn">Submit</Button>
            </Form>
          </div>

          <div className="form-card">
            <h6>Registration Information</h6>
            <Form layout="vertical" className="doc-form">
              <Row className="input-row">
                <Form.Item label="Select Payment Option" name="payment option">
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
                    <option>Payment Option</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Case Money</option>
                  </select>
                </Form.Item>
                <Form.Item label="Insurance Information" name="insurance info">
                  <Radio>Yes I have Insurance</Radio>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <Radio>No I haven't Insurance</Radio>
                </Form.Item>
              </Row>
              <Row className="input-row">
                <Form.Item label="Insurance Number" name="insurance num">
                  <Input className="add-input" />
                </Form.Item>
                <Form.Item label="Ward Number" name="insurance num">
                  <Input className="add-input" />
                </Form.Item>
              </Row>
              <Row className="input-row">
                <Form.Item label="Select Doctor" name="doc option">
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
                    <option>Dr.Vanesea</option>
                    <option>Dr.Alexa</option>
                    <option>Dr.Pradip</option>
                    <option>Dr.Chopper</option>
                  </select>
                </Form.Item>
                <Form.Item label="Cabin Number" name="cabin">
                  <Input className="add-input" />
                </Form.Item>
              </Row>
              <Button className="form-btn">Submit</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AddPatientForm;
