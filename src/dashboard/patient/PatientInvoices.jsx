import React from "react";
import { Row, Table, Input } from "antd";
import { AiFillPrinter } from "react-icons/ai";
import { GrDownload } from "react-icons/gr";
import { RiMailSendLine } from "react-icons/ri";
import Patient from "../../resources/images/patient.jpg";

const PatientInvoices = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <h6>{text}</h6>,
    },

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
      title: "DOCTOR NAME",
      dataIndex: "doctor",
      key: "doctor",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "WARD NO",
      dataIndex: "ward",
      key: "ward",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "ADMITTED DATE",
      dataIndex: "admitted",
      key: "admitted",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "BILLING DATE",
      dataIndex: "billing",
      key: "billing",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "ADV AMOUNT",
      dataIndex: "amount",
      key: "amount",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "TOTAL AMOUNT",
      dataIndex: "total",
      key: "total",
      render: (text) => <h6>{text}</h6>,
    },
    {
      title: "ACTION",
      dataIndex: "action",
      key: "action",
      render: (_) => (
        <Row
          style={{
            justifyContent: "space-between",
          }}
        >
          <AiFillPrinter size={16} />
          <GrDownload size={16} />
          <RiMailSendLine size={16} />
        </Row>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
    {
      key: "2",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
    {
      key: "3",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
    {
      key: "4",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
    {
      key: "5",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
    {
      key: "6",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
    {
      key: "7",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
    {
      key: "8",
      id: "PT-001",
      doctor: "Dr.Alexander",
      ward: "A-101",
      admitted: "	May 13, 2021",
      billing: "May 19, 2021",
      amount: "$212",
      total: "$220",
    },
  ];
  return (
    <section className="global">
      <h1>Patient Invoices</h1>
      <hr />
      <div className="form-card">
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
    </section>
  );
};

export default PatientInvoices;
