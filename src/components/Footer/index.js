import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { BottomNavigation } from 'material-ui/BottomNavigation';
import NavigationItem from './NavigationItem';
import styles from './styles.scss';

export default class Footer extends React.PureComponent {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
    onNavigationItemClick: PropTypes.func.isRequired
  };

  render() {
    const { isLogin, onNavigationItemClick } = this.props;
    return (
      <div className={styles.footer}>
        <span className={styles.copyright}>
          © Slypee, 2018. All rights reserved.
        </span>
        <BottomNavigation className={styles.navigation}>
          <NavigationItem
            label="Home"
            iconName="home"
            value="home"
            onClick={onNavigationItemClick}
          />
          <NavigationItem
            className={styles.desktop}
            label="Search"
            iconName="search"
            value="search"
            onClick={onNavigationItemClick}
          />
          <NavigationItem
            className={styles.mobile}
            label="Search"
            iconName="search"
            value="mobileSearch"
            onClick={onNavigationItemClick}
          />
          <NavigationItem
            label="Top charts"
            iconName="star"
            value="topcharts"
            onClick={onNavigationItemClick}
          />
          <NavigationItem
            className={classNames(styles.desktop, styles.userAccountButton)}
            label={isLogin ? 'User account' : 'Sign in'}
            iconName="person"
            value="user"
            onClick={onNavigationItemClick}
          />
          <NavigationItem
            className={styles.mobile}
            label="Account"
            iconName="person"
            value="user"
            onClick={onNavigationItemClick}
          />
        </BottomNavigation>
      </div>
    );
  }
}
