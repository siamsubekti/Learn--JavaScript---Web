import React, {FC, ReactElement} from "react";
import {Grid} from "@material-ui/core";
import HomeCards from "./HomeCards";

const Home: FC = (props): ReactElement => {
  return (
      <Grid container spacing={4} justify="center">
        <HomeCards />
      </Grid>
  );
}

export default Home;
