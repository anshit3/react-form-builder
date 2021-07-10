import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    '& > *': {
      height: 500,
      marginTop: 10,
      marginRight: 20,
      marginLeft: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});

const ThankYou = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant="h3">Thank you for visiting</Typography>
      </Paper>
    </div>
  );
};

export default ThankYou;
