import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from 'material-ui/TextField';
import styles from './styles.scss';

export default class Button extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const { className } = this.props;

    return (
      <TextField
        {...this.props}
        className={classNames(className, styles.textField)}
        underlineShow={false}
        floatingLabelShrinkStyle={{ color: '#4f4f51' }}
      />
    );
  }
}
