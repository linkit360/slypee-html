import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextFieldUI from 'material-ui/TextField';
import styles from './styles.scss';

export default class TextField extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isRequired: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onBlur: () => {}
  };

  state = {
    error: ''
  };

  getError(value) {
    const { isRequired } = this.props;
    if (isRequired) {
      if (value === '') {
        return 'This field is required';
      }
    }
    return '';
  }

  handleBlur = e => {
    const { onBlur } = this.props;
    const error = this.getError(e.target.value);
    this.setState({ error });
    onBlur(e, error);
  };

  render() {
    const { className } = this.props;
    const { error } = this.state;
    const { isRequired, ...props } = this.props;

    return (
      <TextFieldUI
        {...props}
        className={classNames(className, styles.textField)}
        underlineShow={false}
        floatingLabelShrinkStyle={{ color: '#4f4f51' }}
        errorText={error}
        onBlur={this.handleBlur}
      />
    );
  }
}
