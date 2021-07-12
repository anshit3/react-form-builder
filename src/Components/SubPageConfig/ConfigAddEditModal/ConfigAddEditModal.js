import React, { useState } from 'react';
import { func, string, instanceOf } from 'prop-types';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fieldsCtn: {
    display: 'flex',
    flexDirection: 'column',
    margin: 20,
  },
}));

const ConfigAddEditModal = (props) => {
  const classes = useStyles();
  const { handleClose, operation, currentconfig, handleelementconfig } = props;

  const [label, setLabel] = useState(currentconfig.label);
  const [placeholderText, setPlaceholderText] = useState(
    currentconfig.placeholderText
  );

  console.log(currentconfig, operation);

  const handleElementConfigSave = () => {
    currentconfig.label = label;
    currentconfig.placeholderText = placeholderText;
    handleelementconfig(currentconfig);
    handleClose();
  };
  return (
    <div>
      {operation === 'edit' ? (
        <DialogTitle id="form-dialog-title">
          Edit your {currentconfig.label} element
        </DialogTitle>
      ) : (
        <DialogTitle id="form-dialog-title">Add your element )</DialogTitle>
      )}
      <DialogContent>
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
