import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.scss';

export default class Flat extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    const { className, color, type, size } = this.props;

    return (
      <FlatButton
        {...this.props}
        className={classNames(className, styles.button, {
          [styles.orange]: color === 'orange',
          [styles.grey]: color === 'grey',
          [styles.flat]: type === 'flat',
          [styles.small]: size === 'small'
        })}
      />
    );
  }
}
