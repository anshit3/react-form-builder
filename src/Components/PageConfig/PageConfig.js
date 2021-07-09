import React from 'react';
import './PageConfig.css';
import { TextField, Button, Icon, Typography } from '@material-ui/core';

const PageConfig = () => {
  return (
    <div className="main-container">
      <h1 className="main-header">
        <Typography variant="h4">Tell us something about your page</Typography>
      </h1>
      <div className="config-container">
        <TextField
          id="page-height"
          type="number"
          label="Height"
          variant="outlined"
        />
        <TextField
          id="page-widht"
          type="number"
          label="Width"
          variant="outlined"
        />
        <TextField
          id="no-of-pages"
          type="number"
          label="Number of Pages"
          variant="outlined"
        />
        <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default PageConfig;
