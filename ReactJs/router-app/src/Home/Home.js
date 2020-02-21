import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { AppBar, Grid, Card, CardActionArea, 
        CardActions, CardContent, CardMedia, Button, Typography }
       from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';





function Home (){
  return (
    <div>

    </div>
  //   <Router>
  //     <Grid className="AppHome">
  //       <Grid className="App1Home">
  //         <Button>
  //           <Link to="/Menu">Menu</Link>
  //           <Link to="/MenuItem1">Menu Item 1</Link>
  //           <Link to="/MenuItem2">Menu Item 2</Link>
  //         </Button>
  //       </Grid>
  //       <Grid className="App2Home">
  //       <Switch>
  //         <Route path="/Menu"><Menu/></Route>
  //         <Route path="/MenuItem1"><MenuItem1/></Route>
  //         <Route path="/MenuItem2"><MenuItem2/></Route>
  //       </Switch>  
  //     </Grid>
  //     </Grid>
  //   </Router>
  )
}
export default Home;