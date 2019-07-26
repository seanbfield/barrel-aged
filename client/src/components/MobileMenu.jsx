import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        menu
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/user">Dashboard</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/landing">Whiskeys</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="#">News</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/contact">Contact</Link></MenuItem>
      </Menu>
    </div>
  );
}