import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from '_components/Interface/TextField';
import Button from '_components/Interface/Button';
import { validate } from '_utils/common';
import styles from './styles.scss';

export default class SignUpForm extends React.PureComponent {
  static propTypes = {
    signUp: PropTypes.func.isRequired
  };

  state = {
    password: ''
  };

  handleTextFieldEmailBlur = e => {
    this.setState({ password: e.target.value });
  };

  handleSignInClick = () => {
    const data = validate(this.textFields);
    if (data) {
      this.props.signUp(data);
    }
  };

  textFields = [];

  textFieldsRef = ref => this.textFields.push(ref);

  render() {
    const { password } = this.state;
    return (
      <div className={styles.form}>
        <div className={styles.logo} />
        <div className={styles.content}>
          <div className={styles.text}>ACCOUNT CREATION</div>
          <TextField
            ref={this.textFieldsRef}
            className={classNames(styles.textField, styles.textFieldUserName)}
            name="userName"
            floatingLabelText="USER NAME"
            isRequired
          />
          <TextField
            ref={this.textFieldsRef}
            className={styles.textField}
            name="email"
            floatingLabelText="EMAIL"
            isRequired
            isEmail
          />
          <TextField
            ref={this.textFieldsRef}
            className={styles.textField}
            name="password"
            type="password"
            floatingLabelText="PASSWORD"
            isRequired
            minLength={8}
            onBlur={this.handleTextFieldEmailBlur}
          />
          <TextField
            ref={this.textFieldsRef}
            className={styles.textField}
            name="confirmPassword"
            type="password"
            floatingLabelText="CONFIRM PASSWORD"
            isRequired
            match={password}
          />
          <Button
            className={styles.buttonSignIn}
            label="SIGN UP"
            color="orange"
            size="big"
            onClick={this.handleSignInClick}
          />
        </div>
      </div>
    );
  }
}
