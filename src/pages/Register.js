import React, { useState,useEffect } from "react";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import Spinner from "../component/Spinner";
import image2 from '../Images/register.png'
import axios from "axios";
const Register = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = async val => {
    console.log(val);

    try {
      setLoading(true);
      await axios.post("/users/register", val);
      setLoading(false);
      message.success("registration successfull!!!");
      navigate("/login");
    } catch (error) {
      setLoading(false)
      message.error("registration failed");
      console.log(error);
    }
  };
 
  useEffect(()=>{
    const user=localStorage.getItem('users');
    if(user){
      navigate("/");
    }
  },[navigate])
  return (
    <>
      {loading && <Spinner />}
      <div className="cont">
        <div className="image">
          <img src={image2} alt="Registerpage"/>
        </div>
        <div className="register">
          <Form layout="vertical" onFinish={handlesubmit}>
            <div>
              <h4 className="text-align-center">Register Page</h4>
            </div>
            <Form.Item label="Name" name="name">
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <Form.Item label="Phone Number" name="phoneno">
              <Input type="text" />
            </Form.Item>
            <div>
              <button className="d-flex btn btn-primary">Register</button>
            </div>
            <div>
              <Link to="/login">already register? login here!!</Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
