import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    let token = "54321";
    login(token);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <div style={{ width: "450px", margin: "160px auto", textAlign: "left" }}>
      <h1>Sign In</h1>
      <Form
        onSubmit={(e: React.MouseEvent<HTMLFormElement>) => handleSignIn(e)}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
