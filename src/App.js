import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Container style={{ padding: 0, fontFamily: "Raleway" }}>
    <Container>
      <Router>
        <Switch>
          
          <Route path="/" component={LoginTemplate} />
        </Switch>
      </Router>
    </Container>
  </Container>
  );
}

export default App;
