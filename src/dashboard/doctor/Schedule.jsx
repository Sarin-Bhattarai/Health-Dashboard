import React, { useState } from "react";
import { Row, Button, Modal, Form, Input, DatePicker } from "antd";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ReactTimeslotCalendar from "react-timeslot-calendar";
import moment from "moment";
const { TextArea } = Input;

const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="global">
      <Row
        style={{
          justifyContent: "space-between",
        }}
      >
        <h1>Doctor Schedule</h1>
        <Button className="form-btn" onClick={showModal}>
          <Row
            style={{
              gap: "0.3rem",
            }}
          >
            <div
              style={{
                marginTop: "1px",
              }}
            >
              <AiOutlinePlusCircle size={18} />
            </div>
            <div>Add Schedule</div>
          </Row>
        </Button>
        <Modal
          title="Schedule Add"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form layout="vertical" className="doc-form">
            <Row className="input-row">
              <Form.Item label="Schedule Day" name="schedule day">
                <Input className="modal-input" />
              </Form.Item>
              <Form.Item label="Schedule Time" name="schedule time">
                <DatePicker
                  format={(value) =>
                    moment(value).format("MMMM Do YYYY, h:mm:ss a")
                  }
                  className="modal-input"
                />
              </Form.Item>
            </Row>
            <Form.Item label="Schedule Note" name="schedule note">
              <TextArea className="add-text" rows={4} />
            </Form.Item>
          </Form>
        </Modal>
      </Row>
      <hr />
      <div
        style={{
          marginTop: "20px",
        }}
        className="docProfile-card"
      >
        <ReactTimeslotCalendar
          // initialDate={moment([2017, 3, 24]).format()}
          let
          timeslots={[
            ["1", "2"], // 1:00 AM - 2:00 AM
            ["2", "3"], // 2:00 AM - 3:00 AM
            ["4", "6"], // 4:00 AM - 6:00 AM
            "5", // 5:00 AM
            ["4", "6", "7", "8"], // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
          ]}
        />
      </div>
    </section>
  );
};

export default Schedule;
