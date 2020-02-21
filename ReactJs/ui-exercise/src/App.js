import React, {Component} from 'react';
import NavBar from './NavBar';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';



class App extends Component {
  render() {
      return (
              <div>
                <NavBar />
              </div>  
    )
  }
  }


export default App;
