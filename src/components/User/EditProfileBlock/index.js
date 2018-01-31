import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
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
            <FlatButton
              className={styles.buttonChangeImage}
              label="CHANGE IMAGE"
              style={styles.buttonEditProfile}
              icon={<Icon name="add-a-foto" />}
              onClick={this.handleEditProfileButtonClick}
            />
          </Paper>
          <Paper className={styles.infoBlock} zDepth={1}>
            <div>
              <div className={styles.textfields}>
                <TextField
                  ref={this.textFieldsRef}
                  className={styles.textField}
                  floatingLabelText="USER NAME"
                  isRequired
                  onBlur={this.textFieldEmailBlur}
                />
                <TextField
                  ref={this.textFieldsRef}
                  className={styles.textFieldEmail}
                  floatingLabelText="EMAIL"
                  isRequired
                  isEmail
                  onBlur={this.textFieldPasswordBlur}
                />
              </div>
            </div>
            EDIT PROFILE
          </Paper>
        </div>
      </div>
    );
  }
}
