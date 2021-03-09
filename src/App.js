import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect,  } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainDashboardTemplate from "./pages/MainDashboardTemplate";
import LoginTemplate from "./pages/LoginTemplate";
function App() {
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
