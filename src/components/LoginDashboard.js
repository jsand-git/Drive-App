import React, { Component, useState } from "react";

import {Nav, Carousel} from 'react-bootstrap';
import './styles/sidebar.css'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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

  var provider = new firebase.auth.GoogleAuthProvider();
  function sendToLoginSuccesssful() {
   firebase.auth().signInWithRedirect(provider);
    console.log('Successful');
  }
  // onclick={sendToLoginRedirect()}

// firebase.auth().signInWithRedirect(provider);
// {signInWithRedirect(provider);
// <button onClick={() =>{ sendToLoginSuccesssful(); }}
//     type="button" class="btn">Enter</button>

// <button onClick={() =>{ sendToLoginSuccesssful(); console.log('worked'); }}
//     type="button" class="btn">Enter</button>
// <button onClick={() =>{ firebase.auth().signInWithRedirect(provider);; console.log('worked'); }}
//     type="button" class="btn">Enter</button>
    return(
      <div id="backgound"  class="full-width-div">
        <h1>Login </h1>
        <button onClick={() => {firebase.auth().signInWithRedirect(provider)}}
            type="button" class="btn">Enter</button>
    </div>






    );



};
