import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    '&:hover': {
      backgroundColor: 'transparent',
      borderBottomColor: '#ff9b4f',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid',
      color: '#000'
    }
  },
  logOutButton: {
    margin: theme.spacing(1)
  },
  navbar: {
    backgroundColor: '#cc8403'
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px'
  },
  userIcon: {
    marginRight: '5px'
  }
}));

export const Navigation = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Grid item sm={6}>
          <Typography variant="h6" color="inherit">
            Think about us!
          </Typography>
        </Grid>
        <Grid item sm={6} container direction="row" justify="flex-end">
          <Button href="/" className={classes.button}>
            Home
          </Button>
          <Button href="/about" className={classes.button}>
            About
          </Button>
          <Button href="/contact" className={classes.button}>
            Contact
          </Button>
          <Typography
            variant="subtitle2"
            color="inherit"
            className={classes.user}
          >
          </Typography>
          <Button
            className={classes.logOutButton}
            variant="contained"
            color="secondary"
          >
            Log out
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};