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
import { Img } from "react-image";




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
      <img src= "/loginImgs/HUBison.svg" alt= "Bison Logo" style={{ float: 'left', paddingRight : '5px' }} />
      <h1 style={{color: "tomato",fontSize: 70, fontWeight: "bolder"}}> LOGIN  </h1>
      <button onClick={() => {sendToLoginSuccesssful(provider)}}
            type="button" class="btn">Enter</button>
      <Link to="/main" type="button" class="btn">Go to Dashboard</Link>
      <img src= "/loginImgs/HUBisonWords.png" alt= "Bison Logo Words" style={{ width: 600 , height: 300, left: 850, bottom: 475,  position: "absolute"}} />
      <img src= "/loginImgs/GDRLogo.png" alt= "Google Drive Logo" style={{ width: 400 , height: 400, left: 925, bottom: 50, position: "absolute"}} />
      
      <Helmet>
        <style>{'body { background-color: #357EC7; }'}</style>
      </Helmet>
      
    
    </div>



    );



};
