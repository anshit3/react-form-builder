import React, { useEffect, useState } from 'react';
import { instanceOf } from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import ConfigAddEditModal from '../ConfigAddEditModal/ConfigAddEditModal';
import Dialog from '@material-ui/core/Dialog';
import elementConfig from '../../DefaultConfig/elementConfig';

import './Editor.css';

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
    <div className="preview-outer-ctn">
      <div className="preview-ctn">
        {pageConfig.pageFields.map((uiEle, index) => (
          <div key={index} className="fields-ctn">
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
                className="delete-icon"
              />
            )}
          </div>
        ))}
      </div>
      <div className="btn-ctn">
        <div onClick={() => handleOpen('add_new')} className="add-ele-ctn">
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
