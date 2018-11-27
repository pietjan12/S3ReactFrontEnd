import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

//TODO : ALS ER IETS FOUT GAAT MET GRID width : unset terugzetten in styles hieronder.
const style = {
    grid: {
      
    }
 /* grid: {
    margin: "0 -15px !important"
  } */
};

function GridContainer(props) {
  const { classes, children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridContainer);
