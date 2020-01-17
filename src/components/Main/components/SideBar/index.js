import React from 'react';
import { AiOutlineLineChart } from 'react-icons/ai';
import { MdHistory, MdHelpOutline } from 'react-icons/md';

import { Divider, Drawer } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

import Profile from './components/Profile';
import SidebarNav from './components/SidebarNav';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
  root: {
    backgroundColor: theme.palette.orange,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2, 0),
  },
  divider: {
    margin: theme.spacing(2, 2),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
}));

export default function SideBar(props) {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Histórico',
      href: '/historic',
      icon: <MdHistory size={50} color="#fff" />,
    },
    {
      title: 'Como funciona',
      href: '/about/how-to-use',
      icon: <MdHelpOutline size={50} color="#fff" />,
    },
    {
      title: 'Cotação',
      href: '/quotation',
      icon: <AiOutlineLineChart size={50} color="#fff" />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
}
