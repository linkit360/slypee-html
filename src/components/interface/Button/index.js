import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.scss';

export default class Button extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;

    return (
      <FlatButton
        {...this.props}
        className={classNames(className, styles.button)}
      />
    );
  }
}
