import React, { Component, useState } from "react";

import {Nav, Carousel} from 'react-bootstrap';
import './styles/sidebar.css'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"




export default function LoginDashboard() {

  var provider = new firebase.auth.GoogleAuthProvider();

  function sendToLoginSuccesssful(provider) {
   console.log('Successful');
   firebase.auth().signInWithRedirect(provider);
   console.log('LOG');
     firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       console.log('User is signed in.');
     } else {
       console.log('No user is signed in.');
     }
   });
  }
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('User is signed in.');
    } else {
      console.log('No user is signed in.');
    }
  });
  console.log('Line 37'); 

    return(

        <div>
            <Helmet>
                <style>{'body { background-color: #357EC7; }'}</style>
            </Helmet>
        <h1>Login </h1>
        <button onClick={() => {sendToLoginSuccesssful(provider)}}
            type="button" class="btn">Enter</button>
        <Link to="/main" type="button" class="btn">Go to Dashboard</Link>
          <MDBContainer className="mt-5">
        <MDBRow className="mb-4">
          <MDBCol md="8">
            <img src="https://upload.wikimedia.org/wikipedia/en/b/b4/Howard_Bison_logo.svg" className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Howard_Bison_Wordmark_2015.png" className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png" className="align-text-top" alt="aligment"  />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        </div>






    );



};
