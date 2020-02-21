import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import {AppBar, Button, Grid} from '@material-ui/core';
import AndroidIcon from '@material-ui/icons/Android';
import Home from './Home/Home';
import About from './About';
import Employees from './employee/App/App';
import More from './More';
import Card1 from './Card/App';
import Learn1 from './Learn/AppLearn';


function App() {
  return (
    <Router>
    
    
      <Grid className="App">
      
      <AppBar className="appbar">
      <AndroidIcon className="icon"></AndroidIcon>
        React Javascript
      <Grid className="app1">
        <Button className="btn">
          <Link  className="ahome" to="/Home">Home</Link>
       </Button>
       <Button>
          <Link className="ahome" to="/About">About</Link>
        </Button>
        <Button>
          <Link className="home" to="/More">More</Link>
        </Button>
        <Button>
          <Link className="home" to="/Card">Card</Link>
        </Button>
        <Button>
          <Link className="home" to="/Employee">Employee</Link>
        </Button>
        <Button>
          <Link className="home" to="/Learn">Learn</Link>
        </Button>
      </Grid>
      </AppBar>
      
      <Grid className="app2">
        <Switch>
          <Route path="/home"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/more"><More/></Route>
          <Route path="/card"><Card/></Route>
          <Route path="/employee"><Employee/></Route>
          <Route path="/learn"><Learn/></Route>
        </Switch>  
      </Grid>
            
      </Grid>
    </Router>
  );
}

function Employee() {
  return (
    <Grid>
      <Employees/>
    </Grid>
  )
}

function Card() {
  return (
    <Grid>
      <Card1/>
    </Grid>
  )
}

function Learn() {
  return (
    <Grid>
      <Learn1/>
    </Grid>
  )
}
export default App;
