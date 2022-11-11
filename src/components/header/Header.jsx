import "./header.css";
import React from "react";
import { BsInfoSquareFill, BsFillBellFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import Profile from "../../resources/images/profile.png";
import { Row, Input } from "antd";
const { Search } = Input;

const Header = () => {
  const onSearch = (value) => console.log(value);

  return (
    <section className="header">
      <Row className="header-row">
        <div className="search">
          <Search placeholder="Search" onSearch={onSearch} enterButton />
        </div>
        <Row className="info-profile">
          <div>
            <BsInfoSquareFill
              style={{
                color: "#6AAB9C",
              }}
              size={18}
            />
          </div>
          <div>
            <BsFillBellFill size={18} />
          </div>

          <div>
            <h2>John Quinn</h2>
            <p>Admin Profile</p>
          </div>
          <div className="img-profile">
            <img src={Profile} alt="profile" />
          </div>
          <div>
            <AiTwotoneSetting size={18} />
          </div>
        </Row>
      </Row>
    </section>
  );
};

export default Header;
