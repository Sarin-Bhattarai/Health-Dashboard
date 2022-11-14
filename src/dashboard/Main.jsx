import { Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  MdNaturePeople,
  MdNature,
  MdReorder,
  MdOndemandVideo,
  MdPersonOutline,
  MdAccessible,
  MdOutlineRailwayAlert,
  MdSwitchAccount,
} from "react-icons/md";
import { IoIosApps } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import Virtual from "./I-health-virtual/Virtual";
import Header from "../components/header/Header";
import Heart from "../resources/images/heart-beat.png";
import Covid from "./hospital-dashboard/covid-19/Covid";
import Hospital from "./hospital-dashboard/hospital/Hospital";
import Doctors from "./doctor/Doctors";
import AddDoctor from "./doctor/AddDoctor";
import Appointment from "./doctor/Appointment";
import DoctorProfile from "./doctor/DoctorProfile";

const { Sider, Content } = Layout;

const Main = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "/dashboard",
      icon: <AiOutlineHome size={17} />,
      label: "Dashboard",
      children: [
        {
          key: "/dashboard/hospital",
          label: "Hospital Dashboard",
        },
        {
          key: "/dashboard/covid",
          label: "Covid-19 Dashboard",
        },
      ],
    },
    {
      key: "/dashboard/virtual",
      icon: <MdOndemandVideo size={17} />,
      label: "I-Health Virtual",
    },
    {
      key: "/dashboard/doctor",
      icon: <MdPersonOutline size={17} />,
      label: "Doctor",
      children: [
        {
          key: "/dashboard/doctor-all",
          label: "All Doctors",
        },
        {
          key: "/dashboard/doctor-add",
          label: "Add Doctor",
        },
        {
          key: "/dashboard/doctor-appointment",
          label: "Appointment",
        },
        {
          key: "/dashboard/doctor-profile",
          label: "Doctors Profile",
        },
        {
          key: "/dashboard/doctor-schedule",
          label: "Doctor Schedule",
        },
      ],
    },
    {
      key: "/dashboard/patient",
      icon: <MdAccessible size={17} />,
      label: "Patient",
      children: [
        {
          key: "/dashboard/patient-list",
          label: "Patient List",
        },
        {
          key: "/dashboard/patient-add",
          label: "Add Patient",
        },
        {
          key: "/dashboard/patient-profile",
          label: "Patient Profile",
        },
        {
          key: "/dashboard/patient-invoices",
          label: "Patient Invoices",
        },
      ],
    },
    {
      key: "/dashboard/accidents",
      icon: <MdOutlineRailwayAlert size={17} />,
      label: "Accidents",
    },
    {
      key: "/dashboard/labs",
      icon: <MdNature size={17} />,
      label: "Labs",
    },
    {
      key: "/dashboard/department",
      icon: <MdNaturePeople size={17} />,
      label: "Department",
    },
    {
      key: "/dashboard/accounts",
      icon: <MdSwitchAccount size={17} />,
      label: "Accounts",
      children: [
        {
          key: "/dashboard/accounts-invoices",
          label: "Invoices",
        },
        {
          key: "/dashboard/accounts-payments",
          label: "Payments",
        },
        {
          key: "/dashboard/accounts-expenses",
          label: "Expenses",
        },
      ],
    },
    {
      key: "/dashboard/app",
      icon: <IoIosApps size={17} />,
      label: "App",
      children: [
        {
          key: "/dashboard/app-calandar",
          label: "Calandar",
        },
        {
          key: "/dashboard/app-communication",
          label: "Communication",
        },
      ],
    },
  ];
  return (
    <div className="container">
      <Layout>
        <Sider
          collapsedWidth={80}
          trigger={null}
          collapsed={collapsed}
          collapsible
          width={250}
          className="sidebar"
        >
          <div>
            <div className="hammenu">
              <MdReorder
                style={{
                  color: "#fff",
                }}
                size={25}
                onClick={toggleCollapsed}
              />
            </div>
            {!collapsed && (
              <>
                <div className="name-icon">
                  <Row>
                    <img src={Heart} alt="Header-Icon" />
                    &nbsp;&nbsp;&nbsp;
                    <h1
                      style={{
                        color: "#fff",
                      }}
                    >
                      I-Health
                    </h1>
                  </Row>
                </div>
              </>
            )}
            <Menu
              className="side-nav"
              onClick={(e) => {
                navigate(e.key);
              }}
              items={items}
              mode="inline"
            />
          </div>
        </Sider>
        <Content className="main-content">
          <Header />
          <Routes>
            <Route path="/dashboard/hospital" element={<Hospital />} />
            <Route path="/dashboard/covid" element={<Covid />} />
            <Route path="/dashboard/virtual" element={<Virtual />} />
            <Route path="/dashboard/doctor-all" element={<Doctors />} />
            <Route path="/dashboard/doctor-add" element={<AddDoctor />} />
            <Route
              path="/dashboard/doctor-profile"
              element={<DoctorProfile />}
            />
            <Route
              path="/dashboard/doctor-appointment"
              element={<Appointment />}
            />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
};

export default Main;
