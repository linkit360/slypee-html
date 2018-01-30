import React from 'react';
import PropTypes from 'prop-types';
import TextField from '_components/interface/TextField';
import Button from '_components/interface/Button';
import { validate } from '_utils/common';
import styles from './styles.scss';

export default class PasswordForgottenForm extends React.PureComponent {
  static propTypes = {
    forgotPassword: PropTypes.func.isRequired
  };

  handleButtonClick = () => {
    const data = validate(this.textFields);
    if (data) {
      this.props.forgotPassword(data);
    }
  };

  textFields = [];

  textFieldsRef = ref => this.textFields.push(ref);

  render() {
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
          />
          <Button
            className={styles.button}
            label="CONFIRM"
            type="orange"
            size="big"
            onClick={this.handleButtonClick}
          />
        </div>
      </div>
    );
  }
}
