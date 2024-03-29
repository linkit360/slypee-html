import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import TextField from '_components/Interface/TextField';
import Button from '_components/Interface/Button';
import { validate } from '_utils/common';
import styles from './styles.scss';

export default class PasswordForgottenForm extends React.PureComponent {
  static propTypes = {
    recoveryPasswordByEmail: PropTypes.func.isRequired
  };

  state = {
    openModal: false
  };

  handleButtonClick = () => {
    this.submit();
  };

  submit() {
    const data = validate(this.textFields);
    if (data) {
      this.props.recoveryPasswordByEmail(data);
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
    const { openModal } = this.state;
    return (
      <div className={styles.form}>
        <div className={styles.logo} />
        <div className={styles.content}>
          <div className={styles.text}>PASSWORD FORGOTTEN</div>
          <TextField
            ref={this.textFieldsRef}
            className={styles.textField}
            name="email"
            floatingLabelText="EMAIL"
            isRequired
            onKeyDown={this.handleKeyDown}
          />
          <Button
            className={styles.button}
            label="CONFIRM"
            color="orange"
            size="big"
            onClick={this.handleButtonClick}
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
          Check your email
        </Dialog>
      </div>
    );
  }
}
