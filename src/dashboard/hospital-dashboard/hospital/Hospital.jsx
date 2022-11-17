import { Col, Row, Input, Table } from "antd";
import React, { useState } from "react";
import "../../../styles/hospital.css";
import { BiTask } from "react-icons/bi";
import { FcHome } from "react-icons/fc";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Calerson from "../../../resources/images/calerson.png";
import AreaChart from "../../../components/charts/AreaChart";
import VerticalBarChart from "../../../components/charts/VerticalBarChart";
import Patient from "../../../resources/images/patient.jpg";
import Dom from "../../../resources/images/dom.png";

const Hospital = () => {
  const [value, onChange] = useState(new Date());
  const columns = [
    {
      title: "PATIENTS",
      dataIndex: "patient",
      key: "patient",
      render: (_) => (
        <Row>
          <img
            style={{
              borderRadius: "50px",
              marginBottom: "5px",
              width: "40px",
            }}
            src={Patient}
            alt="patient"
          />
          &nbsp;&nbsp;
          <h6
            style={{
              marginTop: "10px",
            }}
          >
            Molly
          </h6>
        </Row>
      ),
    },
    {
      title: "ADDRESS",
      dataIndex: "address",
      key: "address",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "ADMITTED",
      dataIndex: "admitted",
      key: "admitted",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "DISCHARGE",
      dataIndex: "discharge",
      key: "discharge",
      render: (text) => <h6>{text}</h6>,
    },
  ];

  const data = [
    {
      key: "1",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "2",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "3",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "4",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "5",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "6",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "7",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "8",
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
  ];
  return (
    <section className="global">
      <Row
        style={{
          marginBottom: "15px",
        }}
      >
        <Col span={10}>
          <img
            style={{
              width: "80%",
              height: "90%",
              objectFit: "cover",
            }}
            src={Calerson}
            alt="calerson"
          />
        </Col>
        <Col span={14}>
          <div className="graph-card">
            <h6>Patient Statistics</h6>
            <AreaChart />
          </div>
        </Col>
      </Row>

      <Row gutter={22}>
        <Col span={12}>
          <div className="hospitality-card">
            <h6>Hospitality Status</h6>
            <Row
              className="mt-32"
              style={{
                justifyContent: "space-between",
                marginBottom: "15px",
              }}
            >
              <div className="element-card">
                <BiTask
                  style={{
                    color: "#F7B36B",
                    marginBottom: "10px",
                  }}
                  size={30}
                />
                <h6>Total Appointment</h6>
                <p>400</p>
              </div>
              <div className="element-card">
                <BiTask
                  style={{
                    color: "#F7B36B",
                    marginBottom: "10px",
                  }}
                  size={30}
                />
                <h6>Total Appointment</h6>
                <p>400</p>
              </div>
              <div className="element-card">
                <BiTask
                  style={{
                    color: "#F7B36B",
                    marginBottom: "10px",
                  }}
                  size={30}
                />
                <h6>Total Appointment</h6>
                <p>400</p>
              </div>
            </Row>
            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <div className="element-card">
                <BiTask
                  style={{
                    color: "#F7B36B",
                    marginBottom: "10px",
                  }}
                  size={30}
                />
                <h6>Total Appointment</h6>
                <p>400</p>
              </div>
              <div className="element-card">
                <BiTask
                  style={{
                    color: "#F7B36B",
                    marginBottom: "10px",
                  }}
                  size={30}
                />
                <h6>Total Appointment</h6>
                <p>400</p>
              </div>
              <div className="element-card">
                <BiTask
                  style={{
                    color: "#F7B36B",
                    marginBottom: "10px",
                  }}
                  size={30}
                />
                <h6>Total Appointment</h6>
                <p>400</p>
              </div>
            </Row>
          </div>
        </Col>
        <Col span={12}>
          <div className="hospitality-card">
            <h6>Hospital Room Booking Status</h6>

            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
              className="mt-32"
            >
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
            </Row>
            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
              className="mt-32"
            >
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
            </Row>
            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
              className="mt-32"
            >
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <FcHome size={40} />
                <p>Room A-101</p>
              </div>
            </Row>
          </div>
        </Col>
      </Row>

      <Row className="mt-20" gutter={22}>
        <Col span={16}>
          <div className="graph-card">
            <h6>Addmission by Division</h6>
            <VerticalBarChart />
          </div>

          <div className="form-card">
            <h6>Patients Information</h6>
            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <Row>
                <h6>Show entries</h6>
                &nbsp;&nbsp;
                <select
                  style={{
                    width: "9rem",
                    height: "30px",
                    marginBottom: "15px",
                    border: "1px solid #d3d3d3",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                  <option>40</option>
                </select>
              </Row>
              <Row>
                <h6>Search:</h6>
                &nbsp;&nbsp;
                <Input
                  style={{
                    height: "30px",
                    marginBottom: "15px",
                  }}
                />
              </Row>
            </Row>
            <Table columns={columns} dataSource={data} />
          </div>
        </Col>
        <Col span={8}>
          <div className="graph-card">
            <h6>Make appointment</h6>
            <Calendar onChange={onChange} value={value} />

            <div className="appointment-form">
              <Input
                style={{
                  height: "40px",
                  marginBottom: "15px",
                }}
                placeholder="Enter Name"
              />
              <Input
                style={{
                  height: "40px",
                  marginBottom: "15px",
                }}
                placeholder="Enter Email"
              />

              <select
                style={{
                  width: "22rem",
                  height: "40px",
                  marginBottom: "15px",
                  border: "1px solid #d3d3d3",
                  padding: "8px",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                <option>Select Doctor</option>
                <option>Two</option>
                <option>Three</option>
              </select>

              <button className="btn-primary">Request appointment</button>
            </div>
          </div>
          <div>
            <img
              style={{
                width: "101%",
                marginTop: "10px",
              }}
              src={Dom}
              alt="doctor of the month"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Hospital;
