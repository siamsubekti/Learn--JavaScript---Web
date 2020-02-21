import React, { FC, ReactElement, Fragment } from "react";
import { Card, Grid, CardMedia, Typography, CardContent } from "@material-ui/core";

const HomeCards: FC = (): ReactElement => {
    return (
        <Fragment>
            {[1,2,3].map(value => (
                <Grid key={value} item>
                    <Card>
                        <CardMedia 
                            component="img"
                            image="https://via.placeholder.com/320"
                            />
                        <CardContent>
                            <Typography variant="h4" component="h2">GRID {value}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Fragment>
    );
};

export default HomeCards;