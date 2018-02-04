import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import UiMenu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconPerson from 'material-ui/svg-icons/social/person';
import IconExit from 'material-ui/svg-icons/action/exit-to-app';
import Divider from 'material-ui/Divider';
import Icon from '_components/Interface/Icon';
import { getCategoryUrlFromSlug } from '_utils/common';
import styles from './styles.scss';

export default class Menu extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    user: PropTypes.object.isRequired,
    onLogout: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  };

  render() {
    const { categories, user, onLogout, onClose } = this.props;
    const isAutorizedUser = !!user.token;

    return (
      <div>
        <div
          className={classNames(styles.header, {
            [styles.isAutorizedUser]: isAutorizedUser
          })}
        >
          {isAutorizedUser && (
            <div>
              <div
                className={styles.avatar}
                style={{ backgroundImage: `url(${user.avatar})` }}
              />
              <span className={styles.userName}>{user.name}</span>
              <span className={styles.userMail}>{user.email}</span>
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
              <Link to="/signIn">
                <MenuItem
                  className={styles.buttonUser}
                  primaryText="Sign in"
                  leftIcon={<IconPerson />}
                />
              </Link>
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
            <Link key={index} to={getCategoryUrlFromSlug(item.slug)}>
              <MenuItem className={styles.buttonLink} primaryText={item.name} />
            </Link>
          ))}
        </UiMenu>
      </div>
    );
  }
}
