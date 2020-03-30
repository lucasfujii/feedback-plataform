import React from 'react';
import { CircularProgress, Grid } from "@material-ui/core";
import { createStyles } from './styles';

export default ({ size = 40, show = false }) => {
  const styles = createStyles();

  if(!show) return (<></>);
  
  return (
    <div className={styles.root}>
      <Grid container direction="row" justify="center" alignItems="center" className={styles.container}>
        <Grid item>
          <CircularProgress className={styles.progress} size={size} />
        </Grid>
      </Grid>
    </div>
  )
};