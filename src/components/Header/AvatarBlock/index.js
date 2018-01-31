import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Popover from 'material-ui/Popover';
import MenuItem from 'material-ui/MenuItem';
import IconPerson from 'material-ui/svg-icons/social/person';
import IconExit from 'material-ui/svg-icons/action/exit-to-app';
import Avatar from '_components/Interface/Avatar';
import styles from './styles.scss';

export default class AvatarBlock extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired
  };

  state = {
    isMenuOpen: false
  };

  toogleMenu(isMenuOpen) {
    this.setState({ isMenuOpen });
  }

  handleClickAvatar = event => {
    this.setState({
      isMenuOpen: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.toogleMenu(false);
  };

  render() {
    const { className, user, onLogout } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <div className={className}>
        <Avatar
          className={styles.avatar}
          img={user.avatar}
          onClick={this.handleClickAvatar}
        />
        <Popover
          className={styles.menuPopover}
          open={isMenuOpen}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <div className={styles.infoBlock}>
            <div className={styles.name}>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
          </div>
          <Link to="/user">
            <MenuItem
              className={styles.accountButton}
              leftIcon={<IconPerson />}
              primaryText="Your account"
            />
          </Link>
          <MenuItem
            className={styles.logoutButton}
            primaryText="Logout"
            leftIcon={<IconExit />}
            onClick={onLogout}
          />
        </Popover>
      </div>
    );
  }
}
