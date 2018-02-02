/* @flow */

import React from 'react';
import type { Element } from 'react';
import Paper from 'material-ui/Paper';

import styles from './styles.scss';

const NotFound = (): Element<'div'> => (
  <Paper className={styles.papper}>
    <div className={styles.img} />
    <div className={styles.text}>PAGE NOT FOUND</div>
  </Paper>
);

export default NotFound;
