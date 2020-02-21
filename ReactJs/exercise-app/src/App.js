import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Grid } from '@material-ui/core';
import LayoutTwoColumn from './Layout/LayoutTwoColumn';

function App() {
  return (
    <Router>
      
      <Grid className="App">
        <LayoutTwoColumn/>  
      </Grid>
    
    </Router>
  );
}

export default App;
