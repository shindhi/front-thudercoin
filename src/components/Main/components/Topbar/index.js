import React, { useState } from 'react';

import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import { RouterLink } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
  },
  regular: {
    minHeight: '30px',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
}));

export default function Topbar({ className, onSidebarOpen, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar className={classes.regular}>
        <RouterLink to="/">Dashboard</RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge badgeContent="4" color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
