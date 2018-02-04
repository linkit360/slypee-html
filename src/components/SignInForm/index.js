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
    signInStatus: PropTypes.func,
    signIn: PropTypes.func.isRequired
  };

  handleSignInClick = () => {
    this.submit();
  };

  submit() {
    const data = validate(this.textFields);
    if (data) {
      this.props.signIn(data);
    }
  }

  handleKeyDown = e => {
    if (e.key === 'Enter') {
      this.submit();
    }
  };

  textFields = [];

  textFieldsRef = ref => this.textFields.push(ref);

  render() {
    const { signInStatus } = this.props;
    return (
      <div className={styles.form}>
        <div className={styles.logo} />
        <div className={styles.content}>
          <TextField
            ref={this.textFieldsRef}
            className={styles.textFieldEmail}
            name="email"
            floatingLabelText="EMAIL"
            isRequired
          />
          <TextField
            ref={this.textFieldsRef}
            className={styles.textFieldPassword}
            name="password"
            type="password"
            floatingLabelText="PASSWORD"
            isRequired
            errorText={
              signInStatus === 'ERROR' ? 'email or password is incorrect' : null
            }
            onKeyDown={this.handleKeyDown}
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
