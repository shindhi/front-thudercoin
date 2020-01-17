import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';

import AreaGraph from './components/AreaGraph';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(1),
  },
}));

export default function Quotation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <AreaGraph />
      </div>
    </div>
  );
}
