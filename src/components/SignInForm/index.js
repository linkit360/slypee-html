import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import TextField from '_components/interface/TextField';
import Button from '_components/interface/Button';
import Icon from '_components/interface/Icon';
import styles from './styles.scss';

export default class SignInForm extends React.PureComponent {
  static propTypes = {
    signin: PropTypes.func.isRequired
  };

  email = '';
  password = '';

  handleEmailChange = value => {
    this.email = value;
  };

  handlePasswordChange = value => {
    this.password = value;
  };

  handleSignInClick = () => {
    this.props.signin({ email: this.email, password: this.password });
  };

  render() {
    return (
      <div className={styles.form}>
        <div className={styles.logo} />
        <div className={styles.content}>
          <TextField
            className={styles.textFieldEmail}
            floatingLabelText="EMAIL"
            onChange={this.handleEmailChange}
          />
          <TextField
            className={styles.textFieldPassword}
            type="password"
            floatingLabelText="PASSWORD"
            onChange={this.handleEmailChange}
          />
          <Link className={styles.forgotPasswordLink} to="/forgotPassword">
            Forgot password?
          </Link>
          <FlatButton
            className={styles.buttonCreateAccount}
            href="/signup"
            label="CREATE ACCOUNT"
            icon={<Icon className={styles.buttonMenuIcon} name="person" />}
          />
          <Button
            className={styles.buttonSignIn}
            label="SIGN IN"
            type="orange"
            size="big"
            onClick={this.handleSignInClick}
          />
        </div>
      </div>
    );
  }
}
