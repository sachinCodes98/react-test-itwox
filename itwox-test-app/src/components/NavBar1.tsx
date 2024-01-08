import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar1 = () => {
    const navigate = useNavigate()
    const {isAuthenticated, logout} = useAuth();

    const handleLogout = ()=>{
        logout()
    }

    const handleDashRoute=()=>{
        if(isAuthenticated){
            navigate("/dashboard")
        }else{
            alert("You must be Signed in")
            navigate("/")
        }
    }

  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      {isAuthenticated && <Navbar.Brand onClick={handleDashRoute}>Dashboard</Navbar.Brand>}
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
         {isAuthenticated ?<a onClick={handleLogout}>Sign out</a> : <a href="/sign-in">Sign in</a>}
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar1;
