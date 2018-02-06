/* @flow */

import React from 'react';
import type { Element } from 'react';
import Paper from 'material-ui/Paper';

import styles from './styles.scss';

const ConnectionProblemPage = (): Element<'div'> => (
  <div className={styles.center}>
    <Paper className={styles.papper}>
      <div className={styles.img} />
      <div className={styles.text}>SERVER IS NOT AVAILABLE</div>
      <div className={styles.text2}>Please try again later</div>
    </Paper>
  </div>
);

export default ConnectionProblemPage;
