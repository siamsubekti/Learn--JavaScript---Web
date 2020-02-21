import React from 'react';
import List from './List';
import Form from './Form';
import { Grid } from '@material-ui/core';

const App = () => (
    <div>
        
        <Grid>
            <h2>Add New Article</h2>
            <Form />
        </Grid>
        <Grid>
            <h2>Articles</h2>
            <List />
        </Grid>
    </div>
    
);

export default App;