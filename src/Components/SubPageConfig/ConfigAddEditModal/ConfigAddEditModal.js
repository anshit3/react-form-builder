import React, { useState } from 'react';
import { func, string, instanceOf } from 'prop-types';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  fieldsCtn: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
}));

const types = [
  {
    value: 'email',
    label: 'E-mail',
  },
  {
    value: 'tel',
    label: 'Contact Number',
  },
];

const ConfigAddEditModal = (props) => {
  const classes = useStyles();
  const { handleClose, operation, currentconfig, handleelementconfig } = props;

  const [label, setLabel] = useState(
    currentconfig.label ? currentconfig.label : ''
  );
  const [placeholderText, setPlaceholderText] = useState(
    currentconfig.placeholderText ? currentconfig.placeholderText : ''
  );
  const [type, setType] = useState(
    currentconfig.type ? currentconfig.type : 'email'
  );

  console.log(currentconfig, operation);

  const handleElementConfigSave = () => {
    if (operation === 'edit') {
      currentconfig.label = label;
      currentconfig.placeholderText = placeholderText;
      handleelementconfig(currentconfig, operation);
      handleClose();
    } else {
      console.log(currentconfig);
      currentconfig.label = label;
      currentconfig.placeholderText = placeholderText;
      currentconfig.id = label + Math.random();
      currentconfig.type = type;
      console.log(currentconfig);
      handleelementconfig(currentconfig, operation);
      handleClose();
    }
  };
  return (
    <div>
      {operation === 'edit' ? (
        <DialogTitle id="form-dialog-title">
          Edit your {currentconfig.label} element
        </DialogTitle>
      ) : (
        <DialogTitle id="form-dialog-title">Add your element </DialogTitle>
      )}
      <DialogContent>
        {operation === 'edit' ? (
          <div className={classes.fieldsCtn}>
            <TextField
              margin="dense"
              id={currentconfig.label + Math.random()}
              label="Edit your label"
              placeholder="Enter label"
              defaultValue={currentconfig.label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id={currentconfig.placeholderText + Math.random()}
              label="Edit your placeholder text"
              placeholder="Enter placeholder text"
              defaultValue={currentconfig.placeholderText}
              onChange={(e) => {
                setPlaceholderText(e.target.value);
              }}
            />
          </div>
        ) : (
          <div className={classes.fieldsCtn}>
            <TextField
              id="select-type"
              select
              label="Select Type"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            >
              {types.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="dense"
              id={'new_element' + Math.random()}
              label="Label"
              placeholder="Enter label"
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
            <TextField
              margin="dense"
              id={'new_element' + Math.random()}
              label="Placeholder text"
              placeholder="Enter placeholder text"
              onChange={(e) => {
                setPlaceholderText(e.target.value);
              }}
            />
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleElementConfigSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </div>
  );
};

export default ConfigAddEditModal;

ConfigAddEditModal.propTypes = {
  handleClose: func.isRequired,
  operation: string,
  currentconfig: instanceOf(Object),
};

ConfigAddEditModal.dafaultProps = {
  handleClose: () => {
    console.log('Modal cant be closed due to some technical issue');
  },
  operation: 'cant_edit',
  currentconfig: null,
};
