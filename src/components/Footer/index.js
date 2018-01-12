import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation } from 'material-ui/BottomNavigation';
import NavigationItem from './NavigationItem';
import styles from './styles.scss';

export default class Footer extends React.PureComponent {
  static propTypes = {
    onNavigationItemClick: PropTypes.func.isRequired
  };

  render() {
    const { onNavigationItemClick } = this.props;
    return (
      <div className={styles.footer}>
        <span className={styles.copyright}>
          © Slypee, 2018. All rights reserved.
        </span>
        <BottomNavigation className={styles.navigation}>
          <NavigationItem
            label="Home"
            iconName="home"
            value=""
            onClick={onNavigationItemClick}
          />
          <NavigationItem
            label="Search"
            iconName="search"
            value="search"
            onClick={onNavigationItemClick}
          />
          <NavigationItem
            label="Top charts"
            iconName="star"
            value="topcharts"
            onClick={onNavigationItemClick}
          />
          <NavigationItem
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
