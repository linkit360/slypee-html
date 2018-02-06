/* @flow */

import React from 'react';
import type { Element } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.scss';

const PreloaderPage = (): Element<'div'> => (
  <CircularProgress
    color="#8d9396"
    className={styles.preloader}
    thickness={5}
  />
);

export default PreloaderPage;
