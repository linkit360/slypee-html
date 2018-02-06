/* @flow */

import React from 'react';
import type { Element } from 'react';
import Paper from 'material-ui/Paper';

import styles from './styles.scss';

const NotFoundPage = (): Element<'div'> => (
  <div className={styles.center}>
    <Paper className={styles.papper}>
      <div className={styles.img} />
      <div className={styles.text}>PAGE NOT FOUND</div>
    </Paper>
  </div>
);

export default NotFoundPage;
