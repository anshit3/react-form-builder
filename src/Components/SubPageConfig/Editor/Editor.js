import React, { useEffect, useState } from 'react';
import { instanceOf } from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import ConfigAddEditModal from '../ConfigAddEditModal/ConfigAddEditModal';
import Dialog from '@material-ui/core/Dialog';
import elementConfig from '../../DefaultConfig/elementConfig';
import { makeStyles } from '@material-ui/core/styles';

import './Editor.css';

const useStyles = makeStyles(() => ({
  preview_outer_ctn: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  preview_ctn: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    height: '100%',
    width: '50%',
    alignItems: 'center',
    overflow: 'auto',
    marginBottom: '20px',
    marginTop: '20px',
    borderRadius: '5px',
    border: '#e2e2e2 1px solid',
    paddingTop: '10px',
  },
  btn_ctn: {
    margin: '10px 0px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  add_ele_ctn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10px 10px',
    cursor: 'pointer',
  },
  fields_ctn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '280px',
  },
  delete_icon: {
    fill: 'red !important',
  },
}));

const findAndInsertPage = (pageConfig) => {
  let localConfig = JSON.parse(localStorage.getItem('pageConfig'));

  localConfig.pageCollection.forEach((page, index) => {
    if (page.pageNumber === pageConfig.pageNumber) {
      localConfig.pageCollection[index] = pageConfig;
    }
  });

  localStorage.setItem('pageConfig', JSON.stringify(localConfig));
};

const Editor = (props) => {
  const { selectedPage } = props;

  const classes = useStyles();
  const [pageConfig, setPageConfig] = useState(selectedPage);
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState('cant_edit');
  const [currentConfig, setCurrentConfig] = useState();

  useEffect(() => {
    setOriginalPageConfig();
  }, [selectedPage]);

  useEffect(() => {
    setPageConfig(pageConfig);
  }, [pageConfig]);

  const setOriginalPageConfig = () => {
    setPageConfig(selectedPage);
  };

  const handleOpen = (type, index) => {
    if (type === 'add_new') {
      setOperation('add');
      setCurrentConfig(elementConfig);
    } else {
      setOperation('edit');
      setCurrentConfig(pageConfig.pageFields[index]);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleElementConfig = (config, operation) => {
    let tempConfig = JSON.parse(JSON.stringify(pageConfig));

    if (operation === 'edit') {
      pageConfig.pageFields.forEach((field, index) => {
        if (field.id === config.id) {
          tempConfig.pageFields[index].label = config.label;
          tempConfig.pageFields[index].placeholderText = config.placeholderText;
        }
      });
      setPageConfig(tempConfig);
      findAndInsertPage(tempConfig);
      console.log(pageConfig);
    } else {
      tempConfig.pageFields = [...tempConfig.pageFields, config];
      setPageConfig(tempConfig);
      findAndInsertPage(tempConfig);
      console.log(pageConfig);
    }
  };

  const handleDeleteElement = (index) => {
    let tempConfig = JSON.parse(JSON.stringify(pageConfig));
    tempConfig.pageFields.splice(index, 1);
    setPageConfig(tempConfig);
    findAndInsertPage(tempConfig);
  };

  return (
    <div className={classes.preview_outer_ctn}>
      <div className={classes.preview_ctn}>
        {pageConfig.pageFields.map((uiEle, index) => (
          <div key={index} className={classes.fields_ctn}>
            <TextField
              id={uiEle.id}
              label={uiEle.label}
              placeholder={uiEle.placeholderText}
              type={uiEle.type}
              required={uiEle.isRequired}
            />
            {
              <EditIcon
                onClick={() => {
                  handleOpen('edit_current', index);
                }}
              />
            }
            {!uiEle.default && (
              <HighlightOffIcon
                onClick={() => {
                  handleDeleteElement(index);
                }}
                className={classes.delete_icon}
              />
            )}
          </div>
        ))}
      </div>
      <div className={classes.btn_ctn}>
        <div
          onClick={() => handleOpen('add_new')}
          className={classes.add_ele_ctn}
        >
          <a>Add Field</a>
          <Icon color="secondary">add_circle</Icon>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <ConfigAddEditModal
            handleClose={handleClose}
            operation={operation}
            currentconfig={currentConfig}
            handleelementconfig={handleElementConfig}
          />
        </Dialog>
      </div>
    </div>
  );
};

export default Editor;

Editor.propTypes = {
  selectedPage: instanceOf(Object),
};

Editor.defaultProps = {
  selectedPage: null,
};
