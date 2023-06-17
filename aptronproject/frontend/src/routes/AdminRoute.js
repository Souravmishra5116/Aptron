import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../Spinner";
const AdminRoute = () => {
  let [ok, setOk] = useState();
  let [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      let res = await axios.get(`http://localhost:8000/api/v1/auth/user-auth`, {
        headers: {
          Authorization: auth?.token,
        },
      });
      if (res.data.ok) setOk(true);
      else setOk(false);
    };
    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);
  return <div>{ok ? <Outlet /> : <Spinner />}</div>;
};

export default AdminRoute;
