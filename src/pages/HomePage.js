import React from 'react'

import { message } from "antd";

import { useNavigate } from "react-router-dom";
import image3 from "../Images/bg.svg";
const HomePage = () => {
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("users"));
  console.log(data.user.name);

  const handlelogout = () => {
    localStorage.removeItem("users");
    message.success("logout successfull");
    navigate("/login");
  };
  return (
    <div className="main">
      <div className="left">
        <div className="imgg">
          <img src={image3} alt="homepage" />
        </div>
      </div>
      <div className="right">
        <div>
          <p> Hello {data.user.name}</p>

          <button className="btn btn-dark" onClick={handlelogout} style={{width:"20rem",marginTop:"3rem",marginLeft:"30%"}}>
            logout
          </button>
        </div>
      </div>
    </div>
  );
};


export default HomePage;