import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '_components/Interface/TextField';
import Dialog from 'material-ui/Dialog';
import Button from '_components/Interface/Button';
import { validate } from '_utils/common';
import styles from './styles.scss';

export default class RecoveryPasswordForm extends React.PureComponent {
  static propTypes = {
    token: PropTypes.string.isRequired,
    recoveryPasswordByToken: PropTypes.func.isRequired
  };

  state = {
    password: '',
    openModal: false
  };

  handleTextFieldPasswordBlur = e => {
    this.setState({ password: e.target.value });
  };

  handleConfirmClick = () => {
    this.submit();
  };

  submit() {
    const { token, recoveryPasswordByToken } = this.props;
    const data = validate(this.textFields);
    if (data) {
      recoveryPasswordByToken({ ...data, recoveryToken: token });
      this.setState({ openModal: true });
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
    const { password, openModal } = this.state;
    return (
      <div className={styles.form}>
        <div className={styles.logo} />
        <div className={styles.content}>
          <div className={styles.text}>PASSWORD RECOVERY</div>
          <TextField
            ref={this.textFieldsRef}
            className={styles.textField}
            name="password"
            type="password"
            floatingLabelText="NEW PASSWORD"
            isRequired
            minLength={8}
            onBlur={this.handleTextFieldPasswordBlur}
          />
          <TextField
            ref={this.textFieldsRef}
            className={styles.textField}
            name="confirmPassword"
            type="password"
            floatingLabelText="CONFIRM PASSWORD"
            isRequired
            match={password}
            onKeyDown={this.handleKeyDown}
          />
          <Button
            className={styles.buttonSignIn}
            label="CONFIRM"
            color="orange"
            size="big"
            onClick={this.handleConfirmClick}
          />
        </div>
        <Dialog
          title="Success"
          actions={
            <Link to="/">
              <Button label="Go back to the main page" color="orange" />
            </Link>
          }
          modal
          open={openModal}
        >
          Your password has been changed
        </Dialog>
      </div>
    );
  }
}
