
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Image } from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import dhoni from "./pages/dhoni";
import rohit from "./pages/rohit";
import sachin from "./pages/sachin";
import virat from "./pages/virat";




function App() {
  return (
    <div>
    <div className="App">
    <Navbar bg="light" expand="lg">
              <Navbar.Brand href="">Indian Cricketer</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/dhoni">M.S Dhoni</Nav.Link>
                  <Nav.Link href="/sachin">Sachin Tendulkar</Nav.Link>
                  <Nav.Link href="virat">Virat Kohli</Nav.Link>
                  <Nav.Link href="rohit">Rohit Sharma</Nav.Link>
                </Nav>
              </Navbar.Collapse>
</Navbar>
    </div>
    <Router>
    <Switch>
          <Route path="/dhoni" component={dhoni}/>
          <Route path="/sachin" component={sachin}/>
          <Route path="/virat" component={virat}/>
          <Route path="/rohit" component={rohit}/>
   </Switch>
        </Router>
        </div>
  );
}

export default App;
