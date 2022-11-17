import { Col, Form, Button, Row, Input, DatePicker, Upload, Modal } from "antd";
import React, { useState } from "react";
import "../../styles/patient.css";
import Patient from "../../resources/images/patient.jpg";
import { GiSmartphone } from "react-icons/gi";
import { FcConferenceCall } from "react-icons/fc";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";
import moment from "moment";
import { HiOutlineMail, HiOutlineCake } from "react-icons/hi";
import Icon from "../../resources/images/icon.png";
import Pavatar from "../../resources/images/pavatar.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Calorie from "../../resources/images/calorie.png";
import Omelette from "../../resources/images/omelette.png";

const { TextArea } = Input;

const PatientProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
      <h1>Patient Overview</h1>
      <hr />

      <Row gutter={22}>
        <Col span={8}>
          <div
            style={{
              textAlign: "center",
            }}
            className="form-card"
          >
            <img
              style={{
                borderRadius: "50px",
                marginBottom: "5px",
                width: "100px",
              }}
              className="avatar-profile"
              src={Patient}
              alt="patient"
            />
            <p
              style={{
                fontSize: "13px",
                opacity: 0.8,
              }}
            >
              Patient ID : PXL-0001
            </p>
            <div className="doc-heading">
              <h1>Dr.Joan Wilson</h1>
              <h4>24 years, California</h4>
              <p>
                Duis felis ligula, pharetra at nisl sit amet, ullamcorper
                fringilla mi. Cras luctus metus non enim porttitor sagittis. Sed
                tristique scelerisque arcu id dignissim. Aenean sed erat ut est
                commodo tristique ac a metus. Praesent efficitur congue orci.
                Fusce in mi condimentum mauris maximus sodales. Quisque dictum
                est augue, vitae cursus quam finibus in. Nulla at tempus enim.
                Fusce sed mi et nibh laoreet consectetur nec vitae lacus.
              </p>
            </div>
            <Row
              style={{
                gap: "3rem",
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
                marginBottom: "4px",
                gap: "1rem",
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

          <div>
            <img
              style={{
                width: "100%",
              }}
              src={Calorie}
              alt="calorie"
            />
          </div>

          <div className="form-card">
            <h6>Payment Method</h6>
            <h1
              style={{
                fontSize: "20px",
                opacity: 0.7,
              }}
            >
              Visa *******7548
            </h1>
            <p>Next billing charged $48</p>
            <p>
              Autopay on July 20, 2021{" "}
              <span
                style={{
                  color: "#F7B39F",
                }}
              >
                Edit Payment Info
              </span>
            </p>
            <Button className="form-btn">Add Payment Info</Button>
          </div>
        </Col>
        <Col span={16}>
          <div className="form-card">
            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <h6>Documents</h6>
              <Button onClick={showModal} className="form-btn">
                Add Documents
              </Button>
              <Modal
                title="Document Add"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form layout="vertical" className="doc-form">
                  <Form.Item label="Document Upload" name="file">
                    <Upload>
                      <Button
                        className="single-modal-input"
                        icon={<AiOutlineUpload />}
                      >
                        &nbsp; Click to Upload
                      </Button>
                    </Upload>
                  </Form.Item>
                  <Form.Item label="Select Doctor" name="doc option">
                    <select
                      style={{
                        width: "30rem",
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
                  <Form.Item label="Select Reason" name="select reason">
                    <select
                      style={{
                        width: "30rem",
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
                  <Form.Item label="Documents Upload Date" name="upload date">
                    <DatePicker className="single-modal-input" />
                  </Form.Item>
                  <Form.Item label="Documents Time" name="document time">
                    <DatePicker
                      format={(value) =>
                        moment(value).format("MMMM Do YYYY, h:mm:ss a")
                      }
                      className="single-modal-input"
                    />
                  </Form.Item>
                  <Form.Item label="Add Note" name="note">
                    <TextArea className="add-text" rows={4} />
                  </Form.Item>
                </Form>
              </Modal>
            </Row>

            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
            </Row>
            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
            </Row>
            <Row
              style={{
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
              <div className="patient-card">
                <Row
                  style={{
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                    }}
                    src={Icon}
                    alt="icon"
                  />
                  <h5>14.06</h5>
                </Row>
                <h6>Visit Surgeon</h6>
                <Row
                  style={{
                    gap: "0.6rem",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "30px",
                    }}
                    src={Pavatar}
                    alt="patient"
                  />
                  <h5>DR.Alexander</h5>
                </Row>
              </div>
            </Row>
          </div>

          <div className="form-card">
            <h6>Daily Task</h6>
            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <Row
                style={{
                  justifyContent: "space-between",
                }}
                className="patient-card"
              >
                <div>
                  <p>Breakfast</p>
                  <h6>390 Kcal</h6>
                  <p>Eaten</p>
                </div>
                <div>
                  <FcConferenceCall
                    style={{
                      marginTop: "30px",
                    }}
                    size={40}
                  />
                </div>
              </Row>
              <Row
                style={{
                  justifyContent: "space-between",
                }}
                className="patient-card"
              >
                <div>
                  <p>Breakfast</p>
                  <h6>390 Kcal</h6>
                  <p>Eaten</p>
                </div>
                <div>
                  <FcConferenceCall
                    style={{
                      marginTop: "30px",
                    }}
                    size={40}
                  />
                </div>
              </Row>
              <Row
                style={{
                  justifyContent: "space-between",
                }}
                className="patient-card"
              >
                <div>
                  <p>Breakfast</p>
                  <h6>390 Kcal</h6>
                  <p>Eaten</p>
                </div>
                <div>
                  <FcConferenceCall
                    style={{
                      marginTop: "30px",
                    }}
                    size={40}
                  />
                </div>
              </Row>
              <Row
                style={{
                  justifyContent: "space-between",
                }}
                className="patient-card"
              >
                <div>
                  <p>Breakfast</p>
                  <h6>390 Kcal</h6>
                  <p>Eaten</p>
                </div>
                <div>
                  <FcConferenceCall
                    style={{
                      marginTop: "30px",
                    }}
                    size={40}
                  />
                </div>
              </Row>
            </Row>
          </div>

          <div className="form-card">
            <Row
              style={{
                justifyContent: "space-between",
              }}
            >
              <h6>Healthy Dishes</h6>
              <Button className="form-btn">Order Food</Button>
            </Row>

            <Carousel responsive={responsive}>
              <div
                style={{
                  marginRight: "10px",
                }}
                className="form-card"
              >
                <img
                  style={{
                    width: "140px",
                    marginLeft: "10px",
                  }}
                  src={Omelette}
                  alt="selling"
                />
                <h6>Omelette</h6>
                <p>340 Kcal</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                }}
                className="form-card"
              >
                <img
                  style={{
                    width: "140px",
                    marginLeft: "10px",
                  }}
                  src={Omelette}
                  alt="selling"
                />
                <h6>Omelette</h6>
                <p>340 Kcal</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                }}
                className="form-card"
              >
                <img
                  style={{
                    width: "140px",
                    marginLeft: "10px",
                  }}
                  src={Omelette}
                  alt="selling"
                />
                <h6>Omelette</h6>
                <p>340 Kcal</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                }}
                className="form-card"
              >
                <img
                  style={{
                    width: "140px",
                    marginLeft: "10px",
                  }}
                  src={Omelette}
                  alt="selling"
                />
                <h6>Omelette</h6>
                <p>340 Kcal</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                }}
                className="form-card"
              >
                <img
                  style={{
                    width: "140px",
                    marginLeft: "10px",
                  }}
                  src={Omelette}
                  alt="selling"
                />
                <h6>Omelette</h6>
                <p>340 Kcal</p>
              </div>
              <div
                style={{
                  marginRight: "10px",
                }}
                className="form-card"
              >
                <img
                  style={{
                    width: "140px",
                    marginLeft: "10px",
                  }}
                  src={Omelette}
                  alt="selling"
                />
                <h6>Omelette</h6>
                <p>340 Kcal</p>
              </div>
              <div className="form-card">
                <img
                  style={{
                    width: "140px",
                    marginLeft: "10px",
                  }}
                  src={Omelette}
                  alt="selling"
                />
                <h6>Omelette</h6>
                <p>340 Kcal</p>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default PatientProfile;
