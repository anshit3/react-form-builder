import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import './Editor.css';

const Editor = () => {
  return (
    <div className="preview-outer-ctn">
      <div className="preview-ctn">
        <div className="fields-ctn">
          <TextField
            id="name"
            label="Name"
            defaultValue="Name"
            InputProps={{
              readOnly: true,
            }}
          />
          <EditIcon />
          <HighlightOffIcon />
        </div>
        <div className="fields-ctn">
          <TextField
            id="email"
            label="E-mail"
            defaultValue="E-mail"
            InputProps={{
              readOnly: true,
            }}
          />
          <EditIcon />
          <HighlightOffIcon />
        </div>
        <div className="fields-ctn">
          <TextField
            id="contact"
            label="Contact Number"
            defaultValue="Contact Number"
            InputProps={{
              readOnly: true,
            }}
          />
          <EditIcon />
          <HighlightOffIcon />
        </div>
      </div>
      <div className="btn-ctn">
        <div className="add-ele-ctn">
          <a>Add Field</a>
          <Icon color="secondary">add_circle</Icon>
        </div>
        <Button
          component={Link}
          to={'/thankyou'}
          variant="contained"
          color="primary"
        >
          Save & Preview
        </Button>
      </div>
    </div>
  );
};

export default Editor;
