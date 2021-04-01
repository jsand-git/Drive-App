import React, { Component, useState } from "react";

import {Nav, Carousel} from 'react-bootstrap';
import './styles/sidebar.css'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {Helmet} from 'react-helmet';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"


// Sign in with SignInwithPopup
// firebase.auth().signInwithPopup(provider)
// .then((result) => {
//   /** @type {firebase.auth.OAuthCredential} */
//   var credential = result.credential;
//
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = credential.accessToken;
//
//   // The signed-in user info.
//   var user = result.user;
//
//
// }).catch((error) => {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var  errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
// });

// Sing in with Redirect




// firebase.auth()
//   .getRedirectResult()
//   .then((result) => {
//     if (result.credential) {
//       /** @type {firebase.auth.OAuthCredential} */
//       var credential = result.credential;
//
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // ...
//     }
//     // The signed-in user info.
//     var user = result.user;
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });



export default function LoginDashboard() {
   //initialize firebase


  // var firebaseConfig = {
  //   apiKey: "AIzaSyAUSMd4BKdxKIIgq2VGLwfzLPXW-wLzBkc",
  //   authDomain: "hu-drive.firebaseapp.com",
  //   projectId: "hu-drive",
  //   storageBucket: "hu-drive.appspot.com",
  //   messagingSenderId: "870378528473",
  //   appId: "1:870378528473:web:32fd812371f35bb746e8c8",
  //   measurementId: "G-TFBDHN9TZ4"
  // }
  // firebase.initializeApp(firebaseConfig);

  // firebase.initializeApp(firebaseConfig);
  var provider = new firebase.auth.GoogleAuthProvider();
  function sendToLoginSuccesssful() {
   firebase.auth().signInWithRedirect(provider);
    console.log('Successful');
  }

    return(
      
        <div>
            <Helmet>
                <style>{'body { background-color: #357EC7; }'}</style>
            </Helmet>
        <h1>Login </h1>
        <button onClick={() => {firebase.auth().signInWithRedirect(provider)}}
            type="button" class="btn">Enter</button>
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
