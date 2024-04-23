import "../App.css";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNum: "",
    password: "",
    confirmPassword: "",
  });
  const [token, setToken] = useState(localStorage.getItem("token"))
  // ->
  const navigate = useNavigate();
  const location = useLocation();
  // ->
  const haldleInputField = (e) => {
    const sName = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [sName]: value });
  };
  // ->

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname === "/register" && form.name === "") {
      return alert("Please Enter Name");
    } else if (form.email === "") {
      return alert("Please Enter Email");
    } else if (location.pathname === "/register" && form.mobileNum === "") {
      return alert("Please Enter Mobile Number");
    } else if (form.password === "") {
      return alert("Please Enter Password");
    } else if (
      location.pathname === "/register" &&
      form.confirmPassword === ""
    ) {
      return alert("Please Enter Confirm Password");
    }

    // let bodyContent = JSON.stringify({
    //   name: form.name,
    //   email: form.email,
    //   password: form.password,
    //   mobileNumber: form.mobileNum,
    // });
    // ->

    const api = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "kminchelle",
        password: "0lelplR",
      }),
    });
    // -->

    const apiResponse = await api.json();
    localStorage.setItem("token", apiResponse.token);
    navigate("/");
    console.log(apiResponse);
    setForm({
      name: "",
      email: "",
      mobileNum: "",
      password: "",
      confirmPassword: "",
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="col-5 container shadow-lg p-3 mb-4 bg-white rounded">
          {location.pathname === "/register" && (
            <h3 className="text-center">Register</h3>
          )}
          {location.pathname === "/login" && (
            <h3 className="text-center">Login</h3>
          )}

          <Form onSubmit={handleSubmit} className="row">
            <Form.Group className="container col-8" controlId="formBasicEmail">
              {location.pathname === "/register" && (
                <>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={form.name}
                    type="text"
                    placeholder="Enter Name"
                    className="shadow col-2 p-1 mb-4 bg-white rounded"
                    onChange={haldleInputField}
                    autoComplete="off"
                  />
                </>
              )}
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                value={form.email}
                type="email"
                placeholder="Enter email"
                className="shadow p-1 mb-4 bg-white rounded"
                onChange={haldleInputField}
                autoComplete="off"
              />
              {location.pathname === "/register" && (
                <>
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    name="mobileNum"
                    value={form.mobileNum}
                    type="Number"
                    placeholder="Mobile Number"
                    className="shadow p-1 mb-4 bg-white rounded"
                    onChange={haldleInputField}
                    autoComplete="off"
                  />
                </>
              )}

              {/* </Form.Group> */}

              {/* <Form.Group className="mb-3 col-7" controlId="formBasicPassword"> */}
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={form.password}
                type="password"
                placeholder="Password"
                className="shadow p-1 mb-4 bg-white rounded"
                onChange={haldleInputField}
                autoComplete="off"
              />
              {location.pathname === "/register" && (
                <>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    name="confirmPassword"
                    value={form.confirmPassword}
                    type="password"
                    placeholder="Confirm Password"
                    className="shadow p-1 mb-4 bg-white rounded"
                    onChange={haldleInputField}
                    autoComplete="off"
                  />
                </>
              )}
              <Button className="formSubBtn" variant="success" type="submit">
                Submit
              </Button>
            </Form.Group>
            {/* <Form.Group className="mb-3 col-10" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
