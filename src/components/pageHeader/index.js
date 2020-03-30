import React from 'react';
import { Breadcrumbs, Typography, Paper } from "@material-ui/core";
import Link from 'next/link'; 
import { makeStyles } from "@material-ui/core/styles";

export default ({ title, children }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(3, 2),
      marginBottom: '20px'
    },
    title: {
      marginTop: '2px',
      color: "#120a8f !important"
    }
  }));
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Breadcrumbs aria-label="breadcrumb" color={'primary'}>
      <Link color="inherit" href="/">Home</Link>
        {children}
      </Breadcrumbs>

      <Typography className={classes.title} color={'secondary'} variant="h4">{title}</Typography>
    </Paper>
  );
}