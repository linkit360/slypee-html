import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiMenu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconPerson from 'material-ui/svg-icons/social/person';
import IconExit from 'material-ui/svg-icons/action/exit-to-app';
import Divider from 'material-ui/Divider';
import Icon from '_components/interface/Icon';
import MenuItemLink from './MenuItemLink';
import styles from './styles.scss';

export default class Menu extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    isAutorizedUser: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };

  render() {
    const { categories, isAutorizedUser, user, onLogout, onClose } = this.props;

    return (
      <div>
        <div className={styles.header}>
          {user && (
            <div>
              <div
                className={styles.avatar}
                style={{ backgroundImage: `url(${user.avatar})` }}
              />
              <span className={styles.userName}>{user.name}</span>
              <span className={styles.userMail}>{user.mail}</span>
            </div>
          )}
          <Icon className={styles.buttonClose} name="close" onClick={onClose} />
        </div>
        <UiMenu className={styles.menu}>
          <div className={styles.mobileItems}>
            {isAutorizedUser ? (
              <Link to="/user">
                <MenuItem
                  className={styles.buttonUser}
                  primaryText="Your account"
                  leftIcon={<IconPerson />}
                />
              </Link>
            ) : (
              <MenuItem
                className={styles.buttonUser}
                primaryText="Sign in"
                leftIcon={<IconPerson />}
              />
            )}
            <Divider />
            {isAutorizedUser && (
              <div>
                <MenuItem
                  className={styles.buttonLogout}
                  primaryText="Logout"
                  leftIcon={<IconExit />}
                  onClick={onLogout}
                />
                <Divider />
              </div>
            )}
          </div>
          {categories.map((item, index) => (
            <MenuItemLink
              key={index}
              primaryText={item.value}
              route={item.route}
            />
          ))}
        </UiMenu>
      </div>
    );
  }
}
