import './styles/sidebar.css'
import NavBar from './NavBar.js';
import React, { Component, useState } from "react";
class Popup extends React.Component{
        

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <img src = "/loginImgs/joed_registration_form.jpeg" ></img>
            <button onClick={this.props.closePopup} type="button" class="btn">x</button> 
          </div>
        </div>
      );
    }
  }


export default Popup;