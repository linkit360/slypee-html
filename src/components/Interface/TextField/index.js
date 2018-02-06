import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextFieldUI from 'material-ui/TextField';
import styles from './styles.scss';

export default class TextField extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isRequired: PropTypes.bool,
    isEmail: PropTypes.bool,
    minLength: PropTypes.number,
    match: PropTypes.string,
    defaultValue: PropTypes.string,
    errorText: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onBlur: () => {},
    onChange: () => {}
  };

  value = this.props.defaultValue || '';
  error = '';

  state = {
    error: ''
  };

  getError() {
    const { isRequired, isEmail, minLength, match } = this.props;
    if (isRequired && this.value === '') {
      return "You can't leave this empty.";
    }
    if (isEmail) {
      const reValidEmail = /^([\w.-]+)@([\w-]+)((\.(\w){2,3})+)$/;

      if (!reValidEmail.test(this.value)) {
        return 'Email entered incorrectly';
      }
    }
    if (minLength && this.value.length < minLength) {
      return 'Short passwords are easy to guess. Try one with at least 8 characters.';
    }
    if (match && this.value !== match) {
      return "These passwords don't match. Try again?";
    }
    return '';
  }

  validate() {
    const error = this.getError();
    this.setState({ error });
    this.error = error;
  }

  handleBlur = e => {
    const { onBlur } = this.props;
    const error = this.getError();
    this.setState({ error });
    this.error = error;
    onBlur(e, error);
  };

  handleChange = e => {
    const { onChange } = this.props;
    this.value = e.target.value;
    onChange(e);
  };

  render() {
    const { className, errorText } = this.props;
    const { error } = this.state;
    const { isRequired, isEmail, minLength, match, ...props } = this.props;

    return (
      <TextFieldUI
        {...props}
        className={classNames(className, styles.textField)}
        underlineShow={false}
        floatingLabelShrinkStyle={{ color: '#4f4f51' }}
        errorText={errorText || error}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}
