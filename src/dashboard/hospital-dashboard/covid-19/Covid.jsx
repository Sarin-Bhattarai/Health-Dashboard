import React from "react";
import { Col, Row } from "antd";
import "../../../styles/covid.css";
import MultitypeChart from "../../../components/charts/MultitypeChart";
import RadarChart from "../../../components/charts/Radar";

const Covid = () => {
  return (
    <section className="covid">
      <Row>
        <Col span={24}>
          <div className="covid-card">
            <h6>Covid-19 Status</h6>
            <MultitypeChart />
          </div>
        </Col>
      </Row>

      <Row
        style={{
          marginTop: "15px",
        }}
        gutter={22}
      >
        <Col span={8}>
          <div className="covid-card">
            <h6>Covid-19 Test & Result</h6>

            <div>
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <h5>STATUS</h5>
                <Row
                  style={{
                    gap: "1em",
                  }}
                >
                  <h5>TOTAL</h5>
                  <h5>NEGATIVE</h5>
                  <h5>POSITIVE</h5>
                </Row>
              </Row>
              <hr className="hr" />

              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <h5>TEST REGISTERED</h5>
                <Row
                  style={{
                    gap: "3.2em",
                  }}
                >
                  <h5>5840</h5>
                  <h5>1500</h5>
                  <h5>2500</h5>
                </Row>
              </Row>
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <h5>RESULT GIVEN</h5>
                <Row
                  style={{
                    gap: "3.2em",
                  }}
                >
                  <h5>5840</h5>
                  <h5>1500</h5>
                  <h5>2500</h5>
                </Row>
              </Row>
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <h5>PENDING</h5>
                <Row
                  style={{
                    gap: "3.2em",
                  }}
                >
                  <h5>5840</h5>
                  <h5>1500</h5>
                  <h5>2500</h5>
                </Row>
              </Row>
            </div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <h6>Patients</h6>
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <h5>CATEGORY</h5>
                <Row
                  style={{
                    gap: "1em",
                  }}
                >
                  <h5>TOTAL</h5>
                  <h5>CURED</h5>
                  <h5>DIED</h5>
                </Row>
              </Row>
              <hr className="hr" />

              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <h5>CRITICAL</h5>
                <Row
                  style={{
                    gap: "1.7em",
                  }}
                >
                  <h5>5840</h5>
                  <h5>1500</h5>
                  <h5>2500</h5>
                </Row>
              </Row>
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <h5>NON-CRITICAL</h5>
                <Row
                  style={{
                    gap: "1.7em",
                  }}
                >
                  <h5>5840</h5>
                  <h5>1500</h5>
                  <h5>2500</h5>
                </Row>
              </Row>
            </div>

            <div
              style={{
                marginTop: "20px",
              }}
            >
              <h6>Vaccine Alert</h6>
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "15px",
                }}
              >
                <h5>TYPE</h5>
                <Row
                  style={{
                    gap: "1em",
                  }}
                >
                  <h5>TOTAL</h5>
                  <h5>NOT ATTENDED</h5>
                  <h5>NAME</h5>
                </Row>
              </Row>
              <hr className="hr" />

              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <h5>FIRST DOSE</h5>
                <Row
                  style={{
                    gap: "3.8em",
                  }}
                >
                  <h5>5840</h5>
                  <h5>1500</h5>
                  <h5>2500</h5>
                </Row>
              </Row>
              <Row
                style={{
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <h5>SECOND DOSE</h5>
                <Row
                  style={{
                    gap: "3.8em",
                  }}
                >
                  <h5>5840</h5>
                  <h5>1500</h5>
                  <h5>2500</h5>
                </Row>
              </Row>
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div className="covid-card">
            <h6>Covid-19 Country</h6>
            <RadarChart />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Covid;
