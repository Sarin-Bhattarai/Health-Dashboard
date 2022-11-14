import React from "react";
import { Row, Col } from "antd";
import "../../styles/doctors.css";
import Profile2 from "../../resources/images/avatar.jpg";
import { GiSmartphone } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail, HiOutlineCake } from "react-icons/hi";

const DoctorProfile = () => {
  return (
    <section className="global">
      <Row className="docProfile-card">
        <Col
          style={{
            textAlign: "center",
            marginTop: "10px",
          }}
          span={4}
        >
          <img
            style={{
              borderRadius: "50px",
              marginBottom: "5px",
            }}
            className="avatar-profile"
            src={Profile2}
            alt="profile"
          />
          <p
            style={{
              fontSize: "12px",
              opacity: 0.8,
            }}
          >
            Doctor ID : PXL-0001
          </p>
        </Col>
        <div
          style={{
            borderLeft: "1px solid #d3d3d3",
          }}
        ></div>
        &nbsp; &nbsp; &nbsp;
        <Col span={18}>
          <div className="doc-heading">
            <h1>Dr.Joan Wilson</h1>
            <h4>Heart Surgeon,London, England</h4>
            <p>
              Duis felis ligula, pharetra at nisl sit amet, ullamcorper
              fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed
              tristique scelerisque arcu id dignissim. Aenean sed erat ut est
              commodo tristique ac a metus. Praesent efficitur congue orci.
              Fusce in mi condimentum mauris maximus sodales. Quisque dictum est
              augue, vitae cursus quam finibus in. Nulla at tempus enim. Fusce
              sed mi et nibh laoreet consectetur nec vitae lacus.
            </p>

            <Row
              style={{
                gap: "20rem",
                marginBottom: "4px",
              }}
            >
              <Row
                style={{
                  gap: "0.3rem",
                }}
              >
                <GiSmartphone size={18} />
                <p>202-555-0174</p>
              </Row>

              <Row
                style={{
                  gap: "0.3rem",
                }}
              >
                <HiOutlineMail size={18} />
                <p>joanwilson@gmail.com</p>
              </Row>
            </Row>
            <Row
              style={{
                gap: "20rem",
                marginBottom: "4px",
              }}
            >
              <Row
                style={{
                  gap: "0.3rem",
                }}
              >
                <HiOutlineCake size={18} />
                <p>19/03/1980</p>
              </Row>

              <Row
                style={{
                  gap: "0.3rem",
                }}
              >
                <MdLocationOn size={18} />
                <p>2734 West Fork Street,EASTON.</p>
              </Row>
            </Row>
          </div>
        </Col>
      </Row>

      <Row gutter={22}>
        <Col span={16}>
          <div className="docProfile-card">
            <h6>Recent Post</h6>
            <Row gutter={22}>
              <Col span={8}>
                <div className="docProfile-card">
                  <h1>4.5</h1>
                  <p>based on 1,032 ratings</p>
                </div>
              </Col>
              <Col span={16}>
                <div className="docProfile-card">6</div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={8}>
          <div className="docProfile-card">
            <h6>Doctors Expertabilities</h6>
          </div>
          <div className="docProfile-card">
            <h6>Health Survey</h6>
          </div>
          <div className="docProfile-card">
            <h6>Patient Survey</h6>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default DoctorProfile;
