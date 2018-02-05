import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Icon from '_components/Interface/Icon';
import Paper from 'material-ui/Paper';
import styles from './styles.scss';

export default class FormWrapper extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
  };

  render() {
    const { className, children } = this.props;

    return (
      <div className={classNames(styles.center, className)}>
        <Paper className={styles.form}>
          <Link className={styles.backButton} to="/">
            <Icon name="arrow-back" />
          </Link>
          {children}
        </Paper>
      </div>
    );
  }
}
