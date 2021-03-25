import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAUSMd4BKdxKIIgq2VGLwfzLPXW-wLzBkc",
  authDomain: "hu-drive.firebaseapp.com",
  projectId: "hu-drive",
  storageBucket: "hu-drive.appspot.com",
  messagingSenderId: "870378528473",
  appId: "1:870378528473:web:32fd812371f35bb746e8c8",
  measurementId: "G-TFBDHN9TZ4"
}
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
