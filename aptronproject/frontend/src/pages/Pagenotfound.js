import React from "react";
import { Layout } from "../component/Layout";

export const Pagenotfound = () => {
  return (
    <Layout>
      <div className="error">
        <h1>404</h1>
        <h5>OOPs !! Page not found....</h5>
      </div>
    </Layout>
  );
};
