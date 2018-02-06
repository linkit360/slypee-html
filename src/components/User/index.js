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
    content: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onFetchContent: PropTypes.func.isRequired,
    onFetchContentMore: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onChangeSortUserContent: PropTypes.func.isRequired,
    onChangeTypeUserContent: PropTypes.func.isRequired
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
    const {
      content,
      user,
      onEdit,
      onFetchContentMore,
      onChangeSortUserContent,
      onChangeTypeUserContent
    } = this.props;
    const { avatar, name, email } = user;
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
            <div className={styles.mail}>{email}</div>
          </div>
          <FlatButton
            className={styles.buttonEditProfile}
            label="EDIT PROFILE"
            icon={<Icon className={styles.editIcon} name="edit" />}
            onClick={this.handleEditProfileButtonClick}
          />
        </Paper>
        <Content
          content={content}
          onFetchMore={onFetchContentMore}
          onChangeSort={onChangeSortUserContent}
          onChangeType={onChangeTypeUserContent}
        />
      </div>
    );
  }
}
