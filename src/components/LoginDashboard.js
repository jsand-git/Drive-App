import React, { Component, useState } from "react";
import {Nav, Carousel} from 'react-bootstrap';
import './styles/sidebar.css'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {Helmet} from 'react-helmet';
import {
  Redirect,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { Img } from "react-image";
import { Button } from "bootstrap";




export default function LoginDashboard() {

  var provider = new firebase.auth.GoogleAuthProvider();
  var user = firebase.auth().currentUser;


  function sendToLoginSuccesssful(provider) {
  var user = firebase.auth().currentUser;
  if (user == null){

    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

   return <Redirect to="/main"></Redirect>;

}




    return(

    <div>
      <img src= "/loginImgs/HUBison.svg" alt= "Bison Logo" style={{ float: 'left', paddingRight : '5px' }} />
      <h1 style={{color: "tomato",fontSize: 70, fontWeight: "bolder"}}> LOGIN  </h1>

        <button onClick={() => {sendToLoginSuccesssful(provider)}} type="button" class="btn">Enter</button>

      <img src= "/loginImgs/HUBisonWords.png" alt= "Bison Logo Words" style={{ width: 600 , height: 300, left: 850, bottom: 475,  position: "absolute"}} />
      <img src= "/loginImgs/GDRLogo.png" alt= "Google Drive Logo" style={{ width: 400 , height: 400, left: 925, bottom: 50, position: "absolute"}} />

      <Helmet>
        <style>{'body { background-color: #357EC7; }'}</style>
      </Helmet>


    </div>



    );



};
