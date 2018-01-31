import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.scss';

export default class Button extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string
  };

  render() {
    const { className, color, size, type } = this.props;

    return (
      <FlatButton
        {...this.props}
        className={classNames(className, styles.button, {
          [styles.orange]: color === 'orange',
          [styles.grey]: color === 'orange',
          [styles.flat]: type === 'flat'
        })}
      />
    );
  }
}
