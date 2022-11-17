import React from "react";
import { Row, Table, Input, Progress, Tag } from "antd";
import Patient from "../../resources/images/patient.jpg";

const PatientList = () => {
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
      title: "AGE",
      dataIndex: "age",
      key: "age",
      render: (text) => <h6>{text}</h6>,
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
    {
      title: "PROGRESS",
      dataIndex: "progress",
      key: "progress",
      render: (_) => (
        <div
          style={{
            width: 170,
          }}
        >
          <Progress percent={30} size="small" />
        </div>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      render: (_) => (
        <div>
          <Tag color="#55acee">Admitted</Tag>
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      id: "PT-001",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "2",
      id: "PT-002",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "3",
      id: "PT-003",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "4",
      id: "PT-004",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "5",
      id: "PT-005",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "6",
      id: "PT-006",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "7",
      id: "PT-007",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
    {
      key: "8",
      id: "PT-008",
      age: 32,
      address: "New York No. 1 Lake Park",
      admitted: "	May 13, 2021",
      discharge: "May 19, 2021",
    },
  ];
  return (
    <section className="global">
      <h1>Patient List</h1>
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

export default PatientList;
