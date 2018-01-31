import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Avatar from '_components/Interface/Avatar';
import Icon from '_components/Interface/Icon';
import Content from './Content';
import EditProfileBlock from './EditProfileBlock';
import styles from './styles.scss';

export default class User extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
  };

  state = {
    isEditMode: false
  };

  toogleEditMode(isEditMode) {
    this.setState({ isEditMode });
  }

  handleEditModeExit = () => {
    this.toogleEditMode(false);
  };

  handleEditProfileButtonClick = () => {
    this.toogleEditMode(true);
  };

  render() {
    const { user, onSort, onEdit } = this.props;
    const { avatar, name, mail, purchased, subscription } = user;
    const { isEditMode } = this.state;

    if (isEditMode) {
      return (
        <EditProfileBlock
          user={user}
          onEdit={onEdit}
          onExit={this.handleEditModeExit}
        />
      );
    }

    return (
      <div>
        <Paper className={styles.header} zDepth={1}>
          <div className={styles.headerLeft}>
            <Avatar className={styles.avatar} img={avatar} />
            <div className={styles.name}>{name}</div>
            <Icon className={styles.mailIcon} name="mail" />
            <div className={styles.mail}>{mail}</div>
          </div>
          <FlatButton
            className={styles.buttonEditProfile}
            label="EDIT PROFILE"
            style={styles.buttonEditProfile}
            icon={<Icon className={styles.editIcon} name="edit" />}
            onClick={this.handleEditProfileButtonClick}
          />
        </Paper>
        <Content
          purchased={purchased}
          subscription={subscription}
          onSort={onSort}
        />
      </div>
    );
  }
}
