/* @flow */

import React from 'react';
import Paper from 'material-ui/Paper';

import styles from './styles.scss';

const CompatibleProblemPage = () => (
  <div className={styles.center}>
    <Paper className={styles.papper}>
      <div className={styles.img} />
      <div className={styles.text}>
        SLYPPY is not compatible with your browser
      </div>
      <div className={styles.text2}>
        Please use the latest version of one of the folowing browsers
      </div>
      <div className={styles.line}>
        <div className={styles.logoChrome} />
        <div className={styles.logoFirefox} />
        <div className={styles.logoExplorer} />
        <div className={styles.logoSafari} />
      </div>
      <div className={styles.text3}>Thank you</div>
    </Paper>
  </div>
);

export default CompatibleProblemPage;
