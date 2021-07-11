import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { TextField, Button, Icon, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import config from '../DefaultConfig/config';
import './PageConfig.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PageConfig = () => {
  localStorage.clear();
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [noOfPages, setNoOfPages] = useState('');
  const [open, setOpen] = useState(false);

  let pageConfig = config;
  let disabled = height && width && noOfPages ? true : false;
  let history = useHistory();

  const submitHandler = () => {
    if (height >= 200 && width >= 200 && 6 > noOfPages >= 1) {
      disabled = true;

      pageConfig.width = width;
      pageConfig.height = height;
      pageConfig.noOfPages = noOfPages;

      noOfPages > 1
        ? (pageConfig.multiplePages = true)
        : (pageConfig.multiplePages = false);

      let page = [...pageConfig.pageCollection];
      pageConfig.pageCollection = [];

      for (let i = 0; i < noOfPages; i++) {
        let tempPage = { ...page[0] };
        tempPage.pageNumber = i;
        pageConfig.pageCollection.push(tempPage);
      }

      localStorage.setItem('pageConfig', JSON.stringify(pageConfig));
      history.push('/configure');
    } else {
      console.log(height, width, noOfPages);
      disabled = false;
      setOpen(true);
      setHeight('');
      setWidth('');
      setNoOfPages('');
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="main-container">
      <div className="main-header">
        <Typography variant="h5">Tell us something about your page</Typography>
      </div>
      <div className="config-container">
        <TextField
          id="page-height"
          required
          type="number"
          label="Height"
          placeholder="Height"
          variant="outlined"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          helperText="Min value is 200px"
          value={height}
        />
        <TextField
          id="page-width"
          required
          type="number"
          label="Width"
          placeholder="Width"
          variant="outlined"
          onChange={(e) => {
            setWidth(e.target.value);
          }}
          helperText="Min value is 200px"
          value={width}
        />
        <TextField
          id="no-of-pages"
          required
          type="number"
          label="Number of Pages"
          placeholder="Number of Pages"
          variant="outlined"
          onChange={(e) => {
            setNoOfPages(e.target.value);
          }}
          helperText="Min value is 1 and Max 5"
          value={noOfPages}
        />
        <Button
          disabled={!disabled}
          onClick={submitHandler}
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
        >
          Proceed
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please enter within range
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PageConfig;
