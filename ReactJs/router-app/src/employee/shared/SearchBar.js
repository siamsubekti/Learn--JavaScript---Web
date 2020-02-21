import React from 'react';
import { Input, Grid } from '@material-ui/core';

function SearchBar (props) {
        // const {handleChange} = props;
        return (
            <Grid class="search-container">  
                <Input type="text" className="search" onChange={props.handleChange} placeholder="search"/>
            </Grid>        
        
            )
        }
    

    export default SearchBar;