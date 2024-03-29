import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <>
      <Title>Number of activists</Title>
      <Typography component="p" variant="h4">
        3,024
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        till 29 October, 2019
      </Typography>
      <div>
        <Link color="primary" href="">
          View balance
        </Link>
      </div>
    </>
  );
}
