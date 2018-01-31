import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Button from '_components/Interface/Button';
import Icon from '_components/Interface/Icon';
import Avatar from '_components/Interface/Avatar';
import TextField from '_components/Interface/TextField';
import styles from './styles.scss';

export default class EditProfileBlock extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onExit: PropTypes.func.isRequired
  };

  state = {
    // isChangePasswordMode: false
  };

  render() {
    const { user, onEdit, onExit } = this.props;
    const { avatar, name, mail } = user;

    return (
      <div>
        <Paper className={styles.header} zDepth={1}>
          EDIT PROFILE
        </Paper>
        <div className={styles.content}>
          <Paper className={styles.avatarBlock} zDepth={1}>
            <Avatar className={styles.avatar} img={avatar} />
            <Button
              label="CHANGE IMAGE"
              className={styles.buttonChangeImage}
              icon={<Icon name="add-a-foto" />}
              type="flat"
              color="grey"
              onClick={this.handleEditProfileButtonClick}
            />
          </Paper>
          <Paper className={styles.infoBlock} zDepth={1}>
            <div className={styles.topBlock}>
              <div className={styles.textfields}>
                <TextField
                  ref={this.textFieldsRef}
                  className={styles.textField}
                  floatingLabelText="USER NAME"
                  isRequired
                />
                <TextField
                  ref={this.textFieldsRef}
                  className={styles.textFieldEmail}
                  floatingLabelText="EMAIL"
                  isRequired
                  isEmail
                />
              </div>
              <Button
                className={styles.buttonChangePassword}
                label="CHANGE PASSWORD"
                icon={<Icon className={styles.editIcon} name="edit" />}
                type="flat"
                color="orange"
                size="small"
                onClick={this.handleButtonChangePasswordClick}
              />
            </div>
            <div className={styles.footer}>
              <Button
                label="CANCEL"
                className={styles.buttonChangeImage}
                type="flat"
                onClick={this.handleEditProfileButtonClick}
              />
              <Button
                label="SAVE CHANGES"
                className={styles.buttonChangeImage}
                color="orange"
                onClick={this.handleEditProfileButtonClick}
              />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}
