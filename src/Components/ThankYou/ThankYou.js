import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ReactJson from 'react-json-view';

const useStyles = makeStyles({
  root: {
    '& > *': {
      height: 500,
      marginTop: 10,
      marginRight: 20,
      marginLeft: 20,
    },
  },
  thankyou_text: {
    textAlign: 'center',
  },
  json_viewer: {
    height: '330px',
    overflowY: 'scroll',
    margin: '15px 60px',
    border: '#EBEBEB 1px solid',
    padding: '20px',
  },
  exit_button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  btn_ctn: {
    width: '200px',
  },
});

const ThankYou = () => {
  const classes = useStyles();

  const pageConfig = JSON.parse(localStorage.getItem('pageConfig'));

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography className={classes.thankyou_text} variant="h4">
          Thank you for visiting. Please check your page structure.
        </Typography>
        <div className={classes.json_viewer}>
          <ReactJson src={pageConfig} />
        </div>
        <div className={classes.exit_button}>
          <div className={classes.btn_ctn}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={'/configure'}
            >
              Go Back
            </Button>
          </div>
          <div className={classes.btn_ctn}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={'/'}
            >
              Exit
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ThankYou;
