import React, { Component, useState } from "react";
import {Nav, Row, Col,Image, ListGroup, ListGroupItem } from 'react-bootstrap';import  Carousel  from './Carousel1.js';
import  Search  from './SearchBar.js';
import  InfoCards  from './InfoCards.js';
import Calendar from 'react-calendar';
import Popup from './Popup.js';
import 'react-calendar/dist/Calendar.css';
import './styles/sidebar.css'
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import './styles/sidebar.css'
import { Students } from "./json/data.js";
import { Button } from "bootstrap";

import {Helmet} from 'react-helmet';




class NavBar extends React.Component {


    constructor(props) {

        var provider = new firebase.auth.GoogleAuthProvider();


        super(props);
        this.state = {
        count: 0,
        userDisplayName: null,
        userEmail: null,
        userProfilePic: null,
        loggedin: false,
        provider: provider,
        user: null,
        document1: null,
        document2: null,
        document3: "policies_and_procedures",
        documentImg: null,
        };
      }
      
      togglePopup() {
        console.log("POP");
        // console.log(docName);
        this.setState({
            // selectedDoc: docName,
            showPopup: !this.state.showPopup
        });
      }

      componentDidMount(){
        console.log(this.state.userDisplayName);
        console.log(this.state.userEmail);
        console.log(this.state.userProfilePic);
        console.log(this.state.loggedin);
        console.log(this.state.auth);
        console.log(this.state.user);
        console.log("user");
        console.log(firebase.auth().currentUser);

      }

    sendToLoginSuccesssful(provider) {
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user1 = result.user;
        this.setState({user: user1});
        this.setVal(user1);
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

    setVal(user){

        this.setState({userDisplayName: user.displayName});
        this.setState({userEmail: user.email});
        this.setState({userProfilePic: user.photoURL});
        this.setState({loggedin: true});
        console.log("success");
        this.setDocuments(user.displayName); 
    }

    setDocuments(name){
                   
        var x = 0;
        var stringArray = [];
        for( x = 0 ; x < Students.length ; x++) {
            
            if ( name === Students[x].name) {
                console.log(Students[x].name);
                console.log(Students[x].documentNames);
                this.setState({document1: Students[x].documentNames[0]});
                this.setState({document2: Students[x].documentNames[1]});
                

                // this.setState({documentNames: stringArray});
                // console.log(this.documentNames);
                console.log("ABOOBAKAR");
                // console.log(Students[x].documentNames);
                this.setState({documentImg: Students[x].documentNames[0]});
            }
            
        }
        
    }

    changedoc(document){

        this.setState({documentImg : document});
    }

    signout(){
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });


          this.setState({loggedin: false});
    }



    render() {


        if (this.state.loggedin){

            return (
            <div id="container">
        <Nav className=" col d-none d-md-block sidebar"
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>


        <ul class="nav flex-column">
            <li class="nav-item">
            <a class="nav-link active" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-grid" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                </svg>
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-gear-wide-connected" viewBox="0 0 16 16">
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646l.087.065-.087-.065z"/>
            </svg>
            </a>
            </li>

            <li class="nav-item">
            <a class="nav-link" href="#">
            <svg onClick={() => {this.signout()}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
            </a>
            </li>

        </ul>


        </Nav>

        <div id="page-content-wrapper1" className="container-fluid">

        <Row>
            <Col id="nameEmail"  className="col">
                <div class="container">
                    <Row>
                        <Col>
                            <h2>Student Dashboard</h2>
                        </Col>
                    <div class="w-100"></div>
                        <Col id="nameEmail" className="col">
                            <h5> { this.state.userDisplayName } </h5>
                            <p>{ this.state.userEmail }</p>
                        </Col>
                        <Col id="contentstuff" className="col">
                            <Image id="imageKofi" src= { this.state.userProfilePic } roundedCircle />
                        </Col>

                    <div class="w-100"></div>
                        <Col>
                        <Image syle={{maxWidth: "400px"}} id="schoolImages" src={"/loginImgs/" + this.state.documentImg + '.jpeg'}></Image>
                        </Col>


                    </Row>
                </div>
            </Col>
            <Col id="contentstuff" className="col-8">
               <Search></Search>
            <div class="w-100"></div>
                <InfoCards></InfoCards>
            <div class="w-100"></div>
            <ListGroup>
                <ListGroup.Item action onClick={() => this.changedoc(this.state.document1)}>{ this.state.document1 } </ListGroup.Item>
                <ListGroup.Item action onClick={() => this.changedoc(this.state.document2)}> { this.state.document2 } </ListGroup.Item>
                <ListGroup.Item action onClick={() => this.changedoc(this.state.document3)}> { this.state.document3 } </ListGroup.Item>
            </ListGroup>
            
            </Col>

  
  
        </Row>



        </div>


  </div>);

}

if (this.state.loggedin == false){



    return(
    <div>
    <img src= "/loginImgs/HUBison.svg" alt= "Bison Logo" style={{ float: 'left', paddingRight : '5px' }} />
    <h1 style={{color: "tomato",fontSize: 70, fontWeight: "bolder"}}> LOGIN  </h1>

      <button onClick={() => {this.sendToLoginSuccesssful(this.state.provider)}} type="button" class="btn">Enter</button>

    <img src= "/loginImgs/HUBisonWords.png" alt= "Bison Logo Words" style={{ width: 600 , height: 300, left: 850, bottom: 475,  position: "absolute"}} />
    <img src= "/loginImgs/GDRLogo.png" alt= "Google Drive Logo" style={{ width: 400 , height: 400, left: 925, bottom: 50, position: "absolute"}} />

    <Helmet>
      <style>{'body { background-color: #357EC7; }'}</style>
    </Helmet>


  </div> );
}



    }
}



export default NavBar;