import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import NavBar1 from "../components/NavBar1";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log(!isAuthenticated);
      navigate("/sign-in");
    }
  }, [isAuthenticated]);

  return (
    <>
      <NavBar1 />
      <Dashboard />
    </>
  );
};

export default DashboardPage;
