import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../component/Spinner";
import image1 from "../Images/login.png";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlesubmit = async val => {
    console.log(val);
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", val);
      setLoading(false);
      localStorage.setItem("users", JSON.stringify({ ...data, password: "" }));
      message.success("login successfull");
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("login failed");
      console.log(error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("users");
    if (user) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      {loading && <Spinner />}
      <div className="cont">
        <div className="image">
          <img src={image1} alt="loginpage" />
        </div>
        <div className="register">
          <Form layout="vertical" onFinish={handlesubmit}>
            <div>
              <h4 className="text-align-center">Login Page</h4>
            </div>
            <Form.Item label="Email" name="email">
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>
            <div>
              <button className="d-flex btn btn-primary">Login</button>
            </div>

            <div>
              <Link to="/register" className="text-align-center">
                Not yet Registered? register here!!
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
