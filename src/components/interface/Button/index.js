import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.scss';

export default class Button extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string
  };

  render() {
    const { className, type, size } = this.props;

    return (
      <FlatButton
        {...this.props}
        className={classNames(className, styles.button, {
          [styles.orange]: type === 'orange',
          [styles.big]: size === 'big'
        })}
      />
    );
  }
}
