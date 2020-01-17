import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

import { List, ListItem, Button, colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  item: {
    paddingTop: 0,
    paddingBottom: 0,
    width: '100%',
  },
  button: {
    color: theme.palette.white,
    padding: '20px 8px',
    justifyContent: 'center',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
  },
  active: {
    background: '#fe7600',
    color: theme.palette.white,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main,
    },
  },
  contentButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

export default function SidebarNav(props) {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map(page => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}
          >
            <div className={classes.contentButton}>
              {page.icon}
              {page.title}
            </div>
          </Button>
        </ListItem>
      ))}
    </List>
  );
}
