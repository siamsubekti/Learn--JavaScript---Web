import React from 'react';
// import Grid from '@material-ui/core';
import Header from '../Component/Header/Header';
import { Grid } from '@material-ui/core';
import Breadcrumb from '../Component/Content/Breadcrumbs/Breadcrumb';

function LayoutTwoColumn() {
    return(
        <Grid>
            <Header/>
            <Breadcrumb/>                    
        </Grid>
    )
}

export default LayoutTwoColumn;