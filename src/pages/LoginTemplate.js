import React from "react";
import { Container } from "react-bootstrap";
import LoginDashboard from  '../components/LoginDashboard.js';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export default function LoginTemplate() {
  return (

        <LoginDashboard></LoginDashboard>

  );
}
