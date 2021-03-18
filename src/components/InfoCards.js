import React, { Component, useState } from "react";

import {InputGroup, Card,ProgressBar, Row} from 'react-bootstrap';

export default function InfoCards() {



  
    return (
        <Row>
        <Card className="col" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    <h6>60%</h6>
                <div class="w-100"></div>  
                <ProgressBar now={60} />
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className="col" style={{ width: '10rem' }}>
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                <h6>60%</h6>
            <div class="w-100"></div>  
            <ProgressBar now={60} />
            </Card.Text>
        </Card.Body>
    </Card>
    <Card className="col" style={{ width: '10rem' }}>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    <h6>60%</h6>
                <div class="w-100"></div>  
                <ProgressBar now={60} />
                </Card.Text>
            </Card.Body>
        </Card>
    </Row>
        
    );
  
  
};