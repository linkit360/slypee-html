import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import TextField from '_components/Interface/TextField';
import Button from '_components/Interface/Button';
import Icon from '_components/Interface/Icon';
import { validate } from '_utils/common';
import styles from './styles.scss';

export default class SignInForm extends React.PureComponent {
  static propTypes = {
    signIn: PropTypes.func.isRequired
  };

  handleSignInClick = () => {
    if (this.emailError + this.passwordError === '') {
      this.props.signIn({ email: this.email, password: this.password });
    }
  };

  handleSignInClick = () => {
    const data = validate(this.textFields);
    if (data) {
      this.props.signIn(data);
    }
  };

  textFields = [];

  textFieldsRef = ref => this.textFields.push(ref);

  render() {
    return (
      <div className={styles.form}>
        <div className={styles.logo} />
        <div className={styles.content}>
          <TextField
            ref={this.textFieldsRef}
            className={styles.textFieldEmail}
            floatingLabelText="EMAIL"
            isRequired
          />
          <TextField
            ref={this.textFieldsRef}
            className={styles.textFieldPassword}
            type="password"
            floatingLabelText="PASSWORD"
            isRequired
          />
          <Link className={styles.forgotPasswordLink} to="/forgotPassword">
            Forgot password?
          </Link>
          <FlatButton
            className={styles.buttonCreateAccount}
            href="/signUp"
            label="CREATE ACCOUNT"
            icon={<Icon className={styles.buttonMenuIcon} name="person" />}
          />
          <Button
            className={styles.buttonSignIn}
            label="SIGN IN"
            color="orange"
            size="big"
            onClick={this.handleSignInClick}
          />
        </div>
      </div>
    );
  }
}
