import React, { Component, useState } from "react";
import {Nav, Row, Col,Image, InputGroup} from 'react-bootstrap';
import  Carousel  from './Carousel1.js';
import  Search  from './SearchBar.js';
import  InfoCards  from './InfoCards.js';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/sidebar.css'

export default function NavBar() {

    const [value, onChange] = useState(new Date());

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
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
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
                            <h5>Kofi fort</h5>
                            <p>Kofi.fort@bison.howard.edu</p>
                        </Col>
                        <Col id="contentstuff" className="col">
                            <Image id="imageKofi" src="data:image/jpeg;base64,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" roundedCircle />
                        </Col>
                        
                    <div class="w-100"></div>
                        <Col>
                        <Carousel></Carousel>
                        </Col>


                    </Row>
                </div>
            </Col>
            <Col id="contentstuff" className="col-8">
               <Search></Search>
            <div class="w-100"></div>   
                <InfoCards></InfoCards>
            <div class="w-100"></div>   
               <Calendar
                onChange={onChange}
                value={value}
                />
            </Col>
            

        </Row>

        

        </div>


</div>
        ); 
    }


