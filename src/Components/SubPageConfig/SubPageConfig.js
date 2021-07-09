import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Typography } from '@material-ui/core';
import './SubPageConfig.css';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    marginTop: 64,
    padding: 0
  },
}));

const SubPageConfig = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
              </ListItem>
            ))}
          </List>
          <Divider />
         <div className="moto-text">
             <p>
                 <Typography>
                    Page Editor
                 </Typography>
             </p>
         </div>
        </div>
      </Drawer>
    </div>
  );
};

export default SubPageConfig;
