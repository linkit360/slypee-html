import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import Button from '_components/Interface/Button';
import Icon from '_components/Interface/Icon';
import AvatarEditor from 'react-avatar-editor';
import TextField from '_components/Interface/TextField';
import Avatar from '_components/Interface/Avatar';
import { validate } from '_utils/common';
import environmentHOC from '_utils/environmentHOC';
import styles from './styles.scss';

class EditProfileBlock extends React.PureComponent {
  static propTypes = {
    environment: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onExit: PropTypes.func.isRequired
  };

  state = {
    isChangePasswordMode: false
  };

  componentWillReceiveProps(nextProps) {
    const { updateUserStatus } = nextProps.user;
    if (updateUserStatus === 'SUCCESS') {
      this.props.onExit();
    }
  }

  handleButtonChangePasswordClick = () => {
    this.setState({ isChangePasswordMode: true });
  };

  handleCancelClick = () => {
    this.props.onExit();
  };

  handleTextFieldPasswordBlur = e => {
    this.setState({ password: e.target.value });
  };

  handleSaveClick = () => {
    const { image } = this.state;

    const data = validate(this.textFields);
    if (image) {
      data.avatar = this.editor.getImage().toDataURL();
    }
    if (data) {
      this.props.onEdit(data);
    }
  };

  handleChangeAvatarClick = e => {
    this.setState({ image: e.target.files[0] });
  };

  getAvatarBlock = () => {
    const { environment: { width }, user: { avatar } } = this.props;
    const { image } = this.state;

    if (!image && !avatar) {
      return <Avatar className={styles.avatar} />;
    }

    const size = width > 1600 ? 186 : 128;

    return (
      <AvatarEditor
        ref={this.editorRef}
        image={image || avatar}
        width={size}
        height={size}
        color={[255, 255, 255, 0.6]}
        rotate={0}
        border={0}
      />
    );
  };

  textFields = [];

  textFieldsRef = ref => this.textFields.push(ref);
  editorRef = editor => (this.editor = editor);

  getError(nameField) {
    const { updateUserError } = this.props.user;
    return updateUserError[nameField] && updateUserError[nameField][0];
  }

  render() {
    const { user } = this.props;
    const { name, email, avatar, updateUserError } = user;
    const { isChangePasswordMode, password, image } = this.state;
    const imageError = updateUserError.image;

    return (
      <div>
        <Paper className={styles.header} zDepth={1}>
          EDIT PROFILE
        </Paper>
        <div className={styles.content}>
          <Paper className={styles.avatarBlock} zDepth={1}>
            <div className={styles.avatarWrapper}>{this.getAvatarBlock()}</div>
            <div className={styles.buttonChangeImageBlock}>
              <Button
                containerElement="label"
                label={avatar || image ? 'CHANGE IMAGE' : 'ADD IMAGE'}
                className={styles.buttonChangeImage}
                icon={<Icon name="add-a-foto" />}
                type="flat"
                color="grey"
              >
                <input
                  onChange={this.handleChangeAvatarClick}
                  style={{ display: 'none' }}
                  type="file"
                />
              </Button>
              {imageError && (
                <div className={styles.imageError}>{imageError}</div>
              )}
            </div>
          </Paper>
          <Paper className={styles.infoBlock} zDepth={1}>
            <div className={styles.topBlock}>
              <div className={styles.textfields}>
                <TextField
                  ref={this.textFieldsRef}
                  className={styles.textField}
                  name="name"
                  defaultValue={name}
                  floatingLabelText="USER NAME"
                  isRequired
                  errorText={this.getError('name')}
                />
                <TextField
                  ref={this.textFieldsRef}
                  className={classNames(
                    styles.textField,
                    styles.textFieldEmail
                  )}
                  name="email"
                  defaultValue={email}
                  floatingLabelText="EMAIL"
                  isRequired
                  isEmail
                  errorText={this.getError('email')}
                />
              </div>
              {!isChangePasswordMode && (
                <Button
                  className={styles.buttonChangePassword}
                  label="CHANGE PASSWORD"
                  icon={<Icon className={styles.editIcon} name="edit" />}
                  type="flat"
                  color="orange"
                  size="small"
                  onClick={this.handleButtonChangePasswordClick}
                />
              )}
            </div>
            {isChangePasswordMode && (
              <div className={styles.passwordBlock}>
                <TextField
                  ref={this.textFieldsRef}
                  className={styles.textField}
                  name="oldPassword"
                  floatingLabelText="OLD PASSWORD"
                  isRequired
                  minLength={8}
                  type="password"
                  errorText={this.getError('old_password')}
                />
                <TextField
                  ref={this.textFieldsRef}
                  className={classNames(
                    styles.textField,
                    styles.textFieldPassword
                  )}
                  name="newPassword"
                  floatingLabelText="NEW PASSWORD"
                  isRequired
                  minLength={8}
                  type="password"
                  errorText={this.getError('password')}
                />
                <TextField
                  ref={this.textFieldsRef}
                  className={classNames(
                    styles.textField,
                    styles.textFieldPasswordConfirm
                  )}
                  name="newPassword2"
                  floatingLabelText="CONFIRM NEW PASSWORD"
                  isRequired
                  minLength={8}
                  type="password"
                  match={password}
                  errorText={this.getError('new_password')}
                />
              </div>
            )}
            <div className={styles.footer}>
              <Button
                label="CANCEL"
                className={styles.buttonCancel}
                type="flat"
                onClick={this.handleCancelClick}
              />
              <Button
                label="SAVE CHANGES"
                className={styles.buttonSave}
                color="orange"
                onClick={this.handleSaveClick}
              />
            </div>
          </Paper>
        </div>
      </div>
    );
  }
}

export default environmentHOC(EditProfileBlock);
