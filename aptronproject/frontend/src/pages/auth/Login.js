import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Layout } from "../../component/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

export const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const locaction = useLocation();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    try {
      let res = await axios.post(`http://localhost:8000/api/v1/auth/login`, {
        email,
        password,
      });
      if (res.data.message) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate(locaction.state || "/");
        }, 1000);
        setAuth({ ...auth, user: res.data.user, token: res });
        localStorage.setItem("auth", JSON.stringify(res.data));
      } else {
        toast(res.data.message);
      }
    } catch (error) {
      toast.error(error.data.message);
    }
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form className="mt-5" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="enter email id"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="enter password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>

            <Button color="success" style={{ width: "100%", fontSize: "15px" }}>
              Login
            </Button>
          </Form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </Layout>
  );
};
