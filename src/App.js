import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect,  } from "react-router-dom";
import { Container } from "react-bootstrap";
import MainDashboardTemplate from "./pages/MainDashboardTemplate";
function App() {
  return (


      <Router>
        <Switch>
          
          <Route path="/" component={MainDashboardTemplate} />
        </Switch>
      </Router>


  );
}

export default App;
