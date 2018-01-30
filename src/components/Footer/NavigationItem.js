import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigationItem } from 'material-ui/BottomNavigation';
import Icon from '_components/Interface/Icon';
import styles from './styles.scss';

export default class NavigationItem extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  handleClick = () => {
    const { value, onClick } = this.props;

    onClick(value);
  };

  render() {
    const { className, label, iconName } = this.props;

    return (
      <BottomNavigationItem
        className={className}
        label={label}
        icon={<Icon name={iconName} className={styles.icon} />}
        onClick={this.handleClick}
      />
    );
  }
}
