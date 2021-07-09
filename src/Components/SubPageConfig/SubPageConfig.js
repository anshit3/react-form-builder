import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Editor from './Editor/Editor'
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
            {['Page-1', 'Page-2', 'Page-3'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
                <EditIcon />
              </ListItem>
            ))}
          </List>
          <Divider />
          <div className="moto-text">
            <Button variant="contained" color="primary">
              Preview
            </Button>
          </div>
        </div>
      </Drawer>
      <div className={classes.root}>
        <Paper elevation={3}>
          <Editor></Editor>
        </Paper>
      </div>
    </div>
  );
};

export default SubPageConfig;
