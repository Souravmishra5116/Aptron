import React from "react";
import { Layout } from "../component/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-md-6 ">
            <img src="../images/contact us.jpg" alt="contact-us" width="100%" />
          </div>
          <div className="col-md-6">
            <h1 className="text-center mt-5">Contact Us</h1>
            <p style={{ marginLeft: "50px" }}>
              <i className="fa-solid fa-phone-volume"></i>
              <span style={{ padding: "10px" }}>+91-8872045992</span>
            </p>

            <p style={{ marginLeft: "50px" }}>
              <i className="fa-regular fa-envelope"></i>
              <span style={{ padding: "10px" }}>
                Souravmishra5116@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
