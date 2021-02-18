import React from "react";
import { Container } from "react-bootstrap";

import SignUp from "./SignUp";

import LogoNavBar from "../components/LogoNavBar";

export default function SignIn_upTemplate() {
  return (
    <Container style={{ padding: 0 }}>
      <LogoNavBar />
      <Container>
        <SignUp />
      </Container>
    </Container>
  );
}
