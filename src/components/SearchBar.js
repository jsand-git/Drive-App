import React, { Component, useState } from "react";

import {InputGroup, FormControl} from 'react-bootstrap';

export default function SearchBar() {



  
    return (
        <InputGroup className="mb-3" style={{ margin:"10px" }}>
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            />
        </InputGroup>
    );
  
  
};