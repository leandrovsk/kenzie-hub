import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    !token && navigate("/login");
  }, [navigate]);

  return <h1>Dashboard</h1>;
};

export default Dashboard;
