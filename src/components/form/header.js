
import React from 'react';
import { Grid, IconButton, Typography, Divider } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

export default ({ children, onClose }) => {

  const useStyles = makeStyles(theme => ({
    drawerHeader: {
      color: "#120a8f !important",
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.drawerHeader}>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5" gutterBottom>
              {children}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      <Divider />
    </>
  );
}