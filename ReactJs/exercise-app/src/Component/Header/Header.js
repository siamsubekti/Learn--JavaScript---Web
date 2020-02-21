import React from 'react';
import { AppBar, Grid, Button} from '@material-ui/core';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";

function Header () {
    return (
        <AppBar color="secondary" className="Appbar">
            <Grid className="containerheader">
            <Grid className="p-react">
            React APP
            </Grid>
            <Grid>
            <Button className="btnheader">
                <Link  className="logout" to="/Logout">Logout</Link>
            </Button>
                <Switch>
                    <Route path="/logout"><Logout/></Route>
                </Switch>
            </Grid>
            </Grid>
            
          </AppBar>
    )
}

function Logout() {
    return (
      <Grid>
        <Logout/>
      </Grid>
    )
  }

export default Header;