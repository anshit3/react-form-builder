import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Paper from '@material-ui/core/Paper';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Editor from './Editor/Editor';
import './SubPageConfig.css';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      height: 500,
      marginTop: 10,
      marginRight: 20,
      marginLeft: 220,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
    padding: 0,
  },
}));

const SubPageConfig = () => {
  const classes = useStyles();

  const [selectedPage, setSelectedPage] = useState();

  let pageConfigCollection = JSON.parse(localStorage.getItem('pageConfig'));

  console.log(pageConfigCollection);

  const passConfigToEditorOnMenuSelect = (page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <List>
            {pageConfigCollection.pageCollection.map((page, index) => (
              <ListItem
                button
                key={page.pageNumber}
                onClick={() => {
                  passConfigToEditorOnMenuSelect(page);
                }}
              >
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary={`Page - ${page.pageNumber + 1}`} />
                <ArrowRightAltIcon />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <div className={classes.root}>
        <Paper elevation={3}>
          {selectedPage && <Editor selectedPage={selectedPage}></Editor>}
        </Paper>
      </div>
    </div>
  );
};

export default SubPageConfig;
