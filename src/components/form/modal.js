import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Drawer } from '@material-ui/core';

export default ({ onClose, children, width }) => {
  const drawerWidth = width || '60%';
  const useStyles = makeStyles(theme => ({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3)
    },
    drawerPaper: {
      width: drawerWidth,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      anchor="right"
      open={true}
      onBackdropClick={onClose}
      classes={{ paper: classes.drawerPaper }}>
      {children}
    </Drawer>
  );
}