import React, {FC, ReactElement } from "react";
import {Container} from "@material-ui/core";

type FullwidthProps = {
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  disableGutters?: boolean;
  className?: string;
};

const Fullwidth: FC<FullwidthProps> = (props): ReactElement => {
  const { disableGutters: gutters = true, maxWidth=false, className } = props;
  return (
      <Container disableGutters={gutters} maxWidth={maxWidth} className={className}>
        {props.children}
      </Container>
  );
};

export default Fullwidth;
