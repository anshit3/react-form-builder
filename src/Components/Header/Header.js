import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          component={Link}
          to={'/'}
          variant="h6"
        >
          Hellobar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
