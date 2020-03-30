import React from 'react';
import { Helmet } from "react-helmet"
import CssBaseline from '@material-ui/core/CssBaseline'; 
import { createStyles } from './styles'; 
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
 import theme from './theme';

export default ({ children }) => {
 
  const styles = createStyles();
 
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>
      <div className={styles.root}>
        <CssBaseline />

        <main className={styles.content}>
          {children}
        </main>
      </div>
    </MuiThemeProvider>
  );
}