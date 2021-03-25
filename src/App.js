import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect,  } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainDashboardTemplate from "./pages/MainDashboardTemplate";
import LoginTemplate from "./pages/LoginTemplate";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// function initializeFirebase(){
//
// }

function App() {
  var firebaseConfig = {
    apiKey: "AIzaSyAUSMd4BKdxKIIgq2VGLwfzLPXW-wLzBkc",
    authDomain: "hu-drive.firebaseapp.com",
    projectId: "hu-drive",
    storageBucket: "hu-drive.appspot.com",
    messagingSenderId: "870378528473",
    appId: "1:870378528473:web:32fd812371f35bb746e8c8",
    measurementId: "G-TFBDHN9TZ4"
  };
   //initialize firebase
   // firebase.initializeApp(firebaseConfig);


  return (
      <Router>
        <Switch>
          <Route path="/main" component={MainDashboardTemplate} />
          <Route path="/login" component={LoginTemplate} />
        </Switch>


      </Router>


  );
}

export default App;
