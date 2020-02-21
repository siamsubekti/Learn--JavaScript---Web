import React, {FC, ReactElement, ReactNode, ReactNodeArray} from "react";
import {Grid} from "@material-ui/core";
import Fullwidth from "./Fullwidth";

type TwoColumnsProps = {
  aside: ReactElement | ReactNode | ReactNodeArray,
  content: ReactElement | ReactNode | ReactNodeArray,
};

const TwoColumns: FC<TwoColumnsProps> = (props): ReactElement => {
  const { aside, content } = props;
  return (
      <Fullwidth>
        <Grid container spacing={0}>
          <Grid item sm={4}>{aside}</Grid>
          <Grid item sm={8}>{content}</Grid>
        </Grid>
      </Fullwidth>
  );
};

export default TwoColumns;
