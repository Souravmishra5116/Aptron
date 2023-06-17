import React, { useState } from "react";
import { Layout } from "../../component/Layout";
import { toast } from "react-toastify";
import axios from "axios";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();
  let [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  function handleInput(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      console.log(data);
      const res = await axios.post(
        `http://localhost:8000/api/v1/auth/register`,
        { data }
      );
      // .then(() => {
      //   toast.success("Regestration Sucessfull");
      // });
      if (res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Form className="mt-2" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleName">Name</Label>
              <Input
                type="text"
                name="name"
                value={data.name}
                onChange={handleInput}
                id="exampleEmail"
                placeholder="enter name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Email</Label>
              <Input
                type="email"
                name="email"
                value={data.email}
                onChange={handleInput}
                id="examplePassword"
                placeholder="enter email id"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                value={data.password}
                onChange={handleInput}
                id="examplePassword"
                placeholder="enter password here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Phone</Label>
              <Input
                type="text"
                name="phone"
                value={data.phone}
                onChange={handleInput}
                id="examplePassword"
                placeholder="enter phone no"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input
                type="text"
                name="address"
                value={data.address}
                onChange={handleInput}
                id="examplePassword"
                placeholder="enter address here "
              />
            </FormGroup>
            <Button
              className="mb-2"
              color="success"
              style={{ width: "100%", fontSize: "25px" }}
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
      <div className="col-md-3"></div>
    </Layout>
  );
};
